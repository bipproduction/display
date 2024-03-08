// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import 'react-simple-toasts/dist/theme/dark.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'Display - Bali Interaktif Perkasa',
  description: 'Display raven stone, ninox, webcam and noc',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}