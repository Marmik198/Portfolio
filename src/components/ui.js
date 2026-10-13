'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';

import BoltIcon from '@mui/icons-material/Bolt';
import HubIcon from '@mui/icons-material/Hub';
import CloudIcon from '@mui/icons-material/Cloud';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PaletteIcon from '@mui/icons-material/Palette';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ApiIcon from '@mui/icons-material/Api';
import StreamIcon from '@mui/icons-material/Stream';
import SpeedIcon from '@mui/icons-material/Speed';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';

import { EASE, FONTS, lerpHex } from '@/theme/tokens';
import { goTo } from '@/lib/scroll';

export const ICONS = {
  Bolt: BoltIcon, Hub: HubIcon, Cloud: CloudIcon, Dashboard: DashboardIcon, Code: CodeIcon, Storage: StorageIcon,
  AccountTree: AccountTreeIcon, Palette: PaletteIcon, AutoAwesome: AutoAwesomeIcon, Api: ApiIcon, Stream: StreamIcon,
  Speed: SpeedIcon, Web: WebIcon, School: SchoolIcon, EmojiEvents: EmojiEventsIcon, Verified: VerifiedIcon,
};

export const line = (t) => `1px solid ${t.palette.divider}`;
const arr = (sx) => (Array.isArray(sx) ? sx : [sx]);

/** Fades and lifts children in once as they scroll into view. */
export function Reveal({ children, delay = 0, y = 24, sx, ...rest }) {
  const reduce = useReducedMotion();
  return (
    <Box
      component={motion.div}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      sx={sx}
      {...rest}
    >
      {children}
    </Box>
  );
}

export function Mono({ children, sx, component = 'span', ...rest }) {
  return (
    <Typography
      component={component}
      sx={[{ fontFamily: FONTS.mono, fontSize: '0.88rem', color: 'text.secondary', lineHeight: 1.6 }, ...arr(sx)]}
      {...rest}
    >
      {children}
    </Typography>
  );
}

