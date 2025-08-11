'use client';

import { useState } from 'react';
import BlurAnimationCanvas from '../Animation/BlurAnimation';
import Email from './Email';
import Footer from './Footer';
import Navbar from './Navbar';
import Loader from '../common/Loader';
import Social from './Social';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shouldForwardProp from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <BlurAnimationCanvas />
        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <ToastContainer />
            {/* <Navbar isHome={isHome} /> */}
            <Email isHome={isHome} />
            <Social isHome={isHome} />
            <div id="content">
              {children}
              {/* <Footer /> */}
            </div>
          </>
        )}
      </StyleSheetManager>
    </>
  );
};

export default Layout;
