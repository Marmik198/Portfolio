'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** A soft ring that trails the pointer and swells over links and buttons. Desktop only. */
export default function Cursor() {
  const [enabled, setEnabled] = React.useState(false);
  const [hot, setHot] = React.useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 38, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 420, damping: 38, mass: 0.4 });

  React.useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHot(!!e.target.closest?.('a, button, [role="tab"], input, textarea'));
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <Box
      component={motion.div}
      aria-hidden
      style={{ x: sx, y: sy }}
      sx={{ position: 'fixed', top: 0, left: 0, zIndex: 2000, pointerEvents: 'none' }}
    >
      <Box
        sx={(t) => ({
          width: hot ? 56 : 30,
          height: hot ? 56 : 30,
          ml: hot ? '-28px' : '-15px',
          mt: hot ? '-28px' : '-15px',
          borderRadius: '50%',
          border: `1.5px solid ${alpha(t.palette.primary.main, hot ? 0.9 : 0.6)}`,
          background: hot ? alpha(t.palette.primary.main, 0.14) : 'transparent',
          transition: 'width .3s, height .3s, margin .3s, background .3s, border-color .3s',
        })}
      />
    </Box>
  );
}
