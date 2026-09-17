/**
 * PhysiVault Interactive Physics Simulations Suite
 * High-performance HTML5 Canvas simulations with mathematical accuracy,
 * interactive parameter controls, and real-time scientific graphing.
 */

const PhysicsSimulations = (function () {
  let activeAnimationId = null;
  let activeSimKey = null;

  // Utility to handle high-DPI displays crisply
  function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 600;
    const height = rect.height || 360;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, width, height };
  }

  function stopCurrent() {
    if (activeAnimationId) {
      cancelAnimationFrame(activeAnimationId);
      activeAnimationId = null;
    }
  }

  // =========================================================================
  // 1. PROJECTILE MOTION SIMULATION
  // =========================================================================
  function initProjectile(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-sim-layout">
        <div class="pv-sim-canvas-wrap">
          <canvas id="projectile-canvas" class="pv-sim-canvas"></canvas>
          <div class="pv-sim-overlay-stats" id="projectile-stats">
            <div><span>Flight Time (T):</span> <strong id="proj-stat-t">0.00 s</strong></div>
            <div><span>Max Height (H):</span> <strong id="proj-stat-h">0.00 m</strong></div>
            <div><span>Range (R):</span> <strong id="proj-stat-r">0.00 m</strong></div>
            <div><span>Current (x, y):</span> <strong id="proj-stat-xy">(0.0, 0.0) m</strong></div>
          </div>
        </div>
        <div class="pv-sim-controls">
          <div class="pv-sim-control-group">
            <label>Initial Velocity (v₀): <span id="proj-val-v">40</span> m/s</label>
            <input type="range" id="proj-slider-v" min="10" max="100" value="40" step="1">
          </div>
          <div class="pv-sim-control-group">
            <label>Launch Angle (θ): <span id="proj-val-ang">45</span>°</label>
            <input type="range" id="proj-slider-ang" min="5" max="85" value="45" step="1">
          </div>
          <div class="pv-sim-control-group">
            <label>Gravity Environment:</label>
            <select id="proj-select-g" class="pv-select">
              <option value="9.81">Earth (g = 9.81 m/s²)</option>
              <option value="1.62">Moon (g = 1.62 m/s²)</option>
              <option value="3.72">Mars (g = 3.72 m/s²)</option>
              <option value="24.79">Jupiter (g = 24.79 m/s²)</option>
            </select>
          </div>
          <div class="pv-sim-control-group">
            <label class="pv-checkbox-label">
              <input type="checkbox" id="proj-check-drag"> Simulate Air Resistance (Drag)
            </label>
          </div>
          <div class="pv-sim-btn-row">
            <button id="proj-btn-launch" class="pv-btn pv-btn-primary">Launch Projectile</button>
            <button id="proj-btn-reset" class="pv-btn pv-btn-secondary">Reset / Clear</button>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('projectile-canvas');
    let v0 = 40;
    let angleDeg = 45;
    let g = 9.81;
    let airDrag = false;

    let isFlying = false;
    let simTime = 0;
    let posX = 0;
    let posY = 0;
    let velX = 0;
    let velY = 0;
    let trajectory = [];
    let pastTrajectories = [];

    // Theoretical calculations
    function updateTheoretical() {
      const rad = (angleDeg * Math.PI) / 180;
      const T = (2 * v0 * Math.sin(rad)) / g;
      const H = Math.pow(v0 * Math.sin(rad), 2) / (2 * g);
      const R = (Math.pow(v0, 2) * Math.sin(2 * rad)) / g;
      document.getElementById('proj-stat-t').textContent = T.toFixed(2) + ' s';
      document.getElementById('proj-stat-h').textContent = H.toFixed(2) + ' m';
      document.getElementById('proj-stat-r').textContent = R.toFixed(2) + ' m';
    }
    updateTheoretical();

    function resetSim() {
      isFlying = false;
      simTime = 0;
      posX = 0;
      posY = 0;
      const rad = (angleDeg * Math.PI) / 180;
      velX = v0 * Math.cos(rad);
      velY = v0 * Math.sin(rad);
      trajectory = [];
      document.getElementById('proj-stat-xy').textContent = `(0.0, 0.0) m`;
      draw();
    }

    function launch() {
      if (trajectory.length > 0) {
        pastTrajectories.push([...trajectory]);
        if (pastTrajectories.length > 3) pastTrajectories.shift();
      }
      resetSim();
      isFlying = true;
    }

    document.getElementById('proj-slider-v').oninput = function(e) {
      v0 = parseFloat(e.target.value);
      document.getElementById('proj-val-v').textContent = v0;
      updateTheoretical();
      if (!isFlying) resetSim();
    };

    document.getElementById('proj-slider-ang').oninput = function(e) {
      angleDeg = parseFloat(e.target.value);
      document.getElementById('proj-val-ang').textContent = angleDeg;
      updateTheoretical();
      if (!isFlying) resetSim();
    };

    document.getElementById('proj-select-g').onchange = function(e) {
      g = parseFloat(e.target.value);
      updateTheoretical();
      if (!isFlying) resetSim();
    };

    document.getElementById('proj-check-drag').onchange = function(e) {
      airDrag = e.target.checked;
      if (!isFlying) resetSim();
    };

    document.getElementById('proj-btn-launch').onclick = launch;
    document.getElementById('proj-btn-reset').onclick = function () {
      pastTrajectories = [];
      resetSim();
    };

    function draw() {
      const { ctx, width, height } = setupCanvas(canvas);

      // Background grid
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      // Draw coordinate grid
      const groundY = height - 40;
      const originX = 50;
      const scale = Math.min((width - 100) / 450, (height - 80) / 180); // meters to pixels

      ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= 500; x += 50) {
        const px = originX + x * scale;
        if (px > width) break;
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, groundY);
        ctx.stroke();

        ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
        ctx.font = '10px Inter, sans-serif';
        ctx.fillText(x + 'm', px - 10, groundY + 16);
      }

      for (let y = 0; y <= 200; y += 25) {
        const py = groundY - y * scale;
        if (py < 20) break;
        ctx.beginPath();
        ctx.moveTo(originX, py);
        ctx.lineTo(width, py);
        ctx.stroke();

        ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
        ctx.font = '10px Inter, sans-serif';
        ctx.fillText(y + 'm', originX - 35, py + 4);
      }

      // Ground plane
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      // Draw launcher canon
      const rad = (angleDeg * Math.PI) / 180;
      const canonLen = 28;
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(originX, groundY);
      ctx.lineTo(originX + canonLen * Math.cos(rad), groundY - canonLen * Math.sin(rad));
      ctx.stroke();

      // Draw past trajectories
      pastTrajectories.forEach(traj => {
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        traj.forEach((pt, i) => {
          const px = originX + pt.x * scale;
          const py = groundY - pt.y * scale;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw active trajectory
      if (trajectory.length > 0) {
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        trajectory.forEach((pt, i) => {
          const px = originX + pt.x * scale;
          const py = groundY - pt.y * scale;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();
      }

      // Draw projectile ball
      const ballPx = originX + posX * scale;
      const ballPy = groundY - posY * scale;

      ctx.fillStyle = '#f59e0b';
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(ballPx, ballPy, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw velocity vector arrow
      if (isFlying) {
        const vScale = 0.5;
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ballPx, ballPy);
        ctx.lineTo(ballPx + velX * vScale, ballPy - velY * vScale);
        ctx.stroke();
      }
    }

    let lastTime = performance.now();
    function animate(currentTime) {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      if (isFlying) {
        // Physics update (Euler-Cromer / Runge-Kutta step)
        const subSteps = 8;
        const subDt = dt / subSteps;

        for (let i = 0; i < subSteps; i++) {
          let ax = 0;
          let ay = -g;

          if (airDrag) {
            const dragCoeff = 0.0018; // approx quadratic aerodynamic drag
            const speed = Math.sqrt(velX * velX + velY * velY);
            ax -= dragCoeff * speed * velX;
            ay -= dragCoeff * speed * velY;
          }

          velX += ax * subDt;
          velY += ay * subDt;
          posX += velX * subDt;
          posY += velY * subDt;

          if (posY <= 0 && posX > 0) {
            posY = 0;
            isFlying = false;
            break;
          }
        }

        simTime += dt;
        trajectory.push({ x: posX, y: posY });
        document.getElementById('proj-stat-xy').textContent = `(${posX.toFixed(1)}, ${posY.toFixed(1)}) m`;
      }

      draw();
      activeAnimationId = requestAnimationFrame(animate);
    }

    resetSim();
    activeAnimationId = requestAnimationFrame(animate);
  }

  // =========================================================================
  // 2. SIMPLE HARMONIC MOTION SIMULATION
  // =========================================================================
  function initSHM(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-sim-layout">
        <div class="pv-sim-canvas-wrap">
          <canvas id="shm-canvas" class="pv-sim-canvas"></canvas>
          <div class="pv-sim-overlay-stats">
            <div><span>Mode:</span> <strong id="shm-stat-mode">Mass-Spring</strong></div>
            <div><span>Frequency (f):</span> <strong id="shm-stat-f">0.50 Hz</strong></div>
            <div><span>Period (T):</span> <strong id="shm-stat-t">2.00 s</strong></div>
            <div><span>Total Energy (E):</span> <strong id="shm-stat-e">5.00 J</strong></div>
          </div>
        </div>
        <div class="pv-sim-controls">
          <div class="pv-sim-control-group">
            <label>Oscillator Type:</label>
            <select id="shm-select-type" class="pv-select">
              <option value="spring">Mass-Spring System</option>
              <option value="pendulum">Simple Pendulum</option>
            </select>
          </div>
          <div class="pv-sim-control-group" id="shm-param-k-wrap">
            <label>Spring Constant (k): <span id="shm-val-k">25</span> N/m</label>
            <input type="range" id="shm-slider-k" min="5" max="100" value="25" step="1">
          </div>
          <div class="pv-sim-control-group" id="shm-param-l-wrap" style="display:none;">
            <label>Pendulum Length (L): <span id="shm-val-l">1.5</span> m</label>
            <input type="range" id="shm-slider-l" min="0.5" max="3.0" value="1.5" step="0.1">
          </div>
          <div class="pv-sim-control-group">
            <label>Oscillator Mass (m): <span id="shm-val-m">2.0</span> kg</label>
            <input type="range" id="shm-slider-m" min="0.5" max="10.0" value="2.0" step="0.5">
          </div>
          <div class="pv-sim-control-group">
            <label>Initial Amplitude (A): <span id="shm-val-a">0.8</span> m</label>
            <input type="range" id="shm-slider-a" min="0.2" max="1.5" value="0.8" step="0.1">
          </div>
          <div class="pv-sim-control-group">
            <label>Damping Ratio (γ): <span id="shm-val-damp">0.00</span></label>
            <input type="range" id="shm-slider-damp" min="0.0" max="0.2" value="0.0" step="0.01">
          </div>
          <div class="pv-sim-btn-row">
            <button id="shm-btn-toggle" class="pv-btn pv-btn-primary">Pause / Play</button>
            <button id="shm-btn-reset" class="pv-btn pv-btn-secondary">Reset Position</button>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('shm-canvas');
    let mode = 'spring';
    let k = 25;
    let L = 1.5;
    let m = 2.0;
    let A0 = 0.8;
    let damping = 0.0;
    let isRunning = true;
    let simTime = 0;

    let historyX = [];

    function updateStats() {
      let omega = mode === 'spring' ? Math.sqrt(k / m) : Math.sqrt(9.81 / L);
      let T = (2 * Math.PI) / omega;
      let f = 1 / T;
      let E_tot = mode === 'spring' ? 0.5 * k * A0 * A0 : m * 9.81 * L * (1 - Math.cos(A0 / L));

      document.getElementById('shm-stat-mode').textContent = mode === 'spring' ? 'Mass-Spring' : 'Simple Pendulum';
      document.getElementById('shm-stat-f').textContent = f.toFixed(2) + ' Hz';
      document.getElementById('shm-stat-t').textContent = T.toFixed(2) + ' s';
      document.getElementById('shm-stat-e').textContent = E_tot.toFixed(2) + ' J';
    }
    updateStats();

    document.getElementById('shm-select-type').onchange = function(e) {
      mode = e.target.value;
      document.getElementById('shm-param-k-wrap').style.display = mode === 'spring' ? 'block' : 'none';
      document.getElementById('shm-param-l-wrap').style.display = mode === 'pendulum' ? 'block' : 'none';
      simTime = 0;
      historyX = [];
      updateStats();
    };

    document.getElementById('shm-slider-k').oninput = function(e) {
      k = parseFloat(e.target.value);
      document.getElementById('shm-val-k').textContent = k;
      updateStats();
    };

    document.getElementById('shm-slider-l').oninput = function(e) {
      L = parseFloat(e.target.value);
      document.getElementById('shm-val-l').textContent = L;
      updateStats();
    };

    document.getElementById('shm-slider-m').oninput = function(e) {
      m = parseFloat(e.target.value);
      document.getElementById('shm-val-m').textContent = m;
      updateStats();
    };

    document.getElementById('shm-slider-a').oninput = function(e) {
      A0 = parseFloat(e.target.value);
      document.getElementById('shm-val-a').textContent = A0;
      updateStats();
    };

    document.getElementById('shm-slider-damp').oninput = function(e) {
      damping = parseFloat(e.target.value);
      document.getElementById('shm-val-damp').textContent = damping.toFixed(2);
    };

    document.getElementById('shm-btn-toggle').onclick = function() {
      isRunning = !isRunning;
    };

    document.getElementById('shm-btn-reset').onclick = function() {
      simTime = 0;
      historyX = [];
    };

    let lastTimestamp = performance.now();
    function animate(t) {
      const dt = Math.min((t - lastTimestamp) / 1000, 0.05);
      lastTimestamp = t;

      if (isRunning) {
        simTime += dt;
      }

      const { ctx, width, height } = setupCanvas(canvas);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      const omega0 = mode === 'spring' ? Math.sqrt(k / m) : Math.sqrt(9.81 / L);
      const amp = A0 * Math.exp(-damping * simTime);
      const x = amp * Math.cos(omega0 * simTime);
      const v = -amp * omega0 * Math.sin(omega0 * simTime);

      // Energy calculations
      const KE = 0.5 * m * v * v;
      const PE = mode === 'spring' ? 0.5 * k * x * x : 0.5 * m * (9.81 / L) * x * x;
      const TE = KE + PE;

      historyX.push(x);
      if (historyX.length > 280) historyX.shift();

      if (mode === 'spring') {
        // Draw Mass on horizontal spring
        const wallX = 50;
        const groundY = height * 0.42;
        const boxSize = 50;
        const restX = 200;
        const currentBoxX = restX + x * 90;

        // Ground and wall
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(wallX, groundY + boxSize / 2);
        ctx.lineTo(width - 200, groundY + boxSize / 2);
        ctx.moveTo(wallX, groundY - 60);
        ctx.lineTo(wallX, groundY + boxSize / 2);
        ctx.stroke();

        // Spring coils
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(wallX, groundY);
        const coils = 14;
        const springLen = currentBoxX - wallX;
        for (let i = 1; i <= coils; i++) {
          const cx = wallX + (springLen / (coils + 1)) * i;
          const cy = groundY + (i % 2 === 0 ? 15 : -15);
          ctx.lineTo(cx, cy);
        }
        ctx.lineTo(currentBoxX, groundY);
        ctx.stroke();

        // Mass block
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.fillRect(currentBoxX, groundY - boxSize / 2, boxSize, boxSize);
        ctx.strokeRect(currentBoxX, groundY - boxSize / 2, boxSize, boxSize);

        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.fillText(`${m} kg`, currentBoxX + 8, groundY + 4);

      } else {
        // Simple Pendulum
        const pivotX = 180;
        const pivotY = 50;
        const visualL = 120;
        const theta = (x / L) * 0.8;
        const bobX = pivotX + visualL * Math.sin(theta);
        const bobY = pivotY + visualL * Math.cos(theta);

        // Ceiling
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(pivotX - 40, pivotY);
        ctx.lineTo(pivotX + 40, pivotY);
        ctx.stroke();

        // String
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(pivotX, pivotY);
        ctx.lineTo(bobX, bobY);
        ctx.stroke();

        // Bob
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(bobX, bobY, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(`${m}kg`, bobX - 12, bobY + 4);
      }

      // Live Energy Bar Graph on right side
      const barX = width - 140;
      const barY = 50;
      const barMaxH = 120;
      const eScale = TE > 0 ? barMaxH / (TE * 1.2 || 1) : 0;

      ctx.fillStyle = 'rgba(30, 41, 59, 0.7)';
      ctx.fillRect(barX - 15, barY - 10, 130, barMaxH + 60);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('Energy (J)', barX + 15, barY + 6);

      // KE Bar
      const keH = KE * eScale;
      ctx.fillStyle = '#10b981';
      ctx.fillRect(barX, barY + barMaxH - keH + 15, 25, keH);
      ctx.fillText('KE', barX + 5, barY + barMaxH + 30);

      // PE Bar
      const peH = PE * eScale;
      ctx.fillStyle = '#6366f1';
      ctx.fillRect(barX + 40, barY + barMaxH - peH + 15, 25, peH);
      ctx.fillText('PE', barX + 45, barY + barMaxH + 30);

      // Total Bar
      const teH = TE * eScale;
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(barX + 80, barY + barMaxH - teH + 15, 12, teH);
      ctx.fillText('Total', barX + 75, barY + barMaxH + 30);

      // Waveform strip chart at bottom
      const chartY = height * 0.8;
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
      ctx.beginPath();
      ctx.moveTo(30, chartY);
      ctx.lineTo(width - 30, chartY);
      ctx.stroke();

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const chartOriginX = width - 30;
      historyX.forEach((hx, i) => {
        const px = chartOriginX - (historyX.length - i) * 2;
        const py = chartY - hx * 35;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();

      ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
      ctx.font = '10px Inter, sans-serif';
      ctx.fillText('Displacement x(t) real-time wave strip', 35, chartY - 45);

      activeAnimationId = requestAnimationFrame(animate);
    }

    activeAnimationId = requestAnimationFrame(animate);
  }

  // =========================================================================
  // 3. WAVE PROPAGATION SIMULATION
  // =========================================================================
  function initWavePropagation(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-sim-layout">
        <div class="pv-sim-canvas-wrap">
          <canvas id="wave-canvas" class="pv-sim-canvas"></canvas>
          <div class="pv-sim-overlay-stats">
            <div><span>Wave Speed (v):</span> <strong id="wave-stat-v">20.0 m/s</strong></div>
            <div><span>Frequency (f):</span> <strong id="wave-stat-f">2.0 Hz</strong></div>
            <div><span>Wavelength (λ):</span> <strong id="wave-stat-lam">10.0 m</strong></div>
          </div>
        </div>
        <div class="pv-sim-controls">
          <div class="pv-sim-control-group">
            <label>Wave Mode:</label>
            <select id="wave-select-mode" class="pv-select">
              <option value="traveling">Traveling Wave (Transverse)</option>
              <option value="standing">Standing Wave (Interference)</option>
            </select>
          </div>
          <div class="pv-sim-control-group">
            <label>Amplitude (A): <span id="wave-val-a">40</span> px</label>
            <input type="range" id="wave-slider-a" min="10" max="70" value="40" step="1">
          </div>
          <div class="pv-sim-control-group">
            <label>Frequency (f): <span id="wave-val-f">1.5</span> Hz</label>
            <input type="range" id="wave-slider-f" min="0.5" max="4.0" value="1.5" step="0.1">
          </div>
          <div class="pv-sim-control-group">
            <label>Wavelength (λ): <span id="wave-val-l">140</span> px</label>
            <input type="range" id="wave-slider-l" min="60" max="300" value="140" step="5">
          </div>
          <div class="pv-sim-control-group">
            <label class="pv-checkbox-label">
              <input type="checkbox" id="wave-check-particles" checked> Show Oscillating Medium Particles
            </label>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('wave-canvas');
    let mode = 'traveling';
    let A = 40;
    let f = 1.5;
    let lambda = 140;
    let showParticles = true;
    let time = 0;

    function updateStats() {
      const v = f * lambda;
      document.getElementById('wave-stat-v').textContent = (v / 10).toFixed(1) + ' m/s';
      document.getElementById('wave-stat-f').textContent = f.toFixed(1) + ' Hz';
      document.getElementById('wave-stat-lam').textContent = (lambda / 10).toFixed(1) + ' m';
    }
    updateStats();

    document.getElementById('wave-select-mode').onchange = (e) => { mode = e.target.value; };
    document.getElementById('wave-slider-a').oninput = (e) => {
      A = parseFloat(e.target.value);
      document.getElementById('wave-val-a').textContent = A;
    };
    document.getElementById('wave-slider-f').oninput = (e) => {
      f = parseFloat(e.target.value);
      document.getElementById('wave-val-f').textContent = f;
      updateStats();
    };
    document.getElementById('wave-slider-l').oninput = (e) => {
      lambda = parseFloat(e.target.value);
      document.getElementById('wave-val-l').textContent = lambda;
      updateStats();
    };
    document.getElementById('wave-check-particles').onchange = (e) => {
      showParticles = e.target.checked;
    };

    let lastT = performance.now();
    function animate(t) {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      time += dt;

      const { ctx, width, height } = setupCanvas(canvas);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      const midY = height / 2;
      const k = (2 * Math.PI) / lambda;
      const omega = 2 * Math.PI * f;

      // Axis
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(width, midY);
      ctx.stroke();

      // Continuous wave line
      ctx.strokeStyle = mode === 'traveling' ? '#38bdf8' : '#a855f7';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        let y = 0;
        if (mode === 'traveling') {
          // y(x,t) = A sin(kx - omega t)
          y = A * Math.sin(k * x - omega * time);
        } else {
          // Standing wave: 2A sin(kx) cos(omega t)
          y = 2 * A * Math.sin(k * x) * Math.cos(omega * time);
        }
        if (x === 0) ctx.moveTo(x, midY - y);
        else ctx.lineTo(x, midY - y);
      }
      ctx.stroke();

      // Show nodes and antinodes for standing wave
      if (mode === 'standing') {
        const halfLam = lambda / 2;
        for (let x = 0; x <= width; x += halfLam) {
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(x, midY, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = 'rgba(239, 68, 68, 0.8)';
          ctx.font = '10px Inter, sans-serif';
          ctx.fillText('Node', x - 12, midY + 18);
        }
      }

      // Discrete particles showing transverse harmonic oscillation
      if (showParticles) {
        const step = 20;
        for (let x = 10; x < width; x += step) {
          let y = mode === 'traveling'
            ? A * Math.sin(k * x - omega * time)
            : 2 * A * Math.sin(k * x) * Math.cos(omega * time);

          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(x, midY - y, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      activeAnimationId = requestAnimationFrame(animate);
    }
    activeAnimationId = requestAnimationFrame(animate);
  }

  // =========================================================================
  // 4. DOUBLE-SLIT INTERFERENCE SIMULATION
  // =========================================================================
  function initDoubleSlit(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-sim-layout">
        <div class="pv-sim-canvas-wrap">
          <canvas id="doubleslit-canvas" class="pv-sim-canvas"></canvas>
          <div class="pv-sim-overlay-stats">
            <div><span>Fringe Width (β):</span> <strong id="ds-stat-beta">1.25 mm</strong></div>
            <div><span>Wavelength Color:</span> <strong id="ds-stat-col">Green (532 nm)</strong></div>
          </div>
        </div>
        <div class="pv-sim-controls">
          <div class="pv-sim-control-group">
            <label>Light Wavelength (λ): <span id="ds-val-lam">532</span> nm</label>
            <input type="range" id="ds-slider-lam" min="380" max="750" value="532" step="2">
          </div>
          <div class="pv-sim-control-group">
            <label>Slit Separation (d): <span id="ds-val-d">0.25</span> mm</label>
            <input type="range" id="ds-slider-d" min="0.05" max="1.0" value="0.25" step="0.01">
          </div>
          <div class="pv-sim-control-group">
            <label>Distance to Screen (D): <span id="ds-val-dist">1.2</span> m</label>
            <input type="range" id="ds-slider-dist" min="0.5" max="3.0" value="1.2" step="0.1">
          </div>
          <div class="pv-sim-control-group">
            <label>Single Slit Width (a): <span id="ds-val-a">0.04</span> mm</label>
            <input type="range" id="ds-slider-a" min="0.01" max="0.1" value="0.04" step="0.005">
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('doubleslit-canvas');
    let lam = 532; // nm
    let d = 0.25;  // mm
    let D = 1.2;   // m
    let a = 0.04;  // mm

    function wavelengthToRGB(wavelength) {
      let r, g, b;
      if (wavelength >= 380 && wavelength < 440) {
        r = -(wavelength - 440) / (440 - 380);
        g = 0.0;
        b = 1.0;
      } else if (wavelength >= 440 && wavelength < 490) {
        r = 0.0;
        g = (wavelength - 440) / (490 - 440);
        b = 1.0;
      } else if (wavelength >= 490 && wavelength < 510) {
        r = 0.0;
        g = 1.0;
        b = -(wavelength - 510) / (510 - 490);
      } else if (wavelength >= 510 && wavelength < 580) {
        r = (wavelength - 510) / (580 - 510);
        g = 1.0;
        b = 0.0;
      } else if (wavelength >= 580 && wavelength < 645) {
        r = 1.0;
        g = -(wavelength - 645) / (645 - 580);
        b = 0.0;
      } else if (wavelength >= 645 && wavelength <= 750) {
        r = 1.0;
        g = 0.0;
        b = 0.0;
      } else {
        r = 1.0; g = 1.0; b = 1.0;
      }
      return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
      };
    }

    function update() {
      const beta = (lam * 1e-9 * D) / (d * 1e-3) * 1e3; // in mm
      document.getElementById('ds-stat-beta').textContent = beta.toFixed(2) + ' mm';
      const col = wavelengthToRGB(lam);
      document.getElementById('ds-stat-col').textContent = `${lam} nm`;
      document.getElementById('ds-stat-col').style.color = `rgb(${col.r},${col.g},${col.b})`;
      draw();
    }

    document.getElementById('ds-slider-lam').oninput = (e) => {
      lam = parseFloat(e.target.value);
      document.getElementById('ds-val-lam').textContent = lam;
      update();
    };
    document.getElementById('ds-slider-d').oninput = (e) => {
      d = parseFloat(e.target.value);
      document.getElementById('ds-val-d').textContent = d.toFixed(2);
      update();
    };
    document.getElementById('ds-slider-dist').oninput = (e) => {
      D = parseFloat(e.target.value);
      document.getElementById('ds-val-dist').textContent = D.toFixed(1);
      update();
    };
    document.getElementById('ds-slider-a').oninput = (e) => {
      a = parseFloat(e.target.value);
      document.getElementById('ds-val-a').textContent = a.toFixed(3);
      update();
    };

    function draw() {
      const { ctx, width, height } = setupCanvas(canvas);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      const col = wavelengthToRGB(lam);
      const slitScreenY = height * 0.48;

      // 1. Draw Physical Screen Fringe Pattern (top section)
      ctx.fillStyle = '#020617';
      ctx.fillRect(20, 20, width - 40, 70);

      const screenCenter = width / 2;
      const lam_m = lam * 1e-9;
      const d_m = d * 1e-3;
      const a_m = a * 1e-3;

      const physicalWidth_m = 0.015; // 15 mm visible across screen
      const pixelsPerMeter = (width - 40) / physicalWidth_m;

      for (let px = 20; px < width - 20; px++) {
        const y_pos = (px - screenCenter) / pixelsPerMeter; // meters
        const theta = Math.atan(y_pos / D);

        // Interference term: cos^2(pi * d * sin theta / lambda)
        const delta = (Math.PI * d_m * Math.sin(theta)) / lam_m;
        const interTerm = Math.pow(Math.cos(delta), 2);

        // Diffraction envelope term: sinc^2(pi * a * sin theta / lambda)
        const alpha = (Math.PI * a_m * Math.sin(theta)) / lam_m;
        const diffTerm = alpha === 0 ? 1 : Math.pow(Math.sin(alpha) / alpha, 2);

        const intensity = interTerm * diffTerm;

        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${Math.min(intensity, 1)})`;
        ctx.fillRect(px, 20, 1, 70);
      }

      ctx.strokeStyle = '#64748b';
      ctx.strokeRect(20, 20, width - 40, 70);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('Observation Screen Physical Fringes', 30, 40);

      // 2. Mathematical Intensity Graph I(y) (bottom section)
      const graphY = height - 30;
      const graphH = 130;

      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.beginPath();
      ctx.moveTo(20, graphY);
      ctx.lineTo(width - 20, graphY);
      ctx.moveTo(screenCenter, graphY - graphH - 10);
      ctx.lineTo(screenCenter, graphY);
      ctx.stroke();

      ctx.strokeStyle = `rgb(${col.r}, ${col.g}, ${col.b})`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      for (let px = 20; px < width - 20; px++) {
        const y_pos = (px - screenCenter) / pixelsPerMeter;
        const theta = Math.atan(y_pos / D);
        const delta = (Math.PI * d_m * Math.sin(theta)) / lam_m;
        const alpha = (Math.PI * a_m * Math.sin(theta)) / lam_m;
        const diffTerm = alpha === 0 ? 1 : Math.pow(Math.sin(alpha) / alpha, 2);
        const intensity = Math.pow(Math.cos(delta), 2) * diffTerm;

        const py = graphY - intensity * graphH;
        if (px === 20) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Envelope line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      for (let px = 20; px < width - 20; px++) {
        const y_pos = (px - screenCenter) / pixelsPerMeter;
        const theta = Math.atan(y_pos / D);
        const alpha = (Math.PI * a_m * Math.sin(theta)) / lam_m;
        const diffTerm = alpha === 0 ? 1 : Math.pow(Math.sin(alpha) / alpha, 2);
        const py = graphY - diffTerm * graphH;
        if (px === 20) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('Optical Intensity Distribution I(θ) = I₀ cos²(δ) · sinc²(α)', 30, graphY - graphH - 15);
    }

    update();
  }

  // =========================================================================
  // 5. ELECTRIC FIELD & EQUIPOTENTIALS
  // =========================================================================
  function initElectricField(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-sim-layout">
        <div class="pv-sim-canvas-wrap">
          <canvas id="efield-canvas" class="pv-sim-canvas"></canvas>
          <div class="pv-sim-overlay-stats">
            <div><span>Probe Field |E|:</span> <strong id="efield-stat-e">0.00 V/m</strong></div>
            <div><span>Potential V:</span> <strong id="efield-stat-v">0.00 V</strong></div>
            <div><span>Config:</span> <strong id="efield-stat-cfg">Electric Dipole</strong></div>
          </div>
        </div>
        <div class="pv-sim-controls">
          <div class="pv-sim-control-group">
            <label>Charge Configuration:</label>
            <select id="efield-select-preset" class="pv-select">
              <option value="dipole">Electric Dipole (+q, -q)</option>
              <option value="like">Repelling Like Charges (+q, +q)</option>
              <option value="single">Single Positive Point Charge (+q)</option>
              <option value="quadrupole">Quadrupole (+, -, +, -)</option>
            </select>
          </div>
          <div class="pv-sim-control-group">
            <label>Charge Magnitude (q): <span id="efield-val-q">1.0</span> nC</label>
            <input type="range" id="efield-slider-q" min="0.2" max="3.0" value="1.0" step="0.2">
          </div>
          <div class="pv-sim-control-group">
            <label class="pv-checkbox-label">
              <input type="checkbox" id="efield-check-equi" checked> Render Equipotential Field Lines
            </label>
          </div>
          <p class="pv-sim-hint">💡 Move your mouse across the canvas to inspect field strength and potential at any point.</p>
        </div>
      </div>
    `;

    const canvas = document.getElementById('efield-canvas');
    let preset = 'dipole';
    let qBase = 1.0;
    let showEqui = true;
    let mouseX = -100;
    let mouseY = -100;

    let charges = [];

    function setupCharges(w, h) {
      const cx = w / 2;
      const cy = h / 2;
      const sep = 90;

      if (preset === 'dipole') {
        charges = [
          { x: cx - sep, y: cy, q: qBase },
          { x: cx + sep, y: cy, q: -qBase }
        ];
        document.getElementById('efield-stat-cfg').textContent = 'Electric Dipole';
      } else if (preset === 'like') {
        charges = [
          { x: cx - sep, y: cy, q: qBase },
          { x: cx + sep, y: cy, q: qBase }
        ];
        document.getElementById('efield-stat-cfg').textContent = 'Two Positive Charges';
      } else if (preset === 'single') {
        charges = [
          { x: cx, y: cy, q: qBase }
        ];
        document.getElementById('efield-stat-cfg').textContent = 'Single Point Charge';
      } else if (preset === 'quadrupole') {
        charges = [
          { x: cx - sep, y: cy - sep, q: qBase },
          { x: cx + sep, y: cy - sep, q: -qBase },
          { x: cx + sep, y: cy + sep, q: qBase },
          { x: cx - sep, y: cy + sep, q: -qBase }
        ];
        document.getElementById('efield-stat-cfg').textContent = 'Quadrupole';
      }
    }

    document.getElementById('efield-select-preset').onchange = (e) => {
      preset = e.target.value;
      const rect = canvas.getBoundingClientRect();
      setupCharges(rect.width || 600, rect.height || 360);
      draw();
    };

    document.getElementById('efield-slider-q').oninput = (e) => {
      qBase = parseFloat(e.target.value);
      document.getElementById('efield-val-q').textContent = qBase.toFixed(1);
      const rect = canvas.getBoundingClientRect();
      setupCharges(rect.width || 600, rect.height || 360);
      draw();
    };

    document.getElementById('efield-check-equi').onchange = (e) => {
      showEqui = e.target.checked;
      draw();
    };

    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // Calculate field at mouse
      let Ex = 0, Ey = 0, V = 0;
      charges.forEach(c => {
        const dx = mouseX - c.x;
        const dy = mouseY - c.y;
        const r2 = dx * dx + dy * dy;
        const r = Math.sqrt(r2);
        if (r > 8) {
          const k_e = 8990; // scaled
          const E_mag = (k_e * c.q) / r2;
          Ex += E_mag * (dx / r);
          Ey += E_mag * (dy / r);
          V += (k_e * c.q) / r;
        }
      });

      const Emag = Math.sqrt(Ex * Ex + Ey * Ey);
      document.getElementById('efield-stat-e').textContent = Emag.toFixed(1) + ' V/m';
      document.getElementById('efield-stat-v').textContent = V.toFixed(1) + ' V';
      draw();
    };

    function draw() {
      const { ctx, width, height } = setupCanvas(canvas);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      if (charges.length === 0) setupCharges(width, height);

      // 1. Vector field grid
      const step = 28;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';

      for (let x = 16; x < width; x += step) {
        for (let y = 16; y < height; y += step) {
          let Ex = 0, Ey = 0;
          charges.forEach(c => {
            const dx = x - c.x;
            const dy = y - c.y;
            const r2 = dx * dx + dy * dy;
            const r = Math.sqrt(r2);
            if (r > 15) {
              const f = c.q / r2;
              Ex += f * (dx / r);
              Ey += f * (dy / r);
            }
          });

          const E = Math.sqrt(Ex * Ex + Ey * Ey);
          if (E > 0.0001) {
            const uX = Ex / E;
            const uY = Ey / E;
            const len = Math.min(Math.log10(1 + E * 8000) * 8, 16);

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + uX * len, y + uY * len);
            ctx.stroke();

            // Tiny arrow head
            ctx.beginPath();
            ctx.arc(x + uX * len, y + uY * len, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 2. Charges
      charges.forEach(c => {
        ctx.shadowBlur = 14;
        if (c.q > 0) {
          ctx.fillStyle = '#ef4444';
          ctx.shadowColor = '#ef4444';
        } else {
          ctx.fillStyle = '#3b82f6';
          ctx.shadowColor = '#3b82f6';
        }

        ctx.beginPath();
        ctx.arc(c.x, c.y, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(c.q > 0 ? '+' : '−', c.x, c.y);
      });

      // 3. Interactive Mouse Probe
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    const rect = canvas.getBoundingClientRect();
    setupCharges(rect.width || 600, rect.height || 360);
    draw();
  }

  // =========================================================================
  // 6. MAGNETIC FIELD SIMULATION
  // =========================================================================
  function initMagneticField(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-sim-layout">
        <div class="pv-sim-canvas-wrap">
          <canvas id="bfield-canvas" class="pv-sim-canvas"></canvas>
          <div class="pv-sim-overlay-stats">
            <div><span>Conductor:</span> <strong id="bfield-stat-type">Circular Loop</strong></div>
            <div><span>Current (I):</span> <strong id="bfield-stat-i">5.0 A</strong></div>
          </div>
        </div>
        <div class="pv-sim-controls">
          <div class="pv-sim-control-group">
            <label>Conductor Geometry:</label>
            <select id="bfield-select-geom" class="pv-select">
              <option value="loop">Circular Current Loop (Dipole Field)</option>
              <option value="wire">Long Straight Wire (Concentric Circles)</option>
              <option value="solenoid">Multi-Turn Solenoid (Uniform Core)</option>
            </select>
          </div>
          <div class="pv-sim-control-group">
            <label>Current Intensity (I): <span id="bfield-val-i">5.0</span> A</label>
            <input type="range" id="bfield-slider-i" min="1.0" max="15.0" value="5.0" step="0.5">
          </div>
          <div class="pv-sim-control-group">
            <label class="pv-checkbox-label">
              <input type="checkbox" id="bfield-check-reverse"> Reverse Current Direction
            </label>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('bfield-canvas');
    let geom = 'loop';
    let currentI = 5.0;
    let reversed = false;

    document.getElementById('bfield-select-geom').onchange = (e) => {
      geom = e.target.value;
      document.getElementById('bfield-stat-type').textContent =
        geom === 'loop' ? 'Circular Loop' : geom === 'wire' ? 'Straight Wire' : 'Solenoid';
      draw();
    };
    document.getElementById('bfield-slider-i').oninput = (e) => {
      currentI = parseFloat(e.target.value);
      document.getElementById('bfield-val-i').textContent = currentI.toFixed(1);
      document.getElementById('bfield-stat-i').textContent = currentI.toFixed(1) + ' A';
      draw();
    };
    document.getElementById('bfield-check-reverse').onchange = (e) => {
      reversed = e.target.checked;
      draw();
    };

    function draw() {
      const { ctx, width, height } = setupCanvas(canvas);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const dirSign = reversed ? -1 : 1;

      if (geom === 'wire') {
        // Concentric circular field lines around perpendicular wire
        const radii = [30, 55, 85, 120, 160, 210];
        radii.forEach(r => {
          ctx.strokeStyle = `rgba(56, 189, 248, ${Math.max(0.15, 1 - r / 240)})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();

          // Field line direction arrows
          const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
          angles.forEach(ang => {
            const ax = cx + r * Math.cos(ang);
            const ay = cy + r * Math.sin(ang);
            const tangentAng = ang + (dirSign > 0 ? Math.PI / 2 : -Math.PI / 2);

            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(ax, ay, 2.5, 0, Math.PI * 2);
            ctx.fill();
          });
        });

        // Wire in center (cross-section)
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(dirSign > 0 ? '⊙' : '⊗', cx, cy);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px Inter, sans-serif';
        ctx.fillText(dirSign > 0 ? 'Current Out of Screen (⊙)' : 'Current Into Screen (⊗)', cx, cy + 30);

      } else if (geom === 'loop') {
        // Dipole field of loop
        const loopR = 50;
        // Two wire cross sections
        const yTop = cy - loopR;
        const yBottom = cy + loopR;

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(cx, yTop, 10, 0, Math.PI * 2);
        ctx.arc(cx, yBottom, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 13px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(dirSign > 0 ? '⊙' : '⊗', cx, yTop);
        ctx.fillText(dirSign > 0 ? '⊗' : '⊙', cx, yBottom);

        // Biot-Savart vector grid
        const step = 28;
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.45)';
        for (let x = 30; x < width - 30; x += step) {
          for (let y = 25; y < height - 25; y += step) {
            // Field from top wire
            const dxt = x - cx, dyt = y - yTop;
            const r2t = dxt * dxt + dyt * dyt;
            // Field from bottom wire
            const dxb = x - cx, dyb = y - yBottom;
            const r2b = dxb * dxb + dyb * dyb;

            if (r2t > 150 && r2b > 150) {
              const Btx = -dirSign * (dyt / r2t);
              const Bty = dirSign * (dxt / r2t);
              const Bbx = dirSign * (dyb / r2b);
              const Bby = -dirSign * (dxb / r2b);

              const Bx = Btx + Bbx;
              const By = Bty + Bby;
              const B = Math.sqrt(Bx * Bx + By * By);

              const len = Math.min(B * 300, 16);
              if (len > 2) {
                const uX = Bx / B;
                const uY = By / B;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + uX * len, y + uY * len);
                ctx.stroke();
              }
            }
          }
        }

      } else {
        // Solenoid
        const solL = 180;
        const solH = 60;
        const xStart = cx - solL / 2;

        // Inside uniform B field lines
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        for (let y = cy - solH / 2 + 10; y <= cy + solH / 2 - 10; y += 12) {
          ctx.beginPath();
          ctx.moveTo(20, y);
          ctx.lineTo(width - 20, y);
          ctx.stroke();

          // Arrowhead
          const arrowX = dirSign > 0 ? cx + 20 : cx - 20;
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.moveTo(arrowX, y - 4);
          ctx.lineTo(arrowX + (dirSign > 0 ? 8 : -8), y);
          ctx.lineTo(arrowX, y + 4);
          ctx.fill();
        }

        // Coil windings top and bottom
        for (let x = xStart; x <= xStart + solL; x += 18) {
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(x, cy - solH / 2, 6, 0, Math.PI * 2);
          ctx.arc(x, cy + solH / 2, 6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Uniform Core Field: B = μ₀ n I', cx, cy + solH / 2 + 30);
      }
    }

    draw();
  }

  // =========================================================================
  // 7. PARTICLE IN A 1D INFINITE WELL
  // =========================================================================
  function initParticleInBox(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-sim-layout">
        <div class="pv-sim-canvas-wrap">
          <canvas id="pbox-canvas" class="pv-sim-canvas"></canvas>
          <div class="pv-sim-overlay-stats">
            <div><span>State (n):</span> <strong id="pbox-stat-n">1</strong></div>
            <div><span>Energy (E_n):</span> <strong id="pbox-stat-e">0.376 eV</strong></div>
            <div><span>Nodes:</span> <strong id="pbox-stat-nodes">0</strong></div>
            <div><span>Normalization:</span> <strong>∫|ψ|²dx = 1.00</strong></div>
          </div>
        </div>
        <div class="pv-sim-controls">
          <div class="pv-sim-control-group">
            <label>Quantum Energy Level (n):</label>
            <div class="pv-btn-group">
              <button class="pv-btn pv-btn-sub pbox-n-btn active" data-n="1">n = 1</button>
              <button class="pv-btn pv-btn-sub pbox-n-btn" data-n="2">n = 2</button>
              <button class="pv-btn pv-btn-sub pbox-n-btn" data-n="3">n = 3</button>
              <button class="pv-btn pv-btn-sub pbox-n-btn" data-n="4">n = 4</button>
            </div>
          </div>
          <div class="pv-sim-control-group">
            <label>Well Width (L): <span id="pbox-val-l">1.0</span> nm</label>
            <input type="range" id="pbox-slider-l" min="0.5" max="2.5" value="1.0" step="0.1">
          </div>
          <div class="pv-sim-control-group">
            <label>Display Component:</label>
            <select id="pbox-select-comp" class="pv-select">
              <option value="both">Both Wavefunction ψ(x) & Probability |ψ(x)|²</option>
              <option value="psi">Wavefunction ψ(x) (Real & Imaginary)</option>
              <option value="prob">Probability Density |ψ(x)|² only</option>
            </select>
          </div>
          <div class="pv-sim-control-group">
            <label>Time Evolution Speed: <span id="pbox-val-spd">1.0</span>x</label>
            <input type="range" id="pbox-slider-spd" min="0.2" max="3.0" value="1.0" step="0.2">
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('pbox-canvas');
    let n = 1;
    let L = 1.0; // nm
    let comp = 'both';
    let speed = 1.0;
    let qTime = 0;

    function updateStats() {
      // E_n = (n^2 h^2) / (8 m L^2) for electron
      // E_1 ≈ 0.376 eV / (L in nm)^2
      const E = (0.376 * n * n) / (L * L);
      document.getElementById('pbox-stat-n').textContent = n;
      document.getElementById('pbox-stat-e').textContent = E.toFixed(3) + ' eV';
      document.getElementById('pbox-stat-nodes').textContent = (n - 1).toString();
    }
    updateStats();

    container.querySelectorAll('.pbox-n-btn').forEach(btn => {
      btn.onclick = (e) => {
        container.querySelectorAll('.pbox-n-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        n = parseInt(btn.getAttribute('data-n'));
        updateStats();
      };
    });

    document.getElementById('pbox-slider-l').oninput = (e) => {
      L = parseFloat(e.target.value);
      document.getElementById('pbox-val-l').textContent = L.toFixed(1);
      updateStats();
    };

    document.getElementById('pbox-select-comp').onchange = (e) => {
      comp = e.target.value;
    };

    document.getElementById('pbox-slider-spd').oninput = (e) => {
      speed = parseFloat(e.target.value);
      document.getElementById('pbox-val-spd').textContent = speed.toFixed(1);
    };

    let lastTime = performance.now();
    function animate(t) {
      const dt = Math.min((t - lastTime) / 1000, 0.05);
      lastTime = t;
      qTime += dt * speed * 2.5;

      const { ctx, width, height } = setupCanvas(canvas);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      const wellLeft = 90;
      const wellRight = width - 90;
      const wellW = wellRight - wellLeft;
      const midY = height * 0.55;

      // Draw infinite potential barriers (x < 0 and x > L)
      ctx.fillStyle = 'rgba(239, 68, 68, 0.12)';
      ctx.fillRect(0, 0, wellLeft, height);
      ctx.fillRect(wellRight, 0, width - wellRight, height);

      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(wellLeft, 0);
      ctx.lineTo(wellLeft, height);
      ctx.moveTo(wellRight, 0);
      ctx.lineTo(wellRight, height);
      ctx.stroke();

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillText('V(x) = ∞', 25, 40);
      ctx.fillText('V(x) = ∞', width - 75, 40);
      ctx.fillStyle = '#10b981';
      ctx.fillText('V(x) = 0', width / 2 - 20, 30);

      // Boundary marker labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('x = 0', wellLeft - 15, height - 15);
      ctx.fillText(`x = L (${L} nm)`, wellRight - 35, height - 15);

      // Baseline
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(wellLeft, midY);
      ctx.lineTo(wellRight, midY);
      ctx.stroke();

      // Real-time wavefunction: psi_n(x, t) = sqrt(2/L) * sin(n*pi*x/L) * exp(-i * E_n * t / hbar)
      const phase = n * n * qTime;
      const cosPhase = Math.cos(phase);
      const sinPhase = Math.sin(phase);

      const ampScale = 85;

      // 1. Draw Probability Density |psi(x)|^2
      if (comp === 'both' || comp === 'prob') {
        ctx.fillStyle = 'rgba(245, 158, 11, 0.18)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(wellLeft, midY);

        for (let px = wellLeft; px <= wellRight; px++) {
          const frac = (px - wellLeft) / wellW;
          const spatial = Math.sin(n * Math.PI * frac);
          const prob = spatial * spatial; // |psi|^2 is independent of time for stationary state
          const py = midY - prob * (ampScale * 1.3);
          ctx.lineTo(px, py);
        }
        ctx.lineTo(wellRight, midY);
        ctx.fill();
        ctx.stroke();
      }

      // 2. Draw Real Part Re[psi(x,t)]
      if (comp === 'both' || comp === 'psi') {
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let px = wellLeft; px <= wellRight; px++) {
          const frac = (px - wellLeft) / wellW;
          const spatial = Math.sin(n * Math.PI * frac);
          const rePsi = spatial * cosPhase;
          const py = midY - rePsi * ampScale;
          if (px === wellLeft) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Imaginary Part Im[psi(x,t)]
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.7)';
        ctx.setLineDash([4, 3]);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let px = wellLeft; px <= wellRight; px++) {
          const frac = (px - wellLeft) / wellW;
          const spatial = Math.sin(n * Math.PI * frac);
          const imPsi = -spatial * sinPhase;
          const py = midY - imPsi * ampScale;
          if (px === wellLeft) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Legend
      ctx.font = '11px Inter, sans-serif';
      if (comp === 'both' || comp === 'psi') {
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('— Re[ψ(x, t)]', wellLeft + 15, height - 35);
        ctx.fillStyle = '#a855f7';
        ctx.fillText('- - Im[ψ(x, t)]', wellLeft + 120, height - 35);
      }
      if (comp === 'both' || comp === 'prob') {
        ctx.fillStyle = '#f59e0b';
        ctx.fillText('■ |ψ(x)|² Probability Density', wellRight - 170, height - 35);
      }

      activeAnimationId = requestAnimationFrame(animate);
    }

    activeAnimationId = requestAnimationFrame(animate);
  }

  // =========================================================================
  // 8. DEDICATED SCHRÖDINGER WAVEFUNCTION 3D STUDIO
  // =========================================================================
  function initSchrodingerStudio(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-schrodinger-page">
        <div class="pv-schrodinger-hero">
          <div class="pv-schrodinger-badge">QUANTUM MECHANICS MASTER VISUALIZATION</div>
          <h2>Schrödinger Equation & Wavefunction Studio</h2>
          <p>Explore the fundamental equations of quantum physics, wavefunctions, stationary states, and probability densities with interactive 3D phase projection.</p>
        </div>

        <div class="pv-equations-display-card">
          <div class="pv-eq-col">
            <span class="pv-eq-tag">Time-Dependent Schrödinger Equation (TDSE)</span>
            <div class="pv-large-math">
              iħ <span class="pv-frac"><span class="pv-num">∂ψ</span><span class="pv-den">∂t</span></span> = 
              <span class="pv-bracket">[</span>-<span class="pv-frac"><span class="pv-num">ħ²</span><span class="pv-den">2m</span></span>∇² + V<span class="pv-bracket">]</span>ψ
            </div>
            <p class="pv-eq-sub">Unitary, deterministic time evolution of quantum state vector</p>
          </div>
          <div class="pv-eq-col">
            <span class="pv-eq-tag">Time-Independent Schrödinger Equation (TISE)</span>
            <div class="pv-large-math">
              -<span class="pv-frac"><span class="pv-num">ħ²</span><span class="pv-den">2m</span></span>∇²ψ + Vψ = Eψ
            </div>
            <p class="pv-eq-sub">Spatial stationary energy eigenvalue problem (Ĥψ = Eψ)</p>
          </div>
        </div>

        <div class="pv-sim-layout pv-schrodinger-layout">
          <div class="pv-sim-canvas-wrap">
            <canvas id="schrodinger-canvas" class="pv-sim-canvas" style="min-height: 420px;"></canvas>
            <div class="pv-sim-overlay-stats">
              <div><span>Eigenstate:</span> <strong id="sch-stat-n">n = 1 (Ground State)</strong></div>
              <div><span>Energy E_n:</span> <strong id="sch-stat-e">1 × E₁ = 0.376 eV</strong></div>
              <div><span>Normalization:</span> <strong style="color:#10b981;">∫ |ψ|² dx = 1.000</strong></div>
            </div>
          </div>
          <div class="pv-sim-controls">
            <div class="pv-sim-control-group">
              <label>Switch Quantum State (n):</label>
              <div class="pv-btn-group">
                <button class="pv-btn pv-btn-sub sch-n-btn active" data-n="1">n = 1</button>
                <button class="pv-btn pv-btn-sub sch-n-btn" data-n="2">n = 2</button>
                <button class="pv-btn pv-btn-sub sch-n-btn" data-n="3">n = 3</button>
              </div>
            </div>
            <div class="pv-sim-control-group">
              <label>3D View Angle / Perspective:</label>
              <input type="range" id="sch-slider-rot" min="0" max="360" value="45" step="2">
            </div>
            <div class="pv-sim-control-group">
              <label>Active Display Layers:</label>
              <div class="pv-checkbox-stack">
                <label><input type="checkbox" id="sch-check-psi" checked> Wavefunction ψ(x) Complex Ribbon</label>
                <label><input type="checkbox" id="sch-check-prob" checked> Probability Density |ψ(x)|² Projection</label>
                <label><input type="checkbox" id="sch-check-energy" checked> Energy Levels Ladder E_n</label>
                <label><input type="checkbox" id="sch-check-well" checked> Infinite Potential Well Boundaries</label>
              </div>
            </div>
            <div class="pv-normalization-box">
              <div class="pv-norm-title">Normalization Condition:</div>
              <div class="pv-norm-eq">∫ |ψ|² dx = 1</div>
              <p>The probability of finding the particle within the interval [0, L] is exactly 100%.</p>
            </div>
          </div>
        </div>

        <div class="pv-symbols-breakdown-card">
          <h3>Symbol-by-Symbol Scientific Breakdown</h3>
          <div class="pv-symbols-grid">
            <div class="pv-symbol-item">
              <span class="pv-sym-badge">i</span>
              <strong>Imaginary Unit</strong>
              <p>The square root of -1 (√-1). Essential for quantum mechanics, generating unitary phase rotation e^{-iEt/ħ} without loss of probability.</p>
            </div>
            <div class="pv-symbol-item">
              <span class="pv-sym-badge">ħ</span>
              <strong>Reduced Planck Constant</strong>
              <p>ħ = h / 2π ≈ 1.05457 × 10⁻³⁴ J·s. The fundamental quantum of action setting the quantum scale of the universe.</p>
            </div>
            <div class="pv-symbol-item">
              <span class="pv-sym-badge">ψ</span>
              <strong>Wavefunction (Psi)</strong>
              <p>The complex state amplitude describing the quantum system. Its modulus squared |ψ|² is Born's spatial probability density.</p>
            </div>
            <div class="pv-symbol-item">
              <span class="pv-sym-badge">∂/∂t</span>
              <strong>Time Derivative</strong>
              <p>Generates the dynamical time evolution of the state vector, governed by the total Hamiltonian energy operator.</p>
            </div>
            <div class="pv-symbol-item">
              <span class="pv-sym-badge">m</span>
              <strong>Particle Mass</strong>
              <p>Inertial mass of the particle (e.g. electron mass 9.109 × 10⁻³¹ kg) resisting acceleration.</p>
            </div>
            <div class="pv-symbol-item">
              <span class="pv-sym-badge">∇²</span>
              <strong>Laplacian Operator</strong>
              <p>∇² = ∂²/∂x² + ∂²/∂y² + ∂²/∂z². Multiplied by -ħ²/(2m), it represents the quantum kinetic energy operator T̂.</p>
            </div>
            <div class="pv-symbol-item">
              <span class="pv-sym-badge">V</span>
              <strong>Potential Energy</strong>
              <p>Spatial potential energy landscape (e.g., electrostatic Coulomb well, gravitational well, or infinite box).</p>
            </div>
            <div class="pv-symbol-item">
              <span class="pv-sym-badge">E</span>
              <strong>Energy Eigenvalue</strong>
              <p>The measurable total energy of the stationary state. In bound systems, boundary conditions force E to be discrete and quantized.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('schrodinger-canvas');
    let n = 1;
    let viewAngle = 45;
    let showPsi = true;
    let showProb = true;
    let showEnergy = true;
    let showWell = true;
    let simTime = 0;

    function updateStats() {
      const eBase = 0.376;
      const En = eBase * n * n;
      document.getElementById('sch-stat-n').textContent = `n = ${n} (${n === 1 ? 'Ground State' : `${n-1}th Excited State`})`;
      document.getElementById('sch-stat-e').textContent = `${n}² × E₁ = ${En.toFixed(3)} eV`;
    }
    updateStats();

    container.querySelectorAll('.sch-n-btn').forEach(btn => {
      btn.onclick = () => {
        container.querySelectorAll('.sch-n-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        n = parseInt(btn.getAttribute('data-n'));
        updateStats();
      };
    });

    document.getElementById('sch-slider-rot').oninput = (e) => {
      viewAngle = parseFloat(e.target.value);
    };

    document.getElementById('sch-check-psi').onchange = (e) => { showPsi = e.target.checked; };
    document.getElementById('sch-check-prob').onchange = (e) => { showProb = e.target.checked; };
    document.getElementById('sch-check-energy').onchange = (e) => { showEnergy = e.target.checked; };
    document.getElementById('sch-check-well').onchange = (e) => { showWell = e.target.checked; };

    let lastT = performance.now();
    function animate(t) {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      simTime += dt * 1.8;

      const { ctx, width, height } = setupCanvas(canvas);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      // 3D Isometric Projection setup
      const originX = width * 0.15;
      const originY = height * 0.72;
      const wellLength = width * 0.58;

      const rotRad = (viewAngle * Math.PI) / 180;
      const isoX = Math.cos(rotRad) * 45;
      const isoY = -Math.sin(rotRad) * 35;

      // 1. Draw Infinite Potential Well (3D Box Boundaries)
      if (showWell) {
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
        ctx.lineWidth = 2;

        // Front face boundaries
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(originX, originY - 200);
        ctx.moveTo(originX + wellLength, originY);
        ctx.lineTo(originX + wellLength, originY - 200);
        ctx.stroke();

        // Back 3D face boundaries
        ctx.beginPath();
        ctx.moveTo(originX + isoX, originY + isoY);
        ctx.lineTo(originX + isoX, originY + isoY - 200);
        ctx.moveTo(originX + wellLength + isoX, originY + isoY);
        ctx.lineTo(originX + wellLength + isoX, originY + isoY - 200);
        ctx.stroke();

        // Floor of the well (V = 0 plane)
        ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(originX + wellLength, originY);
        ctx.lineTo(originX + wellLength + isoX, originY + isoY);
        ctx.lineTo(originX + isoX, originY + isoY);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.stroke();
      }

      // 2. Draw Energy Levels Ladder (on the side)
      if (showEnergy) {
        const ladderX = originX + wellLength + 45;
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ladderX, originY);
        ctx.lineTo(ladderX, originY - 210);
        ctx.stroke();

        for (let lvl = 1; lvl <= 3; lvl++) {
          const lvlH = lvl * lvl * 20;
          const ly = originY - lvlH;

          ctx.strokeStyle = lvl === n ? '#f59e0b' : 'rgba(148, 163, 184, 0.5)';
          ctx.lineWidth = lvl === n ? 3 : 1.5;
          ctx.beginPath();
          ctx.moveTo(ladderX - 10, ly);
          ctx.lineTo(ladderX + 45, ly);
          ctx.stroke();

          ctx.fillStyle = lvl === n ? '#f59e0b' : '#94a3b8';
          ctx.font = lvl === n ? 'bold 11px Inter' : '10px Inter';
          ctx.fillText(`E_${lvl} = ${lvl*lvl}E₁`, ladderX + 50, ly + 4);
        }
      }

      // 3. Draw 3D Wavefunction ψ(x, t) as a rotating complex helix/ribbon
      const steps = 140;
      const amp = 70;
      const phase = n * n * simTime;

      if (showPsi) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#38bdf8';
        ctx.beginPath();

        for (let i = 0; i <= steps; i++) {
          const frac = i / steps;
          const x = originX + frac * wellLength;
          const spatial = Math.sin(n * Math.PI * frac);

          // Real and Imaginary components
          const re = spatial * Math.cos(phase);
          const im = spatial * Math.sin(phase);

          // Project in 3D: Re along vertical (y), Im along depth (iso)
          const px = x + im * isoX * 0.7;
          const py = originY - re * amp + im * isoY * 0.7;

          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // 4. Draw Probability Density |ψ(x)|² on the well floor
      if (showProb) {
        ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();

        ctx.moveTo(originX, originY);
        for (let i = 0; i <= steps; i++) {
          const frac = i / steps;
          const x = originX + frac * wellLength;
          const spatial = Math.sin(n * Math.PI * frac);
          const prob = spatial * spatial;

          const px = x;
          const py = originY - prob * (amp * 1.1);
          ctx.lineTo(px, py);
        }
        ctx.lineTo(originX + wellLength, originY);
        ctx.fill();
        ctx.stroke();
      }

      // Labels on 3D Box
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('x = 0', originX - 10, originY + 20);
      ctx.fillText('x = L', originX + wellLength - 10, originY + 20);

      activeAnimationId = requestAnimationFrame(animate);
    }

    activeAnimationId = requestAnimationFrame(animate);
  }

  // =========================================================================
  // 9. QUANTUM TUNNELLING SIMULATION
  // =========================================================================
  function initQuantumTunnelling(containerId) {
    stopCurrent();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="pv-sim-layout">
        <div class="pv-sim-canvas-wrap">
          <canvas id="tunnel-canvas" class="pv-sim-canvas"></canvas>
          <div class="pv-sim-overlay-stats">
            <div><span>Transmission Coeff (T):</span> <strong id="tun-stat-t">8.42 %</strong></div>
            <div><span>Reflection Coeff (R):</span> <strong id="tun-stat-r">91.58 %</strong></div>
            <div><span>Decay Constant (κ):</span> <strong id="tun-stat-k">1.45 nm⁻¹</strong></div>
          </div>
        </div>
        <div class="pv-sim-controls">
          <div class="pv-sim-control-group">
            <label>Incident Energy (E): <span id="tun-val-e">5.0</span> eV</label>
            <input type="range" id="tun-slider-e" min="1.0" max="9.0" value="5.0" step="0.2">
          </div>
          <div class="pv-sim-control-group">
            <label>Barrier Height (V₀): <span id="tun-val-v0">8.0</span> eV</label>
            <input type="range" id="tun-slider-v0" min="6.0" max="15.0" value="8.0" step="0.5">
          </div>
          <div class="pv-sim-control-group">
            <label>Barrier Width (a): <span id="tun-val-a">0.8</span> nm</label>
            <input type="range" id="tun-slider-a" min="0.2" max="2.0" value="0.8" step="0.1">
          </div>
          <div class="pv-sim-control-group">
            <label class="pv-checkbox-label">
              <input type="checkbox" id="tun-check-packet" checked> Animated Incident Wavepacket
            </label>
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById('tunnel-canvas');
    let E = 5.0;   // eV
    let V0 = 8.0;  // eV
    let a = 0.8;   // nm
    let showPacket = true;
    let packetX = -100;

    function updateStats() {
      // kappa = sqrt(2m(V0 - E))/hbar
      // For electron in eV and nm:
      // kappa ≈ 5.12 * sqrt(V0 - E) in 1/nm
      const diff = Math.max(0.01, V0 - E);
      const kappa = 5.12 * Math.sqrt(diff);
      // Transmission coefficient T approx 16 (E/V0)(1 - E/V0) exp(-2 kappa a)
      const ratio = E / V0;
      const prefactor = 16 * ratio * (1 - ratio);
      const exponent = -2 * kappa * a;
      let T = prefactor * Math.exp(exponent);
      T = Math.max(0.0001, Math.min(0.999, T));
      const R = 1 - T;

      document.getElementById('tun-stat-t').textContent = (T * 100).toFixed(2) + ' %';
      document.getElementById('tun-stat-r').textContent = (R * 100).toFixed(2) + ' %';
      document.getElementById('tun-stat-k').textContent = kappa.toFixed(2) + ' nm⁻¹';
      return { kappa, T, R };
    }
    updateStats();

    document.getElementById('tun-slider-e').oninput = (e) => {
      E = parseFloat(e.target.value);
      document.getElementById('tun-val-e').textContent = E.toFixed(1);
      updateStats();
    };
    document.getElementById('tun-slider-v0').oninput = (e) => {
      V0 = parseFloat(e.target.value);
      document.getElementById('tun-val-v0').textContent = V0.toFixed(1);
      updateStats();
    };
    document.getElementById('tun-slider-a').oninput = (e) => {
      a = parseFloat(e.target.value);
      document.getElementById('tun-val-a').textContent = a.toFixed(1);
      updateStats();
    };
    document.getElementById('tun-check-packet').onchange = (e) => {
      showPacket = e.target.checked;
    };

    let lastT = performance.now();
    function animate(t) {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;

      const { ctx, width, height } = setupCanvas(canvas);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas') || '#0b1120';
      ctx.fillRect(0, 0, width, height);

      const stats = updateStats();

      const barrierW = a * 110;
      const bLeft = width / 2 - barrierW / 2;
      const bRight = width / 2 + barrierW / 2;

      const baselineY = height * 0.75;
      const barrierH = (V0 / 15) * (height * 0.55);
      const energyY = baselineY - (E / 15) * (height * 0.55);

      // Draw potential barrier rectangle
      ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
      ctx.fillRect(bLeft, baselineY - barrierH, barrierW, barrierH);

      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.strokeRect(bLeft, baselineY - barrierH, barrierW, barrierH);

      ctx.fillStyle = '#ef4444';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText(`Barrier V₀ = ${V0} eV`, bLeft + 10, baselineY - barrierH - 12);
      ctx.fillText(`Width a = ${a} nm`, bLeft + 10, baselineY + 20);

      // Draw Energy line E
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(30, energyY);
      ctx.lineTo(width - 30, energyY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#10b981';
      ctx.fillText(`Incident Energy E = ${E} eV`, 35, energyY - 8);

      // Draw Wavefunction across 3 regions
      // Region I (x < bLeft): Incident + Reflected
      // Region II (bLeft < x < bRight): Evanescent exponential decay
      // Region III (x > bRight): Transmitted plane wave
      ctx.lineWidth = 2.5;

      // Region I
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath();
      const k1 = 0.12 * Math.sqrt(E);
      const timePhase = t * 0.005;

      for (let x = 30; x <= bLeft; x++) {
        const dx = x - bLeft;
        // Superposition of incident wave and reflected wave
        const y = energyY - (Math.cos(k1 * dx - timePhase) + Math.sqrt(stats.R) * Math.cos(-k1 * dx - timePhase)) * 25;
        if (x === 30) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Region II: Evanescent wave inside barrier
      ctx.strokeStyle = '#f59e0b';
      ctx.beginPath();
      const leftY = energyY - (1 + Math.sqrt(stats.R)) * 25 * Math.cos(timePhase);
      ctx.moveTo(bLeft, leftY);

      const ampTrans = Math.sqrt(stats.T) * 25;
      for (let x = bLeft; x <= bRight; x++) {
        const frac = (x - bLeft) / barrierW;
        // Exponential decay
        const decay = Math.exp(-stats.kappa * (x - bLeft) * 0.02);
        const y = energyY - (25 * decay * Math.cos(timePhase));
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Region III: Transmitted wave
      ctx.strokeStyle = '#10b981';
      ctx.beginPath();
      for (let x = bRight; x <= width - 30; x++) {
        const dx = x - bRight;
        const y = energyY - ampTrans * Math.cos(k1 * dx - timePhase);
        if (x === bRight) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Labels for regions
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('Region I: Incident & Reflected Waves', 40, height - 15);
      ctx.fillText('Region II: Evanescent Decay', bLeft - 15, height - 15);
      ctx.fillText('Region III: Transmitted Wave', bRight + 15, height - 15);

      activeAnimationId = requestAnimationFrame(animate);
    }

    activeAnimationId = requestAnimationFrame(animate);
  }

  return {
    initProjectile,
    initSHM,
    initWavePropagation,
    initDoubleSlit,
    initElectricField,
    initMagneticField,
    initParticleInBox,
    initSchrodingerStudio,
    initQuantumTunnelling,
    stopCurrent
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PhysicsSimulations;
}
