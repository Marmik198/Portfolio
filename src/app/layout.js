import '@fontsource-variable/sora';
import '@fontsource-variable/manrope';
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/500.css';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata = {
  title: 'Marmik Shah | Senior Software Developer',
      description:
    'Marmik Shah, full-stack Senior Software Developer in Mumbai. Event-driven BFSI, loyalty and rewards platforms with React, Next.js and AI-assisted engineering.',
};

export const viewport = {
  themeColor: '#0A0A18',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
