import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import Layout from './components/Layout/Layout';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '300',
});

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
