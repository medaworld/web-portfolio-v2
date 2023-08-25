import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import Layout from '../components/Layout/Layout';
import { roboto } from '@/styles/fonts';
import { GlobalStyles } from '@/styles/Globals';
import { ThemeStateContextProvider } from '@/context/themeState/ThemeStateProvider';

export const metadata: Metadata = {
  title: 'Brian Suruki - Portfolio',
  description:
    'Welcome to the portfolio of Brian Suruki. Dive into a curated collection of my works, projects, and accomplishments in the web domain. ',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeStateContextProvider>
          <GlobalStyles />
          <body className={roboto.className}>
            <Layout>{children}</Layout>
          </body>
        </ThemeStateContextProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
