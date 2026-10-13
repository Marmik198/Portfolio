'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const blob = (size, top, left, anim, dur, op) => (t) => ({
  position: 'absolute',
  width: size,
  height: size,
  top,
  left,
  borderRadius: '50%',
  background: `radial-gradient(circle at 40% 40%, ${alpha(t.palette.primary.main, t.palette.mode === 'dark' ? op : op * 0.8)}, transparent 66%)`,
  filter: 'blur(60px)',
  animation: `${anim} ${dur}s ease-in-out infinite`,
  willChange: 'transform',
});

/** Primary-tinted mesh, dot grid, drifting shapes and a pointer spotlight. */
export default function Backdrop() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, -420]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -220]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -620]);
  const px = useSpring(useMotionValue(-500), { stiffness: 80, damping: 25 });
  const py = useSpring(useMotionValue(-500), { stiffness: 80, damping: 25 });

  React.useEffect(() => {
    const move = (e) => {
      px.set(e.clientX - 300);
      py.set(e.clientY - 300);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [px, py]);

  return (
    <Box aria-hidden sx={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <Box sx={blob('55vmax', '-22%', '-14%', 'drift-a', 28, 0.5)} />
      <Box sx={blob('46vmax', '28%', '60%', 'drift-b', 34, 0.38)} />
      <Box sx={blob('42vmax', '70%', '-12%', 'drift-c', 30, 0.34)} />

      <Box
        sx={(t) => ({
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${alpha(t.palette.primary.main, t.palette.mode === 'dark' ? 0.35 : 0.3)} 1px, transparent 1px)`,
          backgroundSize: '34px 34px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 75%)',
          opacity: 0.55,
        })}
      />

      {/* drifting shapes, each at its own parallax rate */}
      <Box component={motion.div} style={{ y: y1 }} sx={{ position: 'absolute', top: '58%', left: '2%' }}>
        <Box sx={(t) => ({ width: 90, height: 90, borderRadius: '50%', border: `2px solid ${alpha(t.palette.primary.main, 0.35)}`, animation: 'float-y 9s ease-in-out infinite' })} />
      </Box>
      <Box component={motion.div} style={{ y: y2 }} sx={{ position: 'absolute', top: '42%', right: '7%' }}>
        <Box sx={(t) => ({ width: 64, height: 64, borderRadius: '16px', border: `2px solid ${alpha(t.palette.primary.main, 0.3)}`, animation: 'spin-slow 40s linear infinite' })} />
      </Box>
      <Box component={motion.div} style={{ y: y3 }} sx={{ position: 'absolute', top: '70%', left: '12%' }}>
        <Box sx={(t) => ({ width: 18, height: 18, borderRadius: '50%', bgcolor: alpha(t.palette.primary.main, 0.55), boxShadow: `0 0 30px ${alpha(t.palette.primary.main, 0.6)}`, animation: 'float-y 7s ease-in-out infinite' })} />
      </Box>

      <Box
        component={motion.div}
        style={{ x: px, y: py }}
        sx={(t) => ({ position: 'absolute', top: 0, left: 0, width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(t.palette.primary.main, 0.16)}, transparent 65%)` })}
      />
    </Box>
  );
}
