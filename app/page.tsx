'use client';

import { styled } from 'styled-components';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

const MainContainer = styled.main`
  min-height: 100vh;
  max-width: 1600px;
  width: 100%;
  margin: 0px auto;
  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
`;

export default function Home() {
  return (
    <MainContainer>
      <Hero />
      <About />
    </MainContainer>
  );
}
