'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { profile } from '@/data/portfolio';
import { Mono, line } from './ui';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 5, borderTop: line, position: 'relative' }}>
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: { xs: 3, md: 5 }, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Mono>
          © {new Date().getFullYear()} {profile.name}
        </Mono>
        <Mono>Built with Next.js and Material UI</Mono>
      </Container>
    </Box>
  );
}
