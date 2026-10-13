'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { education } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, Mono, Pill, Logo } from './ui';

// Optional lists an education entry can have, shown in this order. Each one only appears when it has items.
// For anything else, add `more: [{ label: 'Languages', items: ['English', 'Hindi'] }]` to the entry.
const GROUPS = [
  ['subjects', 'Subjects'],
  ['coCurricular', 'Co-curricular'],
  ['competitiveExams', 'Competitive exams'],
];

const divider = (t) => `1px solid ${t.palette.divider}`;

/** A labelled list: the label sits on a hairline, items flow into columns as the width allows. */
function ItemGroup({ label, items }) {
  const wide = items.length > 6; // long lists use the full width, short ones can sit side by side
  return (
    <Box sx={{ gridColumn: { md: wide ? '1 / -1' : 'auto' }, minWidth: 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.75 }}>
        <Mono>{label}</Mono>
        <Box aria-hidden sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
      </Box>
      <Box
        component="ul"
        sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 230px), 1fr))', columnGap: 3, rowGap: 1.25 }}
      >
        {items.map((x) => (
          <Box component="li" key={x} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
            <Box aria-hidden sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main', mt: '0.62em', flexShrink: 0 }} />
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.5 }}>{x}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" subtitle="Where I studied, and how it went." />
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'minmax(0, 1fr)' }}>
        {education.map((item, i) => {
          const groups = [
            ...GROUPS.map(([key, label]) => ({ label, items: item[key] })),
            ...(item.more || []),
          ].filter((g) => g.items && g.items.length > 0);

          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <FxCard tilt={3} sx={{ p: { xs: 3, md: 4 } }}>
                {/* Header: logo, degree, institution, years. The score sits on the right on wide screens. */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 2.5 } }}>
                  <Logo src={item.logo} name={item.place || item.title} size={68} />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h5" component="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, lineHeight: 1.25 }}>
                      {item.title}
                    </Typography>
                    {item.place && <Typography sx={{ color: 'accent', fontWeight: 700, mt: 0.5 }}>{item.place}</Typography>}
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: 1.5, rowGap: 0.75, mt: 1 }}>
                      <Mono>{item.period}</Mono>
                      {item.note && <Pill sx={{ display: { xs: 'inline-flex', md: 'none' } }}>{item.note}</Pill>}
                    </Box>
                  </Box>
                  {item.note && (
                    <Pill sx={{ display: { xs: 'none', md: 'inline-flex' }, flexShrink: 0, alignSelf: 'flex-start', fontSize: '1rem', px: 2.25, py: 0.75 }}>{item.note}</Pill>
                  )}
                </Box>

                {/* Details: subjects, co-curricular, competitive exams, extras */}
                {groups.length > 0 && (
                  <Box
                    sx={{
                      mt: { xs: 3, md: 3.5 },
                      pt: { xs: 3, md: 3.5 },
                      borderTop: divider,
                      display: 'grid',
                      rowGap: { xs: 3, md: 3.5 },
                      columnGap: { md: 6 },
                      gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' },
                    }}
                  >
                    {groups.map((g) => (
                      <ItemGroup key={g.label} label={g.label} items={g.items} />
                    ))}
                  </Box>
                )}
              </FxCard>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}