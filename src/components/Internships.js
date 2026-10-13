'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { internships } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, Pill, Bullets, Mono, Logo } from './ui';

export default function Internships() {
  return (
    <Section id="internships">
      <SectionHeading title="Internships" subtitle="Two internships before my first full-time role, where I learned to ship things people actually use." />
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'minmax(0, 1fr)' }}>
        {internships.map((it, i) => (
          <Reveal key={it.company} delay={i * 0.1}>
            <FxCard tilt={3} sx={{ p: { xs: 3, md: 4 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 } }}>
                <Logo src={it.logo} name={it.company} size={68} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, lineHeight: 1.2 }}>
                    {it.company}
                  </Typography>
                  <Typography sx={{ color: 'accent', fontWeight: 700, mt: 0.5 }}>{it.role}</Typography>
                  <Mono sx={{ display: { xs: 'none', sm: 'block' }, mt: 0.75 }}>{it.location}</Mono>
                  <Mono sx={{ display: { xs: 'block', sm: 'none' }, mt: 0.75 }}>{[it.period, it.location].filter(Boolean).join(' · ')}</Mono>
                </Box>
                <Pill sx={{ display: { xs: 'none', sm: 'inline-flex' }, alignSelf: 'flex-start', flexShrink: 0 }}>{it.period}</Pill>
              </Box>
              <Bullets items={it.bullets} sx={{ mt: 3 }} />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                {it.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </Box>
            </FxCard>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
