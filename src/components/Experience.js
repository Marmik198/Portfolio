'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { motion, useScroll, useSpring } from 'framer-motion';

import { experience } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, Pill, Bullets, Logo } from './ui';

export default function Experience() {
  const trackRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 65%', 'end 55%'] });
  const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <Section id="experience">
      <SectionHeading title="Experience" subtitle="Three years at one company, from my first line of production code to leading a new product." />

      <Reveal sx={{ mb: 6 }}>
        <FxCard tilt={2} sx={{ p: { xs: 3, md: 4 }, pl: { xs: 3.5, md: 5 } }}>
          {/* Accent edge on the left (a real element, because FxCard already uses ::before for its hover glow) */}
          <Box aria-hidden sx={(t) => ({ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: `linear-gradient(180deg, ${t.palette.primary.main}, ${t.palette.accent})` })} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 } }}>
            <Logo src={experience.logo} name={experience.company} size={76} />
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h4" component="h3" sx={{ fontSize: { xs: '1.55rem', md: '2.2rem' }, lineHeight: 1.15 }}>
                {experience.company}
              </Typography>
              <Typography sx={{ color: 'accent', fontWeight: 600, mt: 0.5, fontSize: { xs: '0.98rem', md: '1.08rem' } }}>{experience.group}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2.5 }}>
            {experience.domains.map((dm) => (
              <Pill key={dm}>{dm}</Pill>
            ))}
            <Pill>{experience.location}</Pill>
          </Box>
        </FxCard>
      </Reveal>

      {/* The line draws itself as you scroll through the roles. */}
      <Box ref={trackRef} sx={{ position: 'relative', pl: { xs: 4, md: 8 } }}>
        <Box aria-hidden sx={(t) => ({ position: 'absolute', left: { xs: 7, md: 15 }, top: 12, bottom: 12, width: '2px', bgcolor: t.palette.divider })} />
        <Box
          aria-hidden
          component={motion.div}
          style={{ scaleY: draw, transformOrigin: 'top' }}
          sx={(t) => ({ position: 'absolute', left: { xs: 7, md: 15 }, top: 12, bottom: 12, width: '2px', background: `linear-gradient(${t.palette.primary.main}, ${t.palette.accent})`, boxShadow: `0 0 14px ${t.palette.primary.main}` })}
        />
        {experience.roles.map((role, idx) => (
          <Box key={role.title} sx={{ position: 'relative', pb: 5 }}>
            <Box
              aria-hidden
              component={motion.div}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              sx={(t) => ({ position: 'absolute', left: { xs: -33, md: -57 }, top: 30, width: 18, height: 18, borderRadius: '50%', bgcolor: idx === 0 ? 'primary.main' : 'background.default', border: `3px solid ${t.palette.primary.main}`, boxShadow: `0 0 0 5px ${t.palette.background.default}, 0 0 18px ${alpha(t.palette.primary.main, 0.7)}` })}
            />
            <Reveal>
              <FxCard tilt={2} sx={{ p: { xs: 3, md: 4 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                  <Typography variant="h4" component="h4" sx={{ fontSize: { xs: '1.5rem', md: '1.9rem' } }}>
                    {role.title}
                  </Typography>
                  <Pill>{role.period}</Pill>
                </Box>
                <Bullets items={role.bullets} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                  {role.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </Box>
              </FxCard>
            </Reveal>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
