'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import { FONTS } from '@/theme/tokens';
import { projects } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, Mono, TextLink, Logo } from './ui';

/** Abstract cover generated from the card index, tinted only with the primary colour. */
function Cover({ i }) {
  const spots = [
    [20, 30, 120],
    [75, 60, 90],
    [45, 85, 70],
  ];
  const [a, b, c] = spots.map(([x, y, r], k) => [(x + i * 17 * (k + 1)) % 100, (y + i * 23 * (k + 2)) % 100, r]);
  return (
    <Box
      aria-hidden
      sx={(t) => ({
        height: 120,
        position: 'relative',
        overflow: 'hidden',
        background: `radial-gradient(${a[2]}px circle at ${a[0]}% ${a[1]}%, ${alpha(t.palette.primary.main, 0.55)}, transparent 70%), radial-gradient(${b[2]}px circle at ${b[0]}% ${b[1]}%, ${alpha(t.palette.primary.main, 0.35)}, transparent 70%), radial-gradient(${c[2]}px circle at ${c[0]}% ${c[1]}%, ${alpha(t.palette.accent, 0.3)}, transparent 70%), ${t.palette.surface2}`,
        '&::after': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${alpha('#fff', 0.35)} 1px, transparent 1px)`, backgroundSize: '18px 18px', opacity: 0.35 },
      })}
    >
      <Typography sx={{ position: 'absolute', right: 16, bottom: 6, zIndex: 1, fontFamily: FONTS.display, fontWeight: 800, fontSize: '3.2rem', letterSpacing: '-0.05em', lineHeight: 1, color: 'rgba(255,255,255,.22)' }}>
        {String(i + 1).padStart(2, '0')}
      </Typography>
    </Box>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading title="Projects" subtitle="Personal and college projects, built to learn a stack end to end." />

      {/* Flex (not grid) so an incomplete last row is centred. Gap is 24px (spacing 3). */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.1} sx={{ width: { xs: '100%', md: 'calc((100% - 24px) / 2)', lg: 'calc((100% - 48px) / 3)' }, minWidth: 0 }}>
            <FxCard tilt={5} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Cover with the project logo overlapping its lower edge */}
              <Box sx={{ position: 'relative' }}>
                <Cover i={i} />
                <Logo src={p.logo} name={p.title} size={64} sx={{ position: 'absolute', left: { xs: 24, md: 28 }, bottom: -32, zIndex: 2, boxShadow: '0 10px 28px rgba(0,0,0,.28)' }} />
              </Box>
              <Box sx={{ px: { xs: 3, md: 3.5 }, pb: { xs: 3, md: 3.5 }, pt: 6, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography variant="h5" component="h3" sx={{ fontSize: { xs: '1.3rem', md: '1.4rem' }, mb: 1 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2.5 }}>
                  {p.description}
                </Typography>
                <Mono sx={{ mb: p.github || p.note ? 2 : 0 }}>{p.stack.join(' · ')}</Mono>
                {p.github ? (
                  <TextLink href={p.github} external sx={{ alignSelf: 'flex-start' }}>
                    View code
                  </TextLink>
                ) : p.note ? (
                  <Mono>{p.note}</Mono>
                ) : null}
              </Box>
            </FxCard>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
