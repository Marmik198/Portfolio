'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { certifications } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, IconBox, Mono } from './ui';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading title="Certificates" subtitle="Courses and credentials I have completed." />
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' } }}>
        {certifications.map((item, i) => (
          <Reveal key={`${item.title}-${i}`} delay={(i % 3) * 0.08} sx={{ height: '100%' }}>
            <FxCard tilt={5} sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 2.5 }}>
                <IconBox name="Verified" />
                <Mono>{item.year}</Mono>
              </Box>
              <Typography variant="h5" component="h3" sx={{ fontSize: '1.4rem' }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: 'accent', fontWeight: 700, mt: 0.75 }}>{item.issuer}</Typography>
              {item.note && (
                <Typography color="text.secondary" sx={{ mt: 1.25 }}>
                  {item.note}
                </Typography>
              )}
            </FxCard>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
