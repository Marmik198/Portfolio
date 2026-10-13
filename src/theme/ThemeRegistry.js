'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FONTS, buildPalette } from './tokens';

export const ColorModeContext = React.createContext({ mode: 'dark', toggle: () => {} });

function buildTheme(mode) {
  const p = buildPalette(mode);
  const heading = { fontFamily: FONTS.display, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08 };
  return createTheme({
    palette: {
      mode,
      primary: { main: p.primary, contrastText: p.onPrimary },
      background: { default: p.bg, paper: p.surface },
      text: { primary: p.text, secondary: p.muted },
      divider: p.line,
      // custom keys, read as theme.palette.surface2 / theme.palette.accent
      surface2: p.surface2,
      accent: p.accent,
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: FONTS.body,
      h1: heading, h2: heading, h3: heading, h4: heading, h5: heading, h6: heading,
      button: { textTransform: 'none', fontWeight: 700, letterSpacing: 0 },
      body1: { fontSize: '1.0625rem', lineHeight: 1.75 },
      body2: { fontSize: '1rem', lineHeight: 1.7 },
    },
    components: {
      MuiCssBaseline: { styleOverrides: { body: { transition: 'background-color .5s ease, color .5s ease' } } },
      MuiFormHelperText: { styleOverrides: { root: { fontSize: '0.9rem' } } },
      MuiButton: { styleOverrides: { root: { borderRadius: 999, boxShadow: 'none' } } },
    },
  });
}

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = React.useState('dark');
  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem('portfolio-mode');
      if (saved === 'light' || saved === 'dark') setMode(saved);
    } catch (e) {}
  }, []);
  const ctx = React.useMemo(
    () => ({
      mode,
      toggle: () =>
        setMode((m) => {
          const next = m === 'dark' ? 'light' : 'dark';
          try {
            window.localStorage.setItem('portfolio-mode', next);
          } catch (e) {}
          return next;
        }),
    }),
    [mode]
  );
  const theme = React.useMemo(() => buildTheme(mode), [mode]);
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ColorModeContext.Provider value={ctx}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
