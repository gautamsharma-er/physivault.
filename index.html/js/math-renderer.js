/**
 * PhysiVault Mathematical Rendering Engine
 * Transforms mathematical notation and LaTeX constructs into accessible,
 * beautifully styled MathML and semantic HTML.
 */

const MathRenderer = (function () {
  const GREEK_SYMBOLS = {
    '\\alpha': 'α', '\\beta': 'β', '\\gamma': 'γ', '\\delta': 'δ', '\\varepsilon': 'ε',
    '\\epsilon': 'ϵ', '\\zeta': 'ζ', '\\eta': 'η', '\\theta': 'θ', '\\iota': 'ι',
    '\\kappa': 'κ', '\\lambda': 'λ', '\\mu': 'μ', '\\nu': 'ν', '\\xi': 'ξ',
    '\\pi': 'π', '\\rho': 'ρ', '\\sigma': 'σ', '\\tau': 'τ', '\\upsilon': 'υ',
    '\\phi': 'ϕ', '\\chi': 'χ', '\\psi': 'ψ', '\\omega': 'ω',
    '\\Gamma': 'Γ', '\\Delta': 'Δ', '\\Theta': 'Θ', '\\Lambda': 'Λ', '\\Xi': 'Ξ',
    '\\Pi': 'Π', '\\Sigma': 'Σ', '\\Upsilon': 'Υ', '\\Phi': 'Φ', '\\Psi': 'Ψ', '\\Omega': 'Ω',
    '\\hbar': 'ħ', '\\nabla': '∇', '\\partial': '∂', '\\infty': '∞',
    '\\times': '×', '\\cdot': '·', '\\pm': '±', '\\mp': '∓',
    '\\approx': '≈', '\\equiv': '≡', '\\le': '≤', '\\ge': '≥', '\\ne': '≠',
    '\\propto': '∝', '\\in': '∈', '\\forall': '∀', '\\exists': '∃',
    '\\iff': '⟺', '\\implies': '⟹', '\\to': '→', '\\leftarrow': '←',
    '\\int': '∫', '\\iint': '∬', '\\oint': '∮', '\\sum': '∑', '\\prod': '∏',
    '\\sqrt': '√'
  };

  /**
   * Replace basic LaTeX macros with corresponding Unicode and HTML structures.
   */
  function renderToHtml(latexStr) {
    if (!latexStr) return '';
    let s = latexStr.trim();

    // Replace aligned environment
    if (s.includes('\\begin{aligned}')) {
      s = s.replace(/\\begin\{aligned\}/g, '<div class="pv-aligned-math">')
           .replace(/\\end\{aligned\}/g, '</div>');
      // replace \\ with line breaks
      s = s.replace(/\\\\/g, '<div class="pv-math-row-break"></div>');
      // replace & alignment tab
      s = s.replace(/&/g, '<span class="pv-math-spacer"></span>');
    }

    // Replace \vec{x} and \hat{x}
    s = s.replace(/\\vec\{([^}]+)\}/g, '<span class="pv-vector">$1<span class="pv-arrow">→</span></span>');
    s = s.replace(/\\hat\{([^}]+)\}/g, '<span class="pv-unit-vec">$1<span class="pv-caret">^</span></span>');

    // Replace \text{...}
    s = s.replace(/\\text\{([^}]+)\}/g, '<span class="pv-math-text">$1</span>');

    // Recursive fractions: \frac{num}{den}
    let maxFractions = 10;
    while (s.includes('\\frac') && maxFractions-- > 0) {
      s = s.replace(/\\frac\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g, function(_, num, den) {
        return `<span class="pv-frac"><span class="pv-num">${num}</span><span class="pv-den">${den}</span></span>`;
      });
    }

    // Square roots: \sqrt{...}
    s = s.replace(/\\sqrt\{([^}]+)\}/g, '<span class="pv-sqrt"><span class="pv-radical">√</span><span class="pv-radicand">$1</span></span>');

    // Replace Greek and symbols
    for (const [tex, uni] of Object.entries(GREEK_SYMBOLS)) {
      const regex = new RegExp(tex.replace(/\\/g, '\\\\') + '(?![a-zA-Z])', 'g');
      s = s.replace(regex, `<span class="pv-math-sym">${uni}</span>`);
    }

    // Superscripts and subscripts: ^{...} and _{...}
    s = s.replace(/\^{([^}]+)\}/g, '<sup>$1</sup>');
    s = s.replace(/\^([0-9a-zA-Z\+\-α-ωΑ-Ω])/g, '<sup>$1</sup>');
    s = s.replace(/_{([^}]+)\}/g, '<sub>$1</sub>');
    s = s.replace(/_([0-9a-zA-Z\+\-α-ωΑ-Ω])/g, '<sub>$1</sub>');

    // Clean up remaining brackets
    s = s.replace(/\\left\(/g, '<span class="pv-paren">(</span>')
         .replace(/\\right\)/g, '<span class="pv-paren">)</span>')
         .replace(/\\left\[/g, '<span class="pv-bracket">[</span>')
         .replace(/\\right\]/g, '<span class="pv-bracket">]</span>')
         .replace(/\\left\\{/g, '<span class="pv-brace">{</span>')
         .replace(/\\right\\}/g, '<span class="pv-brace">}</span>')
         .replace(/\\quad/g, '&emsp;')
         .replace(/\\,/g, '&thinsp;')
         .replace(/\\ /g, '&nbsp;');

    return `<span class="pv-rendered-math">${s}</span>`;
  }

  /**
   * Generates native MathML for accessible readers and browser math layouts.
   */
  function renderToMathML(latexStr) {
    if (!latexStr) return '';
    let html = renderToHtml(latexStr);
    return `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block" class="pv-mathml-node">${html}</math>`;
  }

  return {
    render: renderToHtml,
    renderBlock: function(latexStr) {
      return `<div class="pv-math-block">${renderToHtml(latexStr)}</div>`;
    },
    renderInline: function(latexStr) {
      return `<span class="pv-math-inline">${renderToHtml(latexStr)}</span>`;
    },
    renderMathML: renderToMathML
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MathRenderer;
}
