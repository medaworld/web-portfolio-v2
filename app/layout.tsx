import './globals.css';
import type { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';
import Layout from './components/Layout/Layout';
import { roboto } from './fonts';

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
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
