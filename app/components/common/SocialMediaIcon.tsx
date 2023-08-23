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
`;

interface SocialMediaIconProps {
  href: string;
  size: number;
  platform: string;
  margin?: string;
}

const SocialMediaIcon = ({
  href,
  size,
  platform,
  margin,
}: SocialMediaIconProps) => {
  return (
    <SocialLink
      href={href}
      target="_blank"
      style={{ margin: margin ? margin : 0 }}
    >
      {platform === 'linkedin' && <FaLinkedin size={size} />}
      {platform === 'github' && <FaGithub size={size} />}
      {platform === 'instagram' && <FaInstagram size={size} />}
      {platform === 'twitter' && <FaTwitter size={size} />}
      {platform === 'facebook' && <FaFacebook size={size} />}
    </SocialLink>
  );
};

export default SocialMediaIcon;
