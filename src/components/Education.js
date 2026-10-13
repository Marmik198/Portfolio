'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { education } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, Mono, Pill, Logo } from './ui';

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" subtitle="Where I studied, and how it went." />
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'minmax(0, 1fr)' }}>
        {education.map((item, i) => {
          const hasSubjects = item.subjects && item.subjects.length > 0;
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <FxCard tilt={3} sx={{ p: { xs: 3, md: 4 } }}>
                <Box sx={{ display: 'grid', gap: { xs: 3, md: 5 }, alignItems: 'center', gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: hasSubjects ? 'minmax(0, 5fr) minmax(0, 7fr)' : 'minmax(0, 1fr)' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 2.5 }, minWidth: 0 }}>
                    <Logo src={item.logo} name={item.place || item.title} size={68} />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography variant="h5" component="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, lineHeight: 1.25 }}>
                        {item.title}
                      </Typography>
                      {item.place && <Typography sx={{ color: 'accent', fontWeight: 700, mt: 0.5 }}>{item.place}</Typography>}
                      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: 1.5, rowGap: 0.75, mt: 1 }}>
                        <Mono>{item.period}</Mono>
                        {item.note && <Pill>{item.note}</Pill>}
                      </Box>
                    </Box>
                  </Box>
                  {hasSubjects && (
                    <Box>
                      <Mono sx={{ display: 'block', mb: 1.25 }}>Subjects</Mono>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {item.subjects.map((sub) => (
                          <Pill key={sub}>{sub}</Pill>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              </FxCard>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}
