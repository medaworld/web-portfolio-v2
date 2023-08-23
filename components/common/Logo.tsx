import { styled } from 'styled-components';
import Image from 'next/image';

export const LogoContainer = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

interface LogoPropTypes {
  src: string;
  size?: number;
  color?: string;
}

const Logo = ({ src, size }: LogoPropTypes) => {
  return (
    <LogoContainer>
      <Image src={src} width={size} height={size} alt={'Logo'} />
    </LogoContainer>
  );
};

export default Logo;
