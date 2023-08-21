import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { styled } from 'styled-components';

const SocialLink = styled.a`
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  margin: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

interface SocialMediaIconProps {
  href: string;
  size: number;
  platform: string;
  margin?: string;
  color?: string;
}

const SocialMediaIcon = ({
  href,
  size,
  platform,
  margin,
  color,
}: SocialMediaIconProps) => {
  return (
    <SocialLink
      href={href}
      target="_blank"
      style={{ margin: margin ? margin : 0 }}
    >
      {platform === 'linkedin' && (
        <FaLinkedin size={size} color={color ? color : 'black'} />
      )}
      {platform === 'github' && (
        <FaGithub size={size} color={color ? color : 'black'} />
      )}
      {platform === 'instagram' && (
        <FaInstagram size={size} color={color ? color : 'black'} />
      )}
      {platform === 'twitter' && (
        <FaTwitter size={size} color={color ? color : 'black'} />
      )}
      {platform === 'facebook' && (
        <FaFacebook size={size} color={color ? color : 'black'} />
      )}
    </SocialLink>
  );
};

export default SocialMediaIcon;
