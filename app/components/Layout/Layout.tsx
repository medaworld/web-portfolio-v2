'use client';

import BlurAnimationCanvas from '../Animation/BlurAnimation';
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
    </>
  );
};

export default Layout;
