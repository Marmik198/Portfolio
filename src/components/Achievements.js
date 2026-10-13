'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { achievements } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, IconBox, Mono, TextLink } from './ui';

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading title="Awards and Achievements" subtitle="Recognised every year at work, plus a first-place hackathon finish." />
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
        {achievements
          .sort((a, b) => a.period.localeCompare(b.period))
          .map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.08} sx={{ height: '100%' }}>
            <FxCard tilt={5} sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 2.5 }}>
                <IconBox name="EmojiEvents" />
                <Mono>{item.period}</Mono>
              </Box>
              <Typography variant="h5" component="h3" sx={{ fontSize: '1.4rem' }}>
                {item.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1.25, flexGrow: 1 }}>
                {item.note}
              </Typography>
              {item.href && (
                <TextLink href={item.href} external sx={{ alignSelf: 'flex-start', mt: 2 }}>
                  {item.linkLabel || 'View'}
                </TextLink>
              )}
            </FxCard>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
