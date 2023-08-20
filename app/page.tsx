'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { styled } from 'styled-components';
import BlurAnimationCanvas from './components/Animation/BlurAnimation';

const MainContainer = styled.main`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 6rem; */
  min-height: 100vh;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  img {
    position: absolute;
  }
`;

export default function Home() {
  return (
    <MainContainer>
      <Center>
        <BlurAnimationCanvas />
        <Image
          className={styles.logo}
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </Center>
    </MainContainer>
  );
}
