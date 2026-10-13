'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { alpha } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import DescriptionIcon from '@mui/icons-material/Description';

import { FONTS, lerpHex } from '@/theme/tokens';
import { profile } from '@/data/portfolio';
import { Section, SectionHeading, Reveal, FxCard, GlowButton, Magnetic, SplitText, Mono, withBase } from './ui';

const LINKS = [
  { icon: EmailIcon, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: PhoneIcon, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: LinkedInIcon, label: 'LinkedIn', value: profile.linkedin.replace('https://', ''), href: profile.linkedin, external: true },
  { icon: GitHubIcon, label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, external: true },
  { icon: DescriptionIcon, label: 'Resume', value: 'Download as PDF', href: withBase(profile.resume), download: true },
  { icon: PlaceIcon, label: 'Location', value: profile.location },
];

export default function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [toast, setToast] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Write at least a short sentence.';
    setErrors(next);
    if (Object.keys(next).length) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setToast(true);
  };

  return (
    <Section id="contact">
      <SectionHeading title="Contact and links" subtitle="For a role, a freelance project or just to talk about distributed systems, send me a message." />

      <Reveal>
        <Box
          sx={(t) => ({
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '28px',
            p: { xs: 4, md: 7 },
            mb: 3,
            color: '#fff',
            background: `linear-gradient(135deg, ${t.palette.primary.main}, ${lerpHex(t.palette.primary.main, '#2a1fa8', 0.55)})`,
            boxShadow: `0 40px 90px ${alpha(t.palette.primary.main, 0.4)}`,
          })}
        >
          <Box aria-hidden sx={{ position: 'absolute', width: 420, height: 420, right: -120, top: -180, borderRadius: '50%', border: '2px solid rgba(255,255,255,.22)', animation: 'spin-slow 36s linear infinite' }} />
          <Box aria-hidden sx={{ position: 'absolute', width: 220, height: 220, right: 60, bottom: -110, borderRadius: '50%', bgcolor: 'rgba(255,255,255,.1)' }} />
          <Typography variant="h3" component="p" sx={{ position: 'relative', fontSize: { xs: '2.2rem', md: '3.6rem' }, maxWidth: 720, lineHeight: 1.08 }}>
            <SplitText text="Let us build something worth shipping." />
          </Typography>
          <Box sx={{ position: 'relative', mt: 4 }}>
            <Magnetic>
              <GlowButton href={`mailto:${profile.email}`} variant="light" sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, overflowWrap: 'anywhere' }}>
                {profile.email} →
              </GlowButton>
            </Magnetic>
          </Box>
        </Box>
      </Reveal>

      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', md: 'minmax(0,5fr) minmax(0,6fr)' }, alignItems: 'start' }}>
        <Box sx={{ display: 'grid', gap: 1.5 }}>
          {LINKS.map((l, i) => {
            const Icon = l.icon;
            const inner = (
              <FxCard tilt={3} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={(t) => ({ width: 44, height: 44, borderRadius: '12px', flexShrink: 0, display: 'grid', placeItems: 'center', color: 'accent', background: alpha(t.palette.primary.main, 0.14) })}>
                  <Icon />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Mono>{l.label}</Mono>
                  <Typography sx={{ fontWeight: 700, overflowWrap: 'anywhere', lineHeight: 1.4 }}>{l.value}</Typography>
                </Box>
                {l.href && (
                  <Box component="span" aria-hidden sx={{ ml: 'auto', color: 'accent' }}>
                    ↗
                  </Box>
                )}
              </FxCard>
            );
            return (
              <Reveal key={l.label} delay={i * 0.05}>
                {l.href ? (
                  <Box component="a" href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...(l.download ? { download: true } : {})} sx={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                    {inner}
                  </Box>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </Box>

        <Reveal delay={0.1}>
          <FxCard tilt={2} sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h5" component="h3" sx={{ fontSize: '1.5rem', mb: 0.5 }}>
              Send a message
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              This opens your email app with the message filled in.
            </Typography>
            <Box component="form" noValidate onSubmit={submit} sx={{ display: 'grid', gap: 2.5 }}>
              <TextField label="Your name" value={form.name} onChange={set('name')} error={!!errors.name} helperText={errors.name} fullWidth required />
              <TextField label="Your email" type="email" value={form.email} onChange={set('email')} error={!!errors.email} helperText={errors.email} fullWidth required />
              <TextField label="Message" value={form.message} onChange={set('message')} error={!!errors.message} helperText={errors.message} fullWidth required multiline minRows={5} />
              <Box>
                <GlowButton type="submit">Send message →</GlowButton>
              </Box>
            </Box>
          </FxCard>
        </Reveal>
      </Box>

      <Snackbar open={toast} autoHideDuration={5000} onClose={() => setToast(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled" onClose={() => setToast(false)}>
          Opening your email app.
        </Alert>
      </Snackbar>
    </Section>
  );
}
