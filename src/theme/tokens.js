// ---------------------------------------------------------------------
// ONE primary colour drives the whole theme. Change PRIMARY and every
// surface, border, text tint, glow and gradient follows it.
// ---------------------------------------------------------------------
export const PRIMARY = '#5B4BFF';

export const FONTS = {
  display: '"Sora Variable", "Sora", system-ui, -apple-system, "Segoe UI", sans-serif',
  body: '"Manrope Variable", "Manrope", system-ui, -apple-system, "Segoe UI", sans-serif',
  mono: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
};

export const EASE = [0.22, 1, 0.36, 1];
export const NAV_OFFSET = 80;

/* ---- colour helpers ---- */
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [h, s * 100, l * 100];
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const x = (v) => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${x(f(0))}${x(f(8))}${x(f(4))}`;
}

export function lerpHex(a, b, t) {
  const p = (h, i) => parseInt(h.slice(i, i + 2), 16);
  const m = (i) => Math.round(p(a, i) + (p(b, i) - p(a, i)) * t).toString(16).padStart(2, '0');
  return `#${m(1)}${m(3)}${m(5)}`;
}

/** Builds every colour used by the site from the single primary colour. */
export function buildPalette(mode, primary = PRIMARY) {
  const [h] = hexToHsl(primary);
  const c = (s, l) => hslToHex(h, s, l);
  const dark = mode === 'dark';
  return dark
    ? {
        primary,
        accent: c(100, 78), // readable primary tint on dark
        bg: c(45, 5),
        surface: c(40, 9),
        surface2: c(36, 13),
        text: c(80, 97),
        muted: c(25, 82),
        line: 'rgba(160,150,255,0.15)',
        onPrimary: '#FFFFFF',
      }
    : {
        primary,
        accent: c(80, 48), // readable primary shade on light
        bg: c(100, 98.5),
        surface: '#FFFFFF',
        surface2: c(100, 96),
        text: c(55, 12),
        muted: c(20, 30),
        line: 'rgba(80,65,230,0.16)',
        onPrimary: '#FFFFFF',
      };
}
