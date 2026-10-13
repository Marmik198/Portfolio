'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { FONTS } from '@/theme/tokens';
import { about } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, IconBox, Mono } from './ui';

// Splits the summary into a one-sentence headline plus the rest, so a long summary stays easy to scan.
function splitSummary(text) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s+|$)/g) || [text];
  return { lead: sentences[0].trim(), rest: sentences.slice(1).join('').trim() };
}

const divider = (t) => `1px solid ${t.palette.divider}`;

export default function About() {
  const { lead, rest } = splitSummary(about.summary);
  const stats = about.stats || [];

  return (
    <Section id="about">
      <SectionHeading title="About me" subtitle="A full-stack engineer who enjoys problems where scale, usability and correctness all matter at once." />

      <Box sx={{ display: 'grid', gap: { xs: 2, md: 2.5 }, gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(12, minmax(0, 1fr))' } }}>
        {/* 1. Professional summary: a headline sentence, then the detail in a calmer style */}
        <Reveal sx={{ gridColumn: { md: stats.length ? 'span 7' : '1 / -1' }, height: '100%' }}>
          <FxCard tilt={2} sx={{ p: { xs: 2.75, md: 4 }, height: '100%' }}>
            <Mono sx={{ display: 'block', mb: 1.5 }}>Professional summary</Mono>
            <Typography sx={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.45rem' }, lineHeight: 1.4, letterSpacing: '-0.015em' }}>
              {lead}
            </Typography>
            {rest && (
              <Typography color="text.secondary" sx={{ mt: 2.25, fontSize: { xs: '1rem', md: '1.05rem' }, lineHeight: 1.75 }}>
                {rest}
              </Typography>
            )}
          </FxCard>
        </Reveal>

        {/* 2. Key numbers, two across (hidden if the data has no `stats`) */}
        {stats.length > 0 && (
          <Reveal delay={0.08} sx={{ gridColumn: { md: 'span 5' }, height: '100%' }}>
            <Box sx={{ display: 'grid', gap: { xs: 1.5, md: 2 }, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', height: '100%' }}>
              {stats.map((s) => (
                <FxCard key={s.label} tilt={6} sx={{ p: { xs: 2, md: 2.75 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography sx={{ fontFamily: FONTS.display, fontWeight: 800, fontSize: { xs: '1.75rem', md: '2.4rem' }, lineHeight: 1, letterSpacing: '-0.03em', color: 'accent' }}>
                    {s.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.4 }}>
                    {s.label}
                  </Typography>
                </FxCard>
              ))}
            </Box>
          </Reveal>
        )}

        {/* 3. Highlights checklist */}
        <Reveal sx={{ gridColumn: { md: 'span 7' }, height: '100%' }}>
          <FxCard tilt={2} sx={{ p: { xs: 2.75, md: 4 }, height: '100%' }}>
            <Mono sx={{ display: 'block', mb: 2 }}>Highlights</Mono>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 1.75 }}>
              {about.points.map((p) => (
                <Box component="li" key={p} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                  <CheckCircleOutlineIcon sx={{ color: 'accent', fontSize: '1.35rem', mt: '2px', flexShrink: 0 }} />
                  <Typography>{p}</Typography>
                </Box>
              ))}
            </Box>
          </FxCard>
        </Reveal>

        {/* 4. At a glance: label and value on one line, so it reads well on narrow screens */}
        <Reveal delay={0.08} sx={{ gridColumn: { md: 'span 5' }, height: '100%' }}>
          <FxCard tilt={3} sx={{ p: { xs: 2.75, md: 4 }, height: '100%' }}>
            <Mono sx={{ display: 'block', mb: 1 }}>At a glance</Mono>
            <Box>
              {about.facts.map((f, i) => (
                <Box key={f.label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 2, py: 1.5, borderTop: i === 0 ? 'none' : divider }}>
                  <Mono>{f.label}</Mono>
                  <Typography sx={{ fontWeight: 700, textAlign: 'right', lineHeight: 1.35 }}>{f.value}</Typography>
                </Box>
              ))}
            </Box>
          </FxCard>
        </Reveal>

        {/* 5. Focus areas: four compact tiles */}
        <Box sx={{ gridColumn: { md: '1 / -1' }, display: 'grid', gap: { xs: 2, md: 2.5 }, gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' } }}>
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