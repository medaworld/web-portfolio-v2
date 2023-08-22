'use client';

import BlurAnimationCanvas from '../Animation/BlurAnimation';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <BlurAnimationCanvas />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
