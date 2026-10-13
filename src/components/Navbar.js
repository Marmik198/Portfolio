'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { motion, useScroll, useSpring, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { ColorModeContext } from '@/theme/ThemeRegistry';
import { FONTS, EASE, lerpHex } from '@/theme/tokens';
import { profile } from '@/data/portfolio';
import { goTo } from '@/lib/scroll';
import { GlowButton, withBase } from './ui';

const LINKS = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['internships', 'Internships'],
  ['education', 'Education'],
  ['projects', 'Projects'],
  ['achievements', 'Awards'],
  ['freelancing', 'Freelancing'],
  // ['certifications', 'Certificates'],
  ['contact', 'Contact'],
];

export default function Navbar() {
  const theme = useTheme();
  const reduce = useReducedMotion();
  const { mode, toggle } = React.useContext(ColorModeContext);
  const [active, setActive] = React.useState('');
  const [hover, setHover] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const primary = theme.palette.primary.main;

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 40);
    if (v < 240) setActive('');
  });

  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && window.scrollY > 240 && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    LINKS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const shown = hover ?? active;
  const spring = reduce ? { duration: 0 } : { type: 'spring', stiffness: 520, damping: 40 };

  return (
    <>
      <Box
        component={motion.header}
        animate={{ paddingTop: scrolled ? 10 : 20, paddingBottom: scrolled ? 10 : 20 }}
        transition={{ duration: 0.4, ease: EASE }}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          background: scrolled ? alpha(theme.palette.background.default, 0.72) : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: `1px solid ${scrolled ? theme.palette.divider : 'transparent'}`,
          transition: 'background .4s, border-color .4s',
        }}
      >
        <Box component="nav" aria-label="Primary" sx={{ maxWidth: 1320, mx: 'auto', px: { xs: 3, md: 5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Box component="a" href="#top" onClick={goTo('top')} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', color: 'text.primary' }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: '12px',
                display: 'grid',
                placeItems: 'center',
                fontFamily: FONTS.display,
                fontWeight: 800,
                fontSize: '0.95rem',
                color: '#fff',
                background: `linear-gradient(135deg, ${primary}, ${lerpHex(primary, '#9a8cff', 0.5)})`,
                boxShadow: `0 8px 24px ${alpha(primary, 0.45)}`,
                transition: 'transform .4s cubic-bezier(.22,1,.36,1)',
                '&:hover': { transform: 'rotate(-8deg) scale(1.08)' },
              }}
            >
              {profile.name.split(' ').map((p) => p[0]).join('')}
            </Box>
            <Typography sx={{ fontFamily: FONTS.display, fontWeight: 700, display: { xs: 'none', sm: 'block', lg: 'none', xl: 'block' } }}>{profile.name}</Typography>
          </Box>

          <Box
            onMouseLeave={() => setHover(null)}
            sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.25, p: 0.5, borderRadius: 999, border: `1px solid ${theme.palette.divider}`, background: alpha(theme.palette.background.paper, 0.55) }}
          >
            {LINKS.map(([id, label]) => (
              <Box
                key={id}
                component="a"
                href={`#${id}`}
                onClick={goTo(id)}
                onMouseEnter={() => setHover(id)}
                onFocus={() => setHover(id)}
                onBlur={() => setHover(null)}
                sx={{
                  position: 'relative',
                  isolation: 'isolate',
                  px: 1.25,
                  py: 0.8,
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: shown === id ? 'accent' : 'text.secondary',
                  transition: 'color .25s',
                }}
              >
                {shown === id && (
                  <Box
                    component={motion.span}
                    layoutId="nav-indicator"
                    transition={spring}
                    sx={{ position: 'absolute', inset: 0, zIndex: -1, borderRadius: 999, bgcolor: alpha(primary, 0.16), border: `1px solid ${alpha(primary, 0.35)}` }}
                  />
                )}
                {active === id && (
                  <Box component={motion.span} layoutId="nav-dot" transition={spring} sx={{ position: 'absolute', left: '50%', bottom: -6, width: 5, height: 5, ml: '-2.5px', borderRadius: '50%', bgcolor: 'primary.main', boxShadow: `0 0 10px ${primary}` }} />
                )}
                {label}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={toggle} aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} sx={{ color: 'text.primary' }}>
              {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <GlowButton href={withBase(profile.resume)} download sx={{ py: 0.9, px: 2.25, fontSize: '0.95rem' }}>
                Resume
              </GlowButton>
            </Box>
            <IconButton onClick={() => setOpen(true)} aria-label="Open menu" sx={{ display: { lg: 'none' }, color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        <Box component={motion.div} style={{ scaleX: progress, transformOrigin: '0 50%' }} sx={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: '2px', background: `linear-gradient(90deg, ${primary}, ${lerpHex(primary, '#b8afff', 0.7)})`, boxShadow: `0 0 12px ${primary}` }} />
      </Box>

      <Drawer anchor="top" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { height: '100svh', overflowY: 'auto', pb: 4, background: theme.palette.background.default, backgroundImage: 'none' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu" sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ px: 4, display: 'grid', gap: 0.5 }}>
          {LINKS.map(([id, label], i) => (
            <Typography
              key={id}
              component={motion.a}
              href={`#${id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={open ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: EASE }}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                setTimeout(() => goTo(id)(), 250);
              }}
              sx={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: '2rem', lineHeight: 1.35, color: active === id ? 'accent' : 'text.primary', textDecoration: 'none' }}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