/** Splits text into characters or words that rise out of a mask. */
export function SplitText({ text, by = 'word', delay = 0, stagger, colors, animateOnView = true, sx }) {
  const reduce = useReducedMotion();
  // `i` is the running index (spaces count in char mode) so per-character `colors` keep lining up.
  let idx = 0;
  const words = text.split(' ').map((w) => {
    const chars = by === 'word' ? [{ t: w, i: idx++ }] : [...w].map((t) => ({ t, i: idx++ }));
    if (by === 'char') idx++;
    return { chars };
  });
  const st = stagger ?? (by === 'word' ? 0.07 : 0.04);
  // The trigger lives on the unclipped parent so IntersectionObserver can see it.
  const parent = { hidden: {}, show: { transition: { staggerChildren: st, delayChildren: delay } } };
  const child = { hidden: { y: '115%', rotate: 7 }, show: { y: 0, rotate: 0, transition: { duration: 0.9, ease: EASE } } };
  const trigger = animateOnView ? { whileInView: 'show', viewport: { once: true, margin: '-60px' } } : { animate: 'show' };
  return (
    <Box
      component={motion.span}
      aria-label={text}
      variants={parent}
      initial={reduce ? 'show' : 'hidden'}
      {...trigger}
      sx={[{ display: 'inline-block' }, ...arr(sx)]}
    >
      {words.map((w, wi) => (
        <React.Fragment key={wi}>
          {/* Characters of one word stay together so the line only ever wraps between words. */}
          <Box component="span" sx={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {w.chars.map((c) => (
              <Box key={c.i} component="span" aria-hidden sx={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', pb: '0.26em', mb: '-0.26em', pr: by === 'word' ? '0.28em' : 0 }}>
                <Box component={motion.span} variants={child} sx={{ display: 'inline-block', transformOrigin: 'left bottom', color: colors ? colors[c.i] : 'inherit' }}>
                  {c.t}
                </Box>
              </Box>
            ))}
          </Box>
          {by === 'char' && wi < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </Box>
  );
}

/** Pulls its child toward the cursor. */
export function Magnetic({ children, strength = 0.3 }) {
  const ref = React.useRef(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });
  const move = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div ref={ref} onPointerMove={move} onPointerLeave={leave} style={{ x, y, display: 'inline-block' }}>
      {children}
    </motion.div>
  );
}

/** Card with a cursor-following spotlight and gentle 3D tilt. */
export function FxCard({ children, tilt = 5, sx, ...rest }) {
  const ref = React.useRef(null);
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const ry = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
    if (!reduce && tilt) {
      ry.set(((e.clientX - r.left) / r.width - 0.5) * tilt * 2);
      rx.set(-((e.clientY - r.top) / r.height - 0.5) * tilt * 2);
    }
  };
  const leave = () => {
    rx.set(0);
    ry.set(0);
  };
  return (
    <Box
      component={motion.div}
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      sx={[
        (t) => ({
          position: 'relative',
          isolation: 'isolate',
          overflow: 'hidden',
          borderRadius: '22px',
          bgcolor: 'background.paper',
          border: line(t),
          transition: 'border-color .35s, box-shadow .35s',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), ${alpha(t.palette.primary.main, 0.22)}, transparent 62%)`,
            opacity: 0,
            zIndex: -1,
            transition: 'opacity .35s',
            pointerEvents: 'none',
          },
          '&:hover': { borderColor: alpha(t.palette.primary.main, 0.6), boxShadow: `0 28px 70px ${alpha(t.palette.primary.main, 0.2)}` },
          '&:hover::before': { opacity: 1 },
        }),
        ...arr(sx),
      ]}
      {...rest}
    >
      {children}
    </Box>
  );
}

/** Primary button with a light sweep. variant: solid | outline | light */
export function GlowButton({ children, href, id, variant = 'solid', external, download, onClick, type, sx, ...rest }) {
  const props = id ? { href: `#${id}`, onClick: goTo(id) } : { href, onClick, type, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}), ...(download ? { download: true } : {}) };
  return (
    <Box
      component={href || id ? 'a' : 'button'}
      {...props}
      {...rest}
      sx={[
        (t) => ({
          position: 'relative',
          overflow: 'hidden',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          px: 3,
          py: 1.5,
          borderRadius: 999,
          fontFamily: FONTS.body,
          fontSize: '1rem',
          fontWeight: 700,
          textDecoration: 'none',
          cursor: 'pointer',
          border: '1px solid transparent',
          transition: 'transform .3s, box-shadow .3s, background .3s, border-color .3s, color .3s',
          ...(variant === 'solid' && {
            color: '#fff',
            background: `linear-gradient(135deg, ${t.palette.primary.main}, ${lerpHex(t.palette.primary.main, '#9a8cff', 0.45)})`,
            boxShadow: `0 12px 32px ${alpha(t.palette.primary.main, 0.45)}`,
            '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 18px 44px ${alpha(t.palette.primary.main, 0.6)}` },
          }),
          ...(variant === 'outline' && {
            color: t.palette.text.primary,
            borderColor: alpha(t.palette.primary.main, 0.5),
            background: alpha(t.palette.primary.main, 0.06),
            '&:hover': { background: alpha(t.palette.primary.main, 0.16), borderColor: t.palette.primary.main, transform: 'translateY(-2px)' },
          }),
          ...(variant === 'light' && {
            color: t.palette.primary.main,
            background: '#fff',
            '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 16px 40px rgba(0,0,0,.25)' },
          }),
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '40%',
            left: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent)',
            transform: 'translateX(-120%) skewX(-20deg)',
          },
          '&:hover::after': { animation: 'shine .9s ease' },
        }),
        ...arr(sx),
      ]}
    >
      {children}
    </Box>
  );
}

export function TextLink({ href, external, download, children, sx }) {
  return (
    <Box
      component="a"
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: true } : {})}
      sx={[
        {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.75,
          color: 'accent',
          fontWeight: 700,
          textDecoration: 'none',
          '&:hover': { textDecoration: 'underline', textUnderlineOffset: '4px' },
          '&:hover .arrow': { transform: 'translate(3px,-3px)' },
        },
        ...arr(sx),
      ]}
    >
      {children}
      <Box component="span" className="arrow" aria-hidden sx={{ display: 'inline-block', transition: 'transform .3s' }}>
        ↗
      </Box>
    </Box>
  );
}

export function Bullets({ items, sx }) {
  return (
    <Box component="ul" sx={[{ listStyle: 'none', m: 0, p: 0 }, ...arr(sx)]}>
      {items.map((b, i) => (
        <Box
          component="li"
          key={i}
          sx={(t) => ({
            position: 'relative',
            pl: 3,
            mb: 1.4,
            color: 'text.secondary',
            '&:last-child': { mb: 0 },
            '&::before': { content: '""', position: 'absolute', left: 2, top: '0.7em', width: 7, height: 7, borderRadius: '2px', transform: 'rotate(45deg)', bgcolor: 'primary.main', boxShadow: `0 0 0 3px ${alpha(t.palette.primary.main, 0.2)}` },
          })}
        >
          {b}
        </Box>
      ))}
    </Box>
  );
}

