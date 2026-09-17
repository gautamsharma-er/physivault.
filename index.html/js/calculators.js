/**
 * PhysiVault Interactive Physics Calculators Suite
 * Real-time scientific computation, unit handling, formula steps, and validation.
 */

const PhysicsCalculators = (function () {
  const CALCULATORS = [
    {
      id: 'calc-force',
      name: 'Newton’s Second Law: Force Calculator',
      formula: 'F = m · a',
      category: 'Mechanics',
      description: 'Calculates the net force, mass, or acceleration of an object under uniform linear acceleration.',
      inputs: [
        { id: 'mass', label: 'Mass (m)', default: 15, unit: 'kg', step: 0.1, min: 0.001 },
        { id: 'accel', label: 'Acceleration (a)', default: 4.5, unit: 'm/s²', step: 0.1 }
      ],
      calculate: function(vals) {
        const m = parseFloat(vals.mass);
        const a = parseFloat(vals.accel);
        if (isNaN(m) || isNaN(a)) return { error: 'Please enter valid numerical values.' };
        const F = m * a;
        return {
          resultPrimary: `${F.toFixed(3)} N`,
          resultUnits: 'Newtons (kg·m/s²)',
          steps: [
            `Formula: F = m × a`,
            `Substitution: F = (${m} kg) × (${a} m/s²)`,
            `Result: F = ${F.toFixed(4)} N (or ${(F / 1000).toFixed(4)} kN)`
          ]
        };
      }
    },
    {
      id: 'calc-work',
      name: 'Mechanical Work Calculator',
      formula: 'W = F · d · cos(θ)',
      category: 'Mechanics',
      description: 'Computes work done by a constant force along a displacement at an angle θ.',
      inputs: [
        { id: 'force', label: 'Force Magnitude (F)', default: 50, unit: 'N', step: 1, min: 0 },
        { id: 'disp', label: 'Displacement (d)', default: 12, unit: 'm', step: 0.5, min: 0 },
        { id: 'theta', label: 'Angle with Displacement (θ)', default: 30, unit: 'degrees', step: 1, min: 0, max: 180 }
      ],
      calculate: function(vals) {
        const F = parseFloat(vals.force);
        const d = parseFloat(vals.disp);
        const theta = parseFloat(vals.theta);
        if (isNaN(F) || isNaN(d) || isNaN(theta)) return { error: 'Please enter valid numbers.' };
        const rad = (theta * Math.PI) / 180;
        const cosTheta = Math.cos(rad);
        const W = F * d * cosTheta;
        return {
          resultPrimary: `${W.toFixed(2)} J`,
          resultUnits: 'Joules (N·m)',
          steps: [
            `Formula: W = F × d × cos(θ)`,
            `cos(${theta}°) = ${cosTheta.toFixed(4)}`,
            `W = (${F} N) × (${d} m) × (${cosTheta.toFixed(4)})`,
            `Result: W = ${W.toFixed(2)} Joules (or ${(W / 1000).toFixed(3)} kJ)`
          ]
        };
      }
    },
    {
      id: 'calc-ke',
      name: 'Kinetic Energy Calculator (Classical & Relativistic)',
      formula: 'KE = ½ · m · v²  |  E_k = (γ - 1)mc²',
      category: 'Mechanics',
      description: 'Computes kinetic energy and provides both classical and relativistic values, indicating when relativistic corrections are required.',
      inputs: [
        { id: 'mass', label: 'Object Mass (m)', default: 2.5, unit: 'kg', step: 0.1, min: 0.0001 },
        { id: 'vel', label: 'Velocity (v)', default: 25, unit: 'm/s', step: 1, min: 0 }
      ],
      calculate: function(vals) {
        const m = parseFloat(vals.mass);
        const v = parseFloat(vals.vel);
        if (isNaN(m) || isNaN(v)) return { error: 'Please enter valid numbers.' };
        const c = 299792458; // m/s
        const beta = v / c;
        const keClassical = 0.5 * m * v * v;

        let keRel = keClassical;
        let gamma = 1;
        let isRel = beta > 0.05;

        if (beta < 0.999999) {
          gamma = 1 / Math.sqrt(1 - beta * beta);
          keRel = (gamma - 1) * m * c * c;
        }

        return {
          resultPrimary: `${keClassical.toLocaleString(undefined, {maximumFractionDigits: 3})} J`,
          resultUnits: 'Joules (kg·m²/s²)',
          steps: [
            `Classical Formula: KE = ½ m v²`,
            `Classical KE = 0.5 × ${m} × (${v})² = ${keClassical.toFixed(2)} J`,
            `Velocity as fraction of light speed: v/c = ${beta.toExponential(3)}`,
            isRel
              ? `⚠️ Relativistic regime detected (γ = ${gamma.toFixed(4)}). Relativistic KE = ${keRel.toExponential(4)} J`
              : `Classical approximation is valid (discrepancy with relativity < 0.1%).`
          ]
        };
      }
    },
    {
      id: 'calc-gravity',
      name: 'Newton’s Universal Gravitational Force',
      formula: 'F = G · (m₁ · m₂) / r²',
      category: 'Gravitation',
      description: 'Computes the attractive gravitational force between any two masses separated by distance r.',
      inputs: [
        { id: 'm1', label: 'Mass 1 (m₁)', default: 5.972e24, unit: 'kg (Earth: 5.972e24)', step: 'any', min: 0.01 },
        { id: 'm2', label: 'Mass 2 (m₂)', default: 7.348e22, unit: 'kg (Moon: 7.348e22)', step: 'any', min: 0.01 },
        { id: 'r', label: 'Separation Distance (r)', default: 3.844e8, unit: 'm (Earth-Moon: 3.844e8)', step: 'any', min: 0.1 }
      ],
      calculate: function(vals) {
        const m1 = parseFloat(vals.m1);
        const m2 = parseFloat(vals.m2);
        const r = parseFloat(vals.r);
        if (isNaN(m1) || isNaN(m2) || isNaN(r) || r <= 0) return { error: 'Please enter positive numbers.' };
        const G = 6.6743e-11;
        const F = (G * m1 * m2) / (r * r);
        return {
          resultPrimary: `${F.toExponential(4)} N`,
          resultUnits: 'Newtons',
          steps: [
            `Formula: F = G × (m₁ × m₂) / r²`,
            `Gravitational Constant: G = 6.6743 × 10⁻¹¹ N·m²/kg²`,
            `F = [6.6743×10⁻¹¹ × (${m1.toExponential(3)}) × (${m2.toExponential(3)})] / (${r.toExponential(3)})²`,
            `Result: F = ${F.toExponential(4)} N (or ${(F / 1e12).toExponential(3)} TN)`
          ]
        };
      }
    },
    {
      id: 'calc-ohm',
      name: 'Ohm’s Law & Electrical Power Suite',
      formula: 'V = I · R  |  P = V · I = I² · R = V² / R',
      category: 'Current Electricity',
      description: 'Computes missing electrical variables and power dissipation across an ohmic load.',
      inputs: [
        { id: 'voltage', label: 'Voltage (V)', default: 12, unit: 'V (Volts)', step: 0.1 },
        { id: 'resistance', label: 'Resistance (R)', default: 4, unit: 'Ω (Ohms)', step: 0.1, min: 0.01 }
      ],
      calculate: function(vals) {
        const V = parseFloat(vals.voltage);
        const R = parseFloat(vals.resistance);
        if (isNaN(V) || isNaN(R) || R <= 0) return { error: 'Please enter positive voltage and resistance.' };
        const I = V / R;
        const P = V * I;
        return {
          resultPrimary: `Current: ${I.toFixed(3)} A  |  Power: ${P.toFixed(2)} W`,
          resultUnits: 'Amperes & Watts',
          steps: [
            `Current via Ohm's Law: I = V / R = ${V} V / ${R} Ω = ${I.toFixed(4)} A`,
            `Power via Joule Law: P = V × I = ${V} V × ${I.toFixed(4)} A = ${P.toFixed(3)} W`,
            `Alternative formula: P = I² × R = (${I.toFixed(4)})² × ${R} = ${P.toFixed(3)} W`,
            `Alternative formula: P = V² / R = (${V})² / ${R} = ${P.toFixed(3)} W`
          ]
        };
      }
    },
    {
      id: 'calc-power',
      name: 'Mechanical & Kinematic Power Calculator',
      formula: 'P = W / t = F · v',
      category: 'Mechanics',
      description: 'Calculates the rate of energy transfer or work performed over time.',
      inputs: [
        { id: 'work', label: 'Work Done (W)', default: 4500, unit: 'J (Joules)', step: 10, min: 0 },
        { id: 'time', label: 'Time Elapsed (t)', default: 15, unit: 's (Seconds)', step: 0.5, min: 0.01 }
      ],
      calculate: function(vals) {
        const W = parseFloat(vals.work);
        const t = parseFloat(vals.time);
        if (isNaN(W) || isNaN(t) || t <= 0) return { error: 'Please enter valid work and non-zero time.' };
        const P = W / t;
        const hp = P / 745.7;
        return {
          resultPrimary: `${P.toFixed(2)} W`,
          resultUnits: 'Watts (J/s)',
          steps: [
            `Formula: P = W / t`,
            `Substitution: P = ${W} J / ${t} s`,
            `Result: P = ${P.toFixed(2)} W (or ${(P / 1000).toFixed(3)} kW)`,
            `In Imperial Horsepower: ${hp.toFixed(3)} hp`
          ]
        };
      }
    },
    {
      id: 'calc-wave',
      name: 'Wave Velocity & Frequency Relation',
      formula: 'v = f · λ',
      category: 'Oscillations & Waves',
      description: 'Calculates phase velocity, frequency, or wavelength of sound, light, or mechanical waves.',
      inputs: [
        { id: 'freq', label: 'Frequency (f)', default: 440, unit: 'Hz (Concert A: 440)', step: 1, min: 0.1 },
        { id: 'lambda', label: 'Wavelength (λ)', default: 0.78, unit: 'm', step: 0.01, min: 0.0001 }
      ],
      calculate: function(vals) {
        const f = parseFloat(vals.freq);
        const lam = parseFloat(vals.lambda);
        if (isNaN(f) || isNaN(lam) || f <= 0 || lam <= 0) return { error: 'Please enter positive frequency and wavelength.' };
        const v = f * lam;
        const period = 1 / f;
        return {
          resultPrimary: `${v.toFixed(2)} m/s`,
          resultUnits: 'Meters per second',
          steps: [
            `Formula: v = f × λ`,
            `Time Period: T = 1 / f = 1 / ${f} = ${(period * 1000).toFixed(3)} ms`,
            `Velocity: v = ${f} Hz × ${lam} m = ${v.toFixed(3)} m/s`,
            `In km/h: ${(v * 3.6).toFixed(2)} km/h`
          ]
        };
      }
    },
    {
      id: 'calc-photon',
      name: 'Planck-Einstein Photon Energy Calculator',
      formula: 'E = h · ν = (h · c) / λ',
      category: 'Modern Physics',
      description: 'Calculates photon energy from wavelength or frequency, displaying both Joules and electron-volts (eV).',
      inputs: [
        { id: 'lam_nm', label: 'Wavelength (λ in nm)', default: 550, unit: 'nm (Green: 550)', step: 1, min: 0.001 }
      ],
      calculate: function(vals) {
        const lam_nm = parseFloat(vals.lam_nm);
        if (isNaN(lam_nm) || lam_nm <= 0) return { error: 'Please enter positive wavelength.' };
        const h = 6.62607015e-34; // J*s
        const c = 299792458; // m/s
        const e = 1.602176634e-19; // C
        const lam_m = lam_nm * 1e-9;
        const freq = c / lam_m;
        const E_joules = (h * c) / lam_m;
        const E_ev = E_joules / e;

        // Band identification
        let band = 'Visible Light';
        if (lam_nm < 0.01) band = 'Gamma Rays';
        else if (lam_nm < 10) band = 'X-Rays';
        else if (lam_nm < 400) band = 'Ultraviolet (UV)';
        else if (lam_nm <= 700) band = 'Visible Light';
        else if (lam_nm <= 1e6) band = 'Infrared (IR)';
        else if (lam_nm <= 1e9) band = 'Microwave';
        else band = 'Radio Waves';

        return {
          resultPrimary: `${E_ev.toFixed(3)} eV  (${E_joules.toExponential(3)} J)`,
          resultUnits: 'Electron-Volts & Joules',
          steps: [
            `Formula: E = (h × c) / λ`,
            `Optical Frequency: ν = c / λ = ${freq.toExponential(3)} Hz`,
            `Energy in Joules: E = (6.626×10⁻³⁴ × 3×10⁸) / (${lam_m.toExponential(3)}) = ${E_joules.toExponential(4)} J`,
            `Energy in eV: E / 1.602×10⁻¹⁹ = ${E_ev.toFixed(4)} eV`,
            `EM Spectrum Classification: ${band}`
          ]
        };
      }
    },
    {
      id: 'calc-debroglie',
      name: 'de Broglie Matter Wavelength Calculator',
      formula: 'λ = h / p = h / (m · v)',
      category: 'Quantum Mechanics',
      description: 'Computes the matter wavelength associated with any quantum or macroscopic particle.',
      inputs: [
        { id: 'mass_kg', label: 'Particle Mass (m in kg)', default: 9.109e-31, unit: 'kg (Electron: 9.109e-31)', step: 'any', min: 1e-35 },
        { id: 'vel_ms', label: 'Particle Speed (v in m/s)', default: 1e6, unit: 'm/s', step: 'any', min: 0.1 }
      ],
      calculate: function(vals) {
        const m = parseFloat(vals.mass_kg);
        const v = parseFloat(vals.vel_ms);
        if (isNaN(m) || isNaN(v) || m <= 0 || v <= 0) return { error: 'Please enter positive mass and speed.' };
        const h = 6.62607015e-34;
        const p = m * v;
        const lambda_m = h / p;
        const lambda_nm = lambda_m * 1e9;
        const lambda_ang = lambda_m * 1e10;

        return {
          resultPrimary: `${lambda_nm.toFixed(4)} nm  (${lambda_ang.toFixed(3)} Å)`,
          resultUnits: 'Nanometers & Angstroms',
          steps: [
            `Formula: λ = h / (m × v)`,
            `Linear Momentum: p = (${m.toExponential(3)} kg) × (${v.toExponential(3)} m/s) = ${p.toExponential(3)} kg·m/s`,
            `Wavelength: λ = 6.626×10⁻³⁴ / ${p.toExponential(3)} = ${lambda_m.toExponential(4)} m`,
            `In atomic units: ${lambda_nm.toFixed(4)} nm = ${lambda_ang.toFixed(3)} Å (compare with atomic crystal lattice ~1-3 Å)`
          ]
        };
      }
    },
    {
      id: 'calc-lorentz',
      name: 'Special Relativity: Lorentz Factor & Time Dilation',
      formula: 'γ = 1 / √(1 - v²/c²)  |  Δt = γ · Δt₀',
      category: 'Relativity',
      description: 'Calculates relativistic factor γ, dilated elapsed time Δt, and spatial length contraction as a function of velocity.',
      inputs: [
        { id: 'beta', label: 'Speed as fraction of light (v/c)', default: 0.95, unit: 'c (0 to 0.9999)', step: 0.01, min: 0, max: 0.9999 },
        { id: 't0', label: 'Proper Time (Δt₀)', default: 10, unit: 'years or seconds', step: 1, min: 0.01 }
      ],
      calculate: function(vals) {
        const beta = parseFloat(vals.beta);
        const t0 = parseFloat(vals.t0);
        if (isNaN(beta) || isNaN(t0) || beta < 0 || beta >= 1) return { error: 'Speed ratio v/c must be between 0 and 0.9999.' };
        const gamma = 1 / Math.sqrt(1 - beta * beta);
        const t_dilated = gamma * t0;
        const contraction = (1 - 1 / gamma) * 100;

        return {
          resultPrimary: `γ = ${gamma.toFixed(3)}  |  Dilated Time: ${t_dilated.toFixed(2)}`,
          resultUnits: 'Lorentz factor & Dilated time interval',
          steps: [
            `Lorentz Factor: γ = 1 / √(1 - (${beta})²) = ${gamma.toFixed(4)}`,
            `Dilated Time: Δt = γ × Δt₀ = ${gamma.toFixed(4)} × ${t0} = ${t_dilated.toFixed(3)}`,
            `Length Contraction: Moving lengths shrink by ${contraction.toFixed(2)}% along motion direction`,
            `Kinetic Energy multiplier: E_k = (γ - 1) m₀ c²`
          ]
        };
      }
    }
  ];

  function getCalculators() {
    return CALCULATORS;
  }

  function getCalculator(id) {
    return CALCULATORS.find(c => c.id === id);
  }

  function renderCalculator(calcId, targetElemId) {
    const calc = getCalculator(calcId);
    const target = document.getElementById(targetElemId);
    if (!calc || !target) return;

    let inputsHtml = calc.inputs.map(inp => `
      <div class="pv-calc-input-group">
        <label for="${calc.id}-${inp.id}">${inp.label}</label>
        <div class="pv-input-with-unit">
          <input type="number" id="${calc.id}-${inp.id}" value="${inp.default}" step="${inp.step || 'any'}" min="${inp.min !== undefined ? inp.min : ''}" max="${inp.max !== undefined ? inp.max : ''}" class="pv-input">
          <span class="pv-unit-tag">${inp.unit}</span>
        </div>
      </div>
    `).join('');

    target.innerHTML = `
      <div class="pv-calculator-card" data-calc-id="${calc.id}">
        <div class="pv-calc-header">
          <div>
            <span class="pv-calc-badge">${calc.category}</span>
            <h4>${calc.name}</h4>
          </div>
          <div class="pv-calc-formula-tag">${calc.formula}</div>
        </div>
        <p class="pv-calc-desc">${calc.description}</p>
        <div class="pv-calc-inputs-grid">
          ${inputsHtml}
        </div>
        <div class="pv-calc-actions">
          <button class="pv-btn pv-btn-primary pv-btn-calc-compute" data-calc-id="${calc.id}">Compute Result</button>
        </div>
        <div class="pv-calc-result-box" id="${calc.id}-result">
          <div class="pv-calc-res-label">Calculated Output:</div>
          <div class="pv-calc-res-val" id="${calc.id}-res-val">--</div>
          <div class="pv-calc-res-sub" id="${calc.id}-res-sub">Enter values above and click Compute</div>
          <div class="pv-calc-steps" id="${calc.id}-res-steps" style="display:none;"></div>
        </div>
      </div>
    `;

    // Bind event
    const btn = target.querySelector('.pv-btn-calc-compute');
    const executeCalc = () => {
      const vals = {};
      calc.inputs.forEach(inp => {
        const el = document.getElementById(`${calc.id}-${inp.id}`);
        vals[inp.id] = el ? el.value : '';
      });
      const res = calc.calculate(vals);
      const valEl = document.getElementById(`${calc.id}-res-val`);
      const subEl = document.getElementById(`${calc.id}-res-sub`);
      const stepsEl = document.getElementById(`${calc.id}-res-steps`);

      if (res.error) {
        valEl.textContent = 'Error';
        valEl.style.color = '#ef4444';
        subEl.textContent = res.error;
        stepsEl.style.display = 'none';
      } else {
        valEl.textContent = res.resultPrimary;
        valEl.style.color = 'var(--accent-cyan)';
        subEl.textContent = res.resultUnits;
        stepsEl.innerHTML = '<strong>Step-by-Step Derivation & Units:</strong><ul>' +
          res.steps.map(s => `<li>${s}</li>`).join('') + '</ul>';
        stepsEl.style.display = 'block';
      }
    };

    btn.onclick = executeCalc;
    // Auto-calculate default
    executeCalc();
  }

  return {
    getCalculators,
    getCalculator,
    renderCalculator
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PhysicsCalculators;
}
