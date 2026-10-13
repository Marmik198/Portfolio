'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import { lerpHex } from '@/theme/tokens';
import { freelancing } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, IconBox, Mono, GlowButton, Magnetic } from './ui';

export default function Freelancing() {
  return (
    <Section id="freelancing">
      <SectionHeading title="Freelancing" subtitle={freelancing.intro} />

      <Reveal sx={{ mb: 5 }}>
        <Box sx={(t) => ({ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 0.9, borderRadius: 999, border: `1px solid ${alpha(t.palette.primary.main, 0.4)}`, background: alpha(t.palette.primary.main, 0.1) })}>
          <Box sx={{ position: 'relative', width: 9, height: 9 }}>
            <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', bgcolor: 'primary.main', animation: 'pulse-ring 2s ease-out infinite' }} />
            <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', bgcolor: 'primary.main' }} />
          </Box>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {freelancing.availability}
          </Typography>
        </Box>
      </Reveal>

      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' } }}>
        {freelancing.services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08} sx={{ height: '100%' }}>
            <FxCard tilt={7} sx={{ p: 3, height: '100%' }}>
              <IconBox name={s.icon} />
              <Typography variant="h6" component="h3" sx={{ mt: 2.5, mb: 1, fontSize: '1.15rem' }}>
                {s.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {s.text}
              </Typography>
            </FxCard>
          </Reveal>
        ))}
      </Box>

      <Reveal sx={{ mt: 10 }}>
        <Box
          sx={(t) => ({
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '28px',
            p: { xs: 4, md: 7 },
            color: '#fff',
            background: `linear-gradient(135deg, ${t.palette.primary.main}, ${lerpHex(t.palette.primary.main, '#2a1fa8', 0.55)})`,
            boxShadow: `0 40px 90px ${alpha(t.palette.primary.main, 0.4)}`,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 4,
          })}
        >
          <Box aria-hidden sx={{ position: 'absolute', width: 340, height: 340, right: -80, top: -140, borderRadius: '50%', border: '2px solid rgba(255,255,255,.25)', animation: 'spin-slow 30s linear infinite' }} />
          <Box aria-hidden sx={{ position: 'absolute', width: 180, height: 180, right: 140, bottom: -90, borderRadius: '50%', bgcolor: 'rgba(255,255,255,.1)' }} />
          <Box sx={{ position: 'relative' }}>
            <Typography variant="h3" component="p" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 520 }}>
              Have a project in mind?
            </Typography>
            <Mono sx={{ color: 'rgba(255,255,255,.8)', display: 'block', mt: 1.5 }}>Tell me what you are building, your timeline and your budget.</Mono>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Magnetic>
              <GlowButton id="contact" variant="light">
                Start a conversation →
              </GlowButton>
            </Magnetic>
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
}
