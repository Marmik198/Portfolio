'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

import { EASE, FONTS, lerpHex } from '@/theme/tokens';
import { profile } from '@/data/portfolio';
import { GlowButton, TextLink, SplitText, Magnetic, withBase } from './ui';

function useTyped(words) {
  const reduce = useReducedMotion();
  const [text, setText] = React.useState('');
  const [i, setI] = React.useState(0);
  const [del, setDel] = React.useState(false);
  React.useEffect(() => {
    if (reduce) return undefined;
    const word = words[i];
    let delay = del ? 26 : 55;
    if (!del && text === word) delay = 1700;
    if (del && text === '') delay = 320;
    const t = setTimeout(() => {
      if (!del && text === word) setDel(true);
      else if (del && text === '') {
        setDel(false);
        setI((i + 1) % words.length);
      } else setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words, reduce]);
  return reduce ? words[0] : text;
}

function PulseDot() {
  return (
    <Box sx={{ position: 'relative', width: 9, height: 9, flexShrink: 0 }}>
      <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', bgcolor: 'primary.main', animation: 'pulse-ring 2s ease-out infinite' }} />
      <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', bgcolor: 'primary.main' }} />
    </Box>
  );
}

const rise = (reduce, delay) => ({
  initial: reduce ? false : { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function Hero() {
  const theme = useTheme();
  const typed = useTyped(profile.typedRoles);
  const reduce = useReducedMotion();
  const letters = [...profile.name];
  const colors = letters.map((_, i) => lerpHex(theme.palette.text.primary, theme.palette.accent, Math.min(1, (i / (letters.length - 1)) * 1.1)));

  return (
    <Box component="section" id="top" sx={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: { xs: 14, md: 12 }, pb: { xs: 6, md: 4 }, position: 'relative' }}>
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: { xs: 3, md: 5 } }}>
        <Box sx={{ maxWidth: 940 }}>
          <Box>
            <Box component={motion.div} {...rise(reduce, 0.05)} sx={(t) => ({ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 0.8, mb: 3.5, borderRadius: 999, border: `1px solid ${alpha(t.palette.primary.main, 0.4)}`, background: alpha(t.palette.primary.main, 0.1) })}>
              <PulseDot />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {profile.location} · open to select freelance projects
              </Typography>
            </Box>

            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '3.1rem', sm: '5rem', md: '5.8rem', lg: '6.8rem' }, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.045em', mb: 2.5 }}>
              <SplitText text={profile.name} by="char" delay={0.2} animateOnView={false} colors={colors} stagger={0.045} />
            </Typography>

            <Typography component={motion.p} {...rise(reduce, 0.7)} sx={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.6rem' }, letterSpacing: '-0.02em', minHeight: { xs: '3.8rem', md: '2.8rem' }, lineHeight: 1.35 }}>
              {profile.role} who{' '}
              <Box component="span" sx={{ color: 'accent' }}>
                {typed}
              </Box>
              <Box component="span" aria-hidden sx={{ display: 'inline-block', width: 3, height: '1.05em', ml: 0.5, verticalAlign: 'text-bottom', bgcolor: 'primary.main', animation: 'blink 1s steps(1) infinite' }} />
            </Typography>

            <Typography component={motion.p} {...rise(reduce, 0.85)} color="text.secondary" sx={{ mt: 2, maxWidth: 680, fontSize: '1.18rem' }}>
              {profile.tagline}
            </Typography>

            <Box component={motion.div} {...rise(reduce, 1)} sx={{ mt: 4.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
              <Magnetic>
                <GlowButton id="projects">See my work ↓</GlowButton>
              </Magnetic>
              <Magnetic>
                <GlowButton id="contact" variant="outline">
                  Get in touch
                </GlowButton>
              </Magnetic>
              <TextLink href={withBase(profile.resume)} download sx={{ ml: 1 }}>
                Download resume
              </TextLink>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box aria-hidden sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', bottom: 18, left: '50%', ml: '-1px', width: 2, height: 44, overflow: 'hidden', bgcolor: (t) => alpha(t.palette.primary.main, 0.2) }}>
        <Box sx={{ width: 2, height: '40%', bgcolor: 'primary.main', animation: 'scroll-cue 1.8s ease-in-out infinite' }} />
      </Box>
    </Box>
  );
}
