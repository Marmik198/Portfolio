import { NAV_OFFSET } from '@/theme/tokens';

let raf = 0;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Eased scroll to a y position. Cancels if the user scrolls manually. */
export function animateScrollTo(to, onDone) {
  cancelAnimationFrame(raf);
  const from = window.scrollY;
  const dist = to - from;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || Math.abs(dist) < 2) {
    window.scrollTo(0, to);
    onDone?.();
    return;
  }
  const dur = Math.min(1500, 650 + Math.abs(dist) * 0.22);
  const t0 = performance.now();
  const cancel = () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('wheel', cancel);
    window.removeEventListener('touchstart', cancel);
  };
  window.addEventListener('wheel', cancel, { passive: true, once: true });
  window.addEventListener('touchstart', cancel, { passive: true, once: true });
  const step = (now) => {
    const k = Math.min(1, (now - t0) / dur);
    window.scrollTo(0, from + dist * ease(k));
    if (k < 1) raf = requestAnimationFrame(step);
    else {
      cancel();
      onDone?.();
    }
  };
  raf = requestAnimationFrame(step);
}

export function scrollToId(id) {
  if (id === 'top') {
    animateScrollTo(0, () => history.replaceState(null, '', window.location.pathname));
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET + 1;
  animateScrollTo(y, () => history.replaceState(null, '', `#${id}`));
}

/** onClick handler for in-page anchors. */
export const goTo = (id) => (e) => {
  if (e && e.preventDefault) e.preventDefault();
  scrollToId(id);
};
