import type { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';
import Layout from './components/Layout/Layout';
import { roboto } from './fonts';
import { GlobalStyles } from './styles/Globals';
import { ThemeStateContextProvider } from './context/themeState/ThemeStateProvider';

export const metadata: Metadata = {
  title: 'Web Portfolio',
  description: 'Web portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <ThemeStateContextProvider>
            <GlobalStyles />
            <Layout>{children}</Layout>
          </ThemeStateContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
