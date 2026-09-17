/**
 * PhysiVault Application Controller
 * Manages routing, state, live search, multi-filter library, modal views,
 * simulation orchestration, and calculator integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    currentView: 'home',
    searchQuery: '',
    selectedLevel: 'all',
    selectedSubject: 'all',
    selectedDifficulty: 'all',
    sortBy: 'default',
    theme: localStorage.getItem('physivault_theme') || 'dark',
    activeSim: 'projectile',
    activeModalFormulaId: null
  };

  // 1. Theme Management
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('physivault_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark'
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }
  applyTheme(state.theme);

  if (themeToggleBtn) {
    themeToggleBtn.onclick = () => {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    };
  }

  // 2. Navigation & Routing (Hash based)
  const navLinks = document.querySelectorAll('.pv-nav-link');
  const views = document.querySelectorAll('.pv-view');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinksList = document.getElementById('nav-links-list');

  if (mobileMenuBtn && navLinksList) {
    mobileMenuBtn.onclick = () => {
      navLinksList.classList.toggle('mobile-open');
    };
  }

  function navigateTo(viewId, params = {}) {
    state.currentView = viewId;
    if (navLinksList) navLinksList.classList.remove('mobile-open');

    // Update active nav link
    navLinks.forEach(link => {
      if (link.getAttribute('data-view') === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update view visibility
    views.forEach(v => {
      if (v.id === `view-${viewId}`) {
        v.classList.add('active');
      } else {
        v.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle view-specific initializations
    if (viewId === 'library') {
      if (params.level) state.selectedLevel = params.level;
      if (params.subject) state.selectedSubject = params.subject;
      if (params.search) state.searchQuery = params.search;
      syncFilterInputs();
      renderFormulaLibrary();
    } else if (viewId === 'visualizations') {
      const sim = params.sim || state.activeSim || 'projectile';
      switchSimulation(sim);
    } else if (viewId === 'calculators') {
      renderCalculatorsSection(params.calcId);
    } else if (viewId === 'schrodinger') {
      PhysicsSimulations.initSchrodingerStudio('schrodinger-studio-mount');
    } else if (viewId === 'topics') {
      renderTopicsSection();
    }

    // Update URL hash without reload
    let hash = `#${viewId}`;
    if (params.formula) hash = `#formula/${params.formula}`;
    window.location.hash = hash;
  }

  window.addEventListener('hashchange', () => {
    handleHashRoute();
  });

  function handleHashRoute() {
    const rawHash = window.location.hash.slice(1);
    if (!rawHash) {
      navigateTo('home');
      return;
    }

    if (rawHash.startsWith('formula/')) {
      const formulaId = rawHash.replace('formula/', '');
      navigateTo('library');
      openFormulaModal(formulaId);
      return;
    }

    const [route, queryString] = rawHash.split('?');
    const params = {};
    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      for (const [k, v] of searchParams.entries()) {
        params[k] = v;
      }
    }

    if (['home', 'library', 'topics', 'visualizations', 'calculators', 'schrodinger', 'about'].includes(route)) {
      navigateTo(route, params);
    } else {
      navigateTo('home');
    }
  }

  navLinks.forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      const viewId = link.getAttribute('data-view');
      navigateTo(viewId);
    };
  });

  // 3. Search Engine
  function searchFormulas(query) {
    if (!query || !query.trim()) return FORMULAS_DATA;
    const q = query.trim().toLowerCase();
    const tokens = q.split(/\s+/).filter(t => t.length > 0);

    return FORMULAS_DATA.filter(item => {
      const searchableFields = [
        item.name.toLowerCase(),
        item.equation.toLowerCase(),
        item.subject.toLowerCase(),
        item.topic.toLowerCase(),
        item.level.toLowerCase(),
        item.explanation.toLowerCase(),
        (item.tags || []).join(' ').toLowerCase(),
        (item.applications || []).join(' ').toLowerCase()
      ].join(' ');

      // Exact match bonus or all tokens present
      if (q === 'particle in box' || q === 'particle in a box') {
        return item.id.includes('box') || item.id.includes('schrodinger') ||
               item.name.toLowerCase().includes('schrödinger') ||
               item.name.toLowerCase().includes('box') ||
               (item.tags && item.tags.includes('particle in box'));
      }

      if (q === 'ohm' || q === "ohm's") {
        return item.id.includes('ohm') || item.name.toLowerCase().includes('ohm') ||
               item.subject.toLowerCase().includes('current electricity') ||
               (item.tags && item.tags.includes('ohm'));
      }

      return tokens.every(token => searchableFields.includes(token));
    });
  }

  // Hero Search Input & Live Suggestions
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroSearchBtn = document.getElementById('hero-search-btn');
  const heroSuggestions = document.getElementById('hero-search-suggestions');

  if (heroSearchInput && heroSuggestions) {
    heroSearchInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (!val) {
        heroSuggestions.classList.remove('show');
        heroSuggestions.innerHTML = '';
        return;
      }

      const results = searchFormulas(val).slice(0, 6);
      if (results.length === 0) {
        heroSuggestions.innerHTML = `<div class="pv-suggestion-item" style="color:var(--text-muted);">No formulas found matching "${val}"</div>`;
        heroSuggestions.classList.add('show');
        return;
      }

      heroSuggestions.innerHTML = results.map(item => `
        <div class="pv-suggestion-item" data-id="${item.id}">
          <div>
            <div class="pv-sugg-name">${item.name}</div>
            <div class="pv-sugg-eq">${item.equation}</div>
          </div>
          <div class="pv-sugg-meta">
            <span class="pv-level-pill">${item.level}</span>
            <span>${item.subject}</span>
          </div>
        </div>
      `).join('');
      heroSuggestions.classList.add('show');

      heroSuggestions.querySelectorAll('.pv-suggestion-item').forEach(el => {
        el.onclick = () => {
          const fid = el.getAttribute('data-id');
          if (fid) {
            heroSuggestions.classList.remove('show');
            openFormulaModal(fid);
          }
        };
      });
    });

    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = heroSearchInput.value.trim();
        heroSuggestions.classList.remove('show');
        navigateTo('library', { search: val });
      }
    });

    if (heroSearchBtn) {
      heroSearchBtn.onclick = () => {
        const val = heroSearchInput.value.trim();
        heroSuggestions.classList.remove('show');
        navigateTo('library', { search: val });
      };
    }

    // Close suggestions on outside click
    document.addEventListener('click', (e) => {
      if (!heroSearchInput.contains(e.target) && !heroSuggestions.contains(e.target)) {
        heroSuggestions.classList.remove('show');
      }
    });
  }

  // 4. Quick-Access Level Cards on Homepage
  const levelCardsContainer = document.getElementById('home-level-cards');
  if (levelCardsContainer) {
    levelCardsContainer.innerHTML = ACADEMIC_LEVELS.map(lvl => {
      const count = FORMULAS_DATA.filter(f => f.level.toLowerCase().includes(lvl.name.toLowerCase()) || (lvl.id === 'btech' && f.level.includes('B.Tech')) || (lvl.id === 'phd' && f.level.includes('PhD'))).length;
      return `
        <div class="pv-level-card" data-level="${lvl.name}">
          <div>
            <span class="pv-level-badge">${lvl.badge}</span>
            <h3 class="pv-level-name">${lvl.name}</h3>
            <p class="pv-level-desc">${lvl.subtitle}</p>
          </div>
          <div class="pv-level-footer">
            <span>Explore ${count} Core Equations</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      `;
    }).join('');

    levelCardsContainer.querySelectorAll('.pv-level-card').forEach(card => {
      card.onclick = () => {
        const lvl = card.getAttribute('data-level');
        navigateTo('library', { level: lvl });
      };
    });
  }

  // 5. Popular Topics Cards on Homepage
  const popularTopicsContainer = document.getElementById('home-popular-topics');
  if (popularTopicsContainer) {
    // Pick 8 representative categories
    const popularCats = SUBJECT_CATEGORIES.slice(0, 8);
    popularTopicsContainer.innerHTML = popularCats.map(cat => `
      <div class="pv-cat-card" data-subject="${cat.name}">
        <div>
          <div class="pv-cat-top">
            <div class="pv-cat-icon-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
            </div>
            <span class="pv-cat-count">${cat.count} Formulas</span>
          </div>
          <h4 class="pv-cat-title">${cat.name}</h4>
          <p class="pv-cat-desc">${cat.desc}</p>
        </div>
      </div>
    `).join('');

    popularTopicsContainer.querySelectorAll('.pv-cat-card').forEach(card => {
      card.onclick = () => {
        const sub = card.getAttribute('data-subject');
        navigateTo('library', { subject: sub });
      };
    });
  }

  // 6. Topics Section (Complete 24 categories)
  function renderTopicsSection() {
    const topicsMount = document.getElementById('topics-grid-mount');
    if (!topicsMount) return;

    topicsMount.innerHTML = SUBJECT_CATEGORIES.map(cat => `
      <div class="pv-cat-card" data-subject="${cat.name}">
        <div>
          <div class="pv-cat-top">
            <div class="pv-cat-icon-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <span class="pv-cat-count">${cat.count} Equations</span>
          </div>
          <h4 class="pv-cat-title">${cat.name}</h4>
          <p class="pv-cat-desc">${cat.desc}</p>
        </div>
        <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan);">Browse Subject →</span>
        </div>
      </div>
    `).join('');

    topicsMount.querySelectorAll('.pv-cat-card').forEach(card => {
      card.onclick = () => {
        const sub = card.getAttribute('data-subject');
        navigateTo('library', { subject: sub });
      };
    });
  }

  // 7. Formula Library View
  const libLevelSelect = document.getElementById('lib-filter-level');
  const libSubjectSelect = document.getElementById('lib-filter-subject');
  const libDiffSelect = document.getElementById('lib-filter-diff');
  const libSearchInput = document.getElementById('lib-search-input');
  const libSortSelect = document.getElementById('lib-sort-select');
  const libResultsMount = document.getElementById('lib-results-mount');
  const libCountDisplay = document.getElementById('lib-results-count');
  const libClearBtn = document.getElementById('lib-clear-filters');

  // Populate filter dropdowns
  if (libLevelSelect && libLevelSelect.children.length <= 1) {
    ACADEMIC_LEVELS.forEach(lvl => {
      const opt = document.createElement('option');
      opt.value = lvl.name;
      opt.textContent = lvl.name;
      libLevelSelect.appendChild(opt);
    });
  }

  if (libSubjectSelect && libSubjectSelect.children.length <= 1) {
    SUBJECT_CATEGORIES.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.name;
      opt.textContent = `${cat.name} (${cat.count})`;
      libSubjectSelect.appendChild(opt);
    });
  }

  function syncFilterInputs() {
    if (libLevelSelect) libLevelSelect.value = state.selectedLevel;
    if (libSubjectSelect) libSubjectSelect.value = state.selectedSubject;
    if (libDiffSelect) libDiffSelect.value = state.selectedDifficulty;
    if (libSearchInput) libSearchInput.value = state.searchQuery;
    if (libSortSelect) libSortSelect.value = state.sortBy;
  }

  if (libLevelSelect) {
    libLevelSelect.onchange = (e) => {
      state.selectedLevel = e.target.value;
      renderFormulaLibrary();
    };
  }
  if (libSubjectSelect) {
    libSubjectSelect.onchange = (e) => {
      state.selectedSubject = e.target.value;
      renderFormulaLibrary();
    };
  }
  if (libDiffSelect) {
    libDiffSelect.onchange = (e) => {
      state.selectedDifficulty = e.target.value;
      renderFormulaLibrary();
    };
  }
  if (libSearchInput) {
    libSearchInput.oninput = (e) => {
      state.searchQuery = e.target.value;
      renderFormulaLibrary();
    };
  }
  if (libSortSelect) {
    libSortSelect.onchange = (e) => {
      state.sortBy = e.target.value;
      renderFormulaLibrary();
    };
  }
  if (libClearBtn) {
    libClearBtn.onclick = () => {
      state.selectedLevel = 'all';
      state.selectedSubject = 'all';
      state.selectedDifficulty = 'all';
      state.searchQuery = '';
      state.sortBy = 'default';
      syncFilterInputs();
      renderFormulaLibrary();
    };
  }

  function renderFormulaLibrary() {
    if (!libResultsMount) return;

    // Apply text search
    let filtered = searchFormulas(state.searchQuery);

    // Apply level filter
    if (state.selectedLevel !== 'all') {
      filtered = filtered.filter(f => f.level.toLowerCase().includes(state.selectedLevel.toLowerCase()));
    }

    // Apply subject filter
    if (state.selectedSubject !== 'all') {
      filtered = filtered.filter(f => f.subject.toLowerCase() === state.selectedSubject.toLowerCase());
    }

    // Apply difficulty filter
    if (state.selectedDifficulty !== 'all') {
      filtered = filtered.filter(f => f.difficulty.toLowerCase() === state.selectedDifficulty.toLowerCase());
    }

    // Sorting
    if (state.sortBy === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sortBy === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (state.sortBy === 'difficulty') {
      const order = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
      filtered.sort((a, b) => (order[a.difficulty] || 0) - (order[b.difficulty] || 0));
    }

    // Update count display
    if (libCountDisplay) {
      libCountDisplay.textContent = `Showing ${filtered.length} of ${FORMULAS_DATA.length} formulas`;
    }

    if (filtered.length === 0) {
      libResultsMount.innerHTML = `
        <div class="pv-empty-state">
          <div class="pv-empty-icon">🔍</div>
          <h3>No matching physics formulas found</h3>
          <p style="color:var(--text-secondary); margin: 0.5rem 0 1.25rem;">
            Try adjusting your search query, clearing filters, or browsing by academic level.
          </p>
          <button id="empty-clear-btn" class="pv-btn pv-btn-primary">Clear All Filters</button>
        </div>
      `;
      const btn = document.getElementById('empty-clear-btn');
      if (btn) {
        btn.onclick = () => {
          state.selectedLevel = 'all';
          state.selectedSubject = 'all';
          state.selectedDifficulty = 'all';
          state.searchQuery = '';
          syncFilterInputs();
          renderFormulaLibrary();
        };
      }
      return;
    }

    libResultsMount.innerHTML = filtered.map(f => {
      const renderedEq = MathRenderer.render(f.latex || f.equation);
      const varChips = (f.variables || []).slice(0, 3).map(v => `<span class="pv-var-chip">${v.symbol}: ${v.name}</span>`).join('');

      return `
        <div class="pv-formula-card" data-id="${f.id}">
          <div>
            <div class="pv-card-top-meta">
              <span class="pv-level-pill">${f.level}</span>
              <span class="pv-diff-pill pv-diff-${f.difficulty}">${f.difficulty}</span>
              <span style="font-size:0.75rem; color:var(--text-muted);">${f.subject}</span>
            </div>
            <h3 class="pv-formula-title">${f.name}</h3>
            <div class="pv-equation-display">${renderedEq}</div>
            <p class="pv-formula-desc">${f.explanation}</p>
            <div class="pv-var-chips">${varChips}</div>
            <div class="pv-unit-row">
              <strong>SI Unit:</strong> <span>${f.units ? f.units.si : 'Standard SI'}</span>
            </div>
          </div>
          <div class="pv-card-actions">
            <button class="pv-btn pv-btn-primary pv-btn-learn-more" data-id="${f.id}">
              Learn More & Derivation
            </button>
            ${f.calculatorId ? `<button class="pv-btn pv-btn-secondary pv-btn-jump-calc" data-calc="${f.calculatorId}" title="Interactive Calculator">🧮 Calc</button>` : ''}
          </div>
        </div>
      `;
    }).join('');

    libResultsMount.querySelectorAll('.pv-btn-learn-more').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openFormulaModal(id);
      };
    });

    libResultsMount.querySelectorAll('.pv-btn-jump-calc').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const cid = btn.getAttribute('data-calc');
        navigateTo('calculators', { calcId: cid });
      };
    });

    libResultsMount.querySelectorAll('.pv-formula-card').forEach(card => {
      card.onclick = () => {
        const id = card.getAttribute('data-id');
        openFormulaModal(id);
      };
    });
  }

  // 8. Formula Detail Modal (All 10 Points)
  const modalBackdrop = document.getElementById('formula-modal-backdrop');
  const modalCloseBtn = document.getElementById('formula-modal-close');
  const modalBody = document.getElementById('formula-modal-body');
  const modalTitle = document.getElementById('formula-modal-title');

  function openFormulaModal(formulaId) {
    const f = FORMULAS_DATA.find(item => item.id === formulaId);
    if (!f || !modalBackdrop || !modalBody) return;

    state.activeModalFormulaId = formulaId;
    modalTitle.textContent = f.name;

    const renderedEq = MathRenderer.render(f.latex || f.equation);

    // Variables table rows
    const varsRows = (f.variables || []).map(v => `
      <tr>
        <td><strong>${v.symbol}</strong></td>
        <td>${v.name}</td>
        <td><code>${v.unit}</code></td>
        <td>${v.description}</td>
      </tr>
    `).join('');

    // Special cases cards
    const casesHtml = (f.specialCases && f.specialCases.length > 0)
      ? f.specialCases.map(c => `
          <div class="pv-special-case-card">
            <h5>${c.title} (${c.condition})</h5>
            <div class="pv-case-eq">${MathRenderer.render(c.equation)}</div>
            <p style="font-size:0.8rem; color:var(--text-secondary);">${c.description}</p>
          </div>
        `).join('')
      : '<p style="font-size:0.85rem; color:var(--text-muted);">Standard boundary limits apply.</p>';

    // Applications list
    const appsHtml = (f.applications && f.applications.length > 0)
      ? f.applications.map(app => `<li>${app}</li>`).join('')
      : '<li>Engineering and fundamental physical modeling.</li>';

    // Related formulas chips
    const relatedHtml = (f.relatedFormulas && f.relatedFormulas.length > 0)
      ? f.relatedFormulas.map(rfId => {
          const rf = FORMULAS_DATA.find(x => x.id === rfId);
          const rfName = rf ? rf.name : rfId.replace(/-/g, ' ');
          return `<button class="pv-related-link-chip" data-id="${rfId}">${rfName} →</button>`;
        }).join('')
      : '<span style="color:var(--text-muted); font-size:0.85rem;">None</span>';

    // Embedded calculator container
    const calcSectionHtml = f.calculatorId
      ? `<div class="pv-detail-section">
           <div class="pv-detail-heading">10. Interactive Physics Calculator</div>
           <div id="modal-calc-mount"></div>
         </div>`
      : `<div class="pv-detail-section">
           <div class="pv-detail-heading">10. Interactive Tools</div>
           <p style="font-size:0.85rem; color:var(--text-secondary);">
             Explore related simulations in the Visualizations studio or use our dedicated scientific calculators.
           </p>
         </div>`;

    modalBody.innerHTML = `
      <!-- 1. Rendered Formula -->
      <div class="pv-detail-section">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div class="pv-detail-heading">1. Mathematical Formula</div>
          <div>
            <span class="pv-level-pill">${f.level}</span>
            <span class="pv-diff-pill pv-diff-${f.difficulty}">${f.difficulty}</span>
          </div>
        </div>
        <div class="pv-detail-equation-hero">${renderedEq}</div>
      </div>

      <!-- 2. Physical Meaning -->
      <div class="pv-detail-section">
        <div class="pv-detail-heading">2. Physical Meaning & Core Concept</div>
        <p style="font-size:0.95rem; color:var(--text-primary); line-height:1.6;">${f.explanation}</p>
      </div>

      <!-- 3. Variables & Symbols -->
      <div class="pv-detail-section">
        <div class="pv-detail-heading">3. Variables & Notation Breakdown</div>
        <div style="overflow-x:auto;">
          <table class="pv-vars-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Quantity</th>
                <th>SI Unit</th>
                <th>Physical Role</th>
              </tr>
            </thead>
            <tbody>${varsRows}</tbody>
          </table>
        </div>
      </div>

      <!-- 4. SI Units & Dimensional Formula -->
      <div class="pv-detail-section">
        <div class="pv-detail-heading">4. SI Units & Dimensions</div>
        <div style="background:var(--bg-surface-elevated); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-color); font-size:0.875rem;">
          <div><strong>Primary SI Unit:</strong> ${f.units ? f.units.si : 'Standard SI Unit'}</div>
          <div style="margin-top:0.35rem;"><strong>Dimensional Formula:</strong> <code>${f.units ? f.units.dimension : '[M L T]'}</code></div>
        </div>
      </div>

      <!-- 5. Step-by-Step Derivation -->
      <div class="pv-detail-section">
        <div class="pv-detail-heading">5. Step-by-Step Mathematical Derivation</div>
        <div class="pv-derivation-box">${f.derivation}</div>
      </div>

      <!-- 6. Special Cases & Limiting Scenarios -->
      <div class="pv-detail-section">
        <div class="pv-detail-heading">6. Special Cases & Boundary Limits</div>
        <div class="pv-special-cases-grid">${casesHtml}</div>
      </div>

      <!-- 7. Applications -->
      <div class="pv-detail-section">
        <div class="pv-detail-heading">7. Engineering & Real-World Applications</div>
        <ul class="pv-applications-list">${appsHtml}</ul>
      </div>

      <!-- 8. Related Formulas -->
      <div class="pv-detail-section">
        <div class="pv-detail-heading">8. Related Formulas & Physical Principles</div>
        <div class="pv-related-links">${relatedHtml}</div>
      </div>

      <!-- 9. Academic Level & Taxonomy -->
      <div class="pv-detail-section">
        <div class="pv-detail-heading">9. Academic Level & Taxonomy</div>
        <div style="font-size:0.875rem; color:var(--text-secondary);">
          <strong>Subject:</strong> ${f.subject} &emsp;|&emsp;
          <strong>Topic:</strong> ${f.topic} &emsp;|&emsp;
          <strong>Level:</strong> ${f.level} &emsp;|&emsp;
          <strong>Difficulty:</strong> ${f.difficulty}
        </div>
      </div>

      <!-- 10. Interactive Calculator / Link -->
      ${calcSectionHtml}
    `;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Hook related formulas click
    modalBody.querySelectorAll('.pv-related-link-chip').forEach(chip => {
      chip.onclick = () => {
        const id = chip.getAttribute('data-id');
        openFormulaModal(id);
      };
    });

    // Mount embedded calculator if available
    if (f.calculatorId) {
      PhysicsCalculators.renderCalculator(f.calculatorId, 'modal-calc-mount');
    }
  }

  function closeFormulaModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      state.activeModalFormulaId = null;
    }
  }

  if (modalCloseBtn) modalCloseBtn.onclick = closeFormulaModal;
  if (modalBackdrop) {
    modalBackdrop.onclick = (e) => {
      if (e.target === modalBackdrop) closeFormulaModal();
    };
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFormulaModal();
  });

  // 9. Visualizations Section Orchestrator
  const simTabs = document.querySelectorAll('.pv-sim-tab-btn');
  function switchSimulation(simKey) {
    state.activeSim = simKey;
    simTabs.forEach(btn => {
      if (btn.getAttribute('data-sim') === simKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const mount = 'active-sim-mount';
    PhysicsSimulations.stopCurrent();

    if (simKey === 'projectile') PhysicsSimulations.initProjectile(mount);
    else if (simKey === 'shm') PhysicsSimulations.initSHM(mount);
    else if (simKey === 'wave') PhysicsSimulations.initWavePropagation(mount);
    else if (simKey === 'doubleslit') PhysicsSimulations.initDoubleSlit(mount);
    else if (simKey === 'efield') PhysicsSimulations.initElectricField(mount);
    else if (simKey === 'bfield') PhysicsSimulations.initMagneticField(mount);
    else if (simKey === 'pbox') PhysicsSimulations.initParticleInBox(mount);
    else if (simKey === 'tunnel') PhysicsSimulations.initQuantumTunnelling(mount);
  }

  simTabs.forEach(btn => {
    btn.onclick = () => {
      const sim = btn.getAttribute('data-sim');
      switchSimulation(sim);
    };
  });

  // 10. Calculators Section Orchestrator
  function renderCalculatorsSection(highlightCalcId) {
    const mount = document.getElementById('calculators-grid-mount');
    if (!mount) return;

    const calcs = PhysicsCalculators.getCalculators();
    mount.innerHTML = calcs.map(c => `<div id="calc-mount-${c.id}"></div>`).join('');

    calcs.forEach(c => {
      PhysicsCalculators.renderCalculator(c.id, `calc-mount-${c.id}`);
    });

    if (highlightCalcId) {
      setTimeout(() => {
        const target = document.getElementById(`calc-mount-${highlightCalcId}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          target.style.outline = '2px solid var(--accent-cyan)';
          setTimeout(() => { target.style.outline = 'none'; }, 2000);
        }
      }, 100);
    }
  }

  // Handle initial route
  handleHashRoute();
});
