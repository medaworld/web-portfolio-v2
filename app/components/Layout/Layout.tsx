'use client';

import { useState } from 'react';
import BlurAnimationCanvas from '../Animation/BlurAnimation';
import Email from './Email';
import Footer from './Footer';
import Navbar from './Navbar';
import Loader from '../common/Loader';
import Social from './Social';
import { usePathname } from 'next/navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <>
      <BlurAnimationCanvas />
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar isHome={isHome} />
          <Email isHome={isHome} />
          <Social isHome={isHome} />
          <div id="content">
            {children}
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
