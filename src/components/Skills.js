'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion';

import { FONTS } from '@/theme/tokens';
import { skills } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, IconBox, Mono } from './ui';

const wrap = (min, max, v) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/** Big outlined words. Speeds up with scroll velocity and reverses with scroll direction. */
function Marquee() {
  const reduce = useReducedMotion();
  const words = skills.flatMap((g) => g.items);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-1500, 0, 1500], [-6, 0, 6], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const dir = React.useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < -0.05) dir.current = -1;
    else if (f > 0.05) dir.current = 1;
    let move = dir.current * -1.1 * (delta / 1000);
    move += dir.current * move * Math.abs(f);
    baseX.set(baseX.get() + move);
  });

  const row = [...words, ...words];
  return (
    <Box aria-hidden sx={{ py: { xs: 4, md: 6 }, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
      <Box component={motion.div} style={{ x }} sx={{ display: 'flex', width: 'max-content' }}>
        {[0, 1].map((k) => (
          <Box key={k} sx={{ display: 'flex' }}>
            {row.slice(0, words.length).map((w, i) => (
              <Typography
                key={`${k}-${i}`}
                component="span"
                sx={(t) => ({
                  fontFamily: FONTS.display,
                  fontWeight: 800,
                  fontSize: { xs: '3rem', md: '5.2rem' },
                  letterSpacing: '-0.04em',
                  whiteSpace: 'nowrap',
                  pr: { xs: 4, md: 7 },
                  color: i % 3 === 0 ? t.palette.accent : 'transparent',
                  WebkitTextStroke: i % 3 === 0 ? '0' : `1.5px ${alpha(t.palette.text.primary, 0.32)}`,
                })}
              >
                {w}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function Skills() {
  return (
    <>
      <Section id="skills">
        <SectionHeading title="Skills" subtitle="Backend depth, front-end craft and an AI-assisted workflow, grouped by what they help me do." />
        {/* Flex (not grid) so a short last row, e.g. the 7th card, sits in the centre. Gap is 20px (spacing 2.5). */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2.5 }}>
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08} sx={{ width: { xs: '100%', md: 'calc((100% - 20px) / 2)', lg: 'calc((100% - 40px) / 3)' }, minWidth: 0 }}>
              <FxCard tilt={5} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <IconBox name={g.icon} size={42} />
                    <Typography variant="h6" component="h3" sx={{ fontSize: '1.1rem' }}>
                      {g.title}
                    </Typography>
                  </Box>
                  <Mono>{g.items.length}</Mono>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {g.items.map((item, j) => (
                    <Box
                      key={item}
                      component={motion.span}
                      initial={{ opacity: 0, scale: 0.8, y: 8 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.1 + j * 0.035 }}
                      sx={(t) => ({
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 999,
                        fontSize: '0.94rem',
                        fontWeight: 600,
                        border: `1px solid ${t.palette.divider}`,
                        background: alpha(t.palette.primary.main, 0.07),
                        transition: 'color .25s, border-color .25s, background .25s, transform .25s',
                        '&:hover': { color: 'accent', borderColor: 'primary.main', background: alpha(t.palette.primary.main, 0.18), transform: 'translateY(-3px)' },
                      })}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </FxCard>
            </Reveal>
          ))}
        </Box>
      </Section>
      <Marquee />
    </>
  );
}