export function Pill({ children, sx }) {
  return (
    <Box
      component="span"
      sx={[
        (t) => ({
          display: 'inline-flex',
          alignItems: 'center',
          px: 1.75,
          py: 0.5,
          borderRadius: 999,
          fontSize: '0.92rem',
          fontWeight: 600,
          color: 'accent',
          background: alpha(t.palette.primary.main, 0.12),
          border: `1px solid ${alpha(t.palette.primary.main, 0.28)}`,
        }),
        ...arr(sx),
      ]}
    >
      {children}
    </Box>
  );
}

export const IconBox = ({ name, size = 48 }) => {
  const Icon = ICONS[name];
  return (
    <Box sx={(t) => ({ width: size, height: size, borderRadius: '14px', display: 'grid', placeItems: 'center', color: 'accent', background: alpha(t.palette.primary.main, 0.14), border: `1px solid ${alpha(t.palette.primary.main, 0.25)}` })}>
      {Icon ? <Icon /> : null}
    </Box>
  );
};

// Next injects the GitHub Pages base path at build time; plain <img> tags need it added by hand.
const BASE_PATH = process.env.__NEXT_ROUTER_BASEPATH || '';
export const withBase = (p) => (typeof p === 'string' && p.startsWith('/') ? `${BASE_PATH}${p}` : p);

/**
 * Logo slot for a company, school or project.
 * Pass `src` (a file in public/logos/, e.g. '/logos/acme.png') to show the real logo.
 * Without `src` it shows the initials of `name`, so the layout never looks empty.
 */
export function Logo({ src, name = '', size = 64, sx }) {
  const words = name.split(',')[0].split(/\s+/).filter(Boolean);
  const initials = (words.length > 1 ? words.slice(0, 2).map((w) => w[0]).join('') : (words[0] || '').slice(0, 2)).toUpperCase();
  return (
    <Box
      sx={[
        (t) => ({
          width: size,
          height: size,
          flexShrink: 0,
          borderRadius: `${Math.round(size * 0.28)}px`,
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
          fontFamily: FONTS.display,
          fontWeight: 800,
          fontSize: size * 0.34,
          letterSpacing: '-0.02em',
          color: 'accent',
          background: src ? '#fff' : alpha(t.palette.primary.main, 0.14),
          border: `1px solid ${src ? t.palette.divider : alpha(t.palette.primary.main, 0.25)}`,
        }),
        ...arr(sx),
      ]}
    >
      {src ? (
        <Box component="img" src={withBase(src)} alt={`${name} logo`} loading="lazy" sx={{ width: '100%', height: '100%', objectFit: 'contain', p: `${Math.round(size * 0.14)}px` }} />
      ) : (
        initials
      )}
    </Box>
  );
}

export function Section({ id, children, sx }) {
  return (
    <Box component="section" id={id} sx={[{ py: { xs: 8, md: 15 }, position: 'relative' }, ...arr(sx)]}>
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: { xs: 3, md: 5 } }}>
        {children}
      </Container>
    </Box>
  );
}

/** Word-by-word heading with a hand-drawn underline that draws itself. */
export function SectionHeading({ title, subtitle }) {
  const reduce = useReducedMotion();
  return (
    <Box sx={{ mb: { xs: 6, md: 9 }, maxWidth: 780 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.9rem' } }}>
        <SplitText text={title} />
      </Typography>
      <Box component="svg" viewBox="0 0 220 14" aria-hidden sx={{ display: 'block', width: 150, height: 14, mt: 1.5, overflow: 'visible', color: 'primary.main' }}>
        <motion.path
          d="M2 9 C 30 1, 50 15, 80 7 S 130 1, 160 8 S 200 12, 218 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
        />
      </Box>
      {subtitle && (
        <Reveal delay={0.15}>
          <Typography color="text.secondary" sx={{ mt: 2.5, fontSize: '1.15rem', maxWidth: 680 }}>
            {subtitle}
          </Typography>
        </Reveal>
      )}
    </Box>
  );
}
