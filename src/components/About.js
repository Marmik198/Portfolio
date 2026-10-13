'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { FONTS } from '@/theme/tokens';
import { about } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, IconBox, Mono } from './ui';

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="About me" subtitle="A backend engineer who likes problems where volume, latency and correctness all matter at once." />

      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', md: 'repeat(12, minmax(0, 1fr))' } }}>
        {/* Short intro + three proof points */}
        <Reveal sx={{ gridColumn: { md: 'span 7' } }}>
          <FxCard tilt={2} sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
            <Typography sx={{ fontFamily: FONTS.display, fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.3rem' }, lineHeight: 1.6, letterSpacing: '-0.01em' }}>
              {about.summary}
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mt: 3, display: 'grid', gap: 1.5 }}>
              {about.points.map((p) => (
                <Box component="li" key={p} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                  <CheckCircleOutlineIcon sx={{ color: 'accent', fontSize: '1.35rem', mt: '2px', flexShrink: 0 }} />
                  <Typography>{p}</Typography>
                </Box>
              ))}
            </Box>
          </FxCard>
        </Reveal>

        {/* Quick facts, two across */}
        <Reveal delay={0.1} sx={{ gridColumn: { md: 'span 5' } }}>
          <FxCard tilt={3} sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: { xs: 2.5, md: 3.5 }, alignContent: 'center', height: '100%' }}>
              {about.facts.map((f) => (
                <Box key={f.label} sx={{ minWidth: 0 }}>
                  <Mono sx={{ display: 'block', mb: 0.5 }}>{f.label}</Mono>
                  <Typography sx={{ fontWeight: 700, lineHeight: 1.35 }}>{f.value}</Typography>
                </Box>
              ))}
            </Box>
          </FxCard>
        </Reveal>

        {/* What I focus on: four small tiles */}
        <Box sx={{ gridColumn: { md: '1 / -1' }, display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' } }}>
          {about.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07} sx={{ height: '100%' }}>
              <FxCard tilt={6} sx={{ p: 2.75, height: '100%', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <IconBox name={h.icon} size={44} />
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="h6" component="h3" sx={{ fontSize: '1.05rem', lineHeight: 1.3, mb: 0.5 }}>
                    {h.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {h.text}
                  </Typography>
                </Box>
              </FxCard>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
