import { styled } from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 768px) {
    display: block;
    align-items: center;
  }
`;

export const ContentText = styled.div`
  z-index: 1;
`;

export const ContentParagraph = styled.div`
  p {
    margin: 0px 0px 15px;
    font-size: 20px;
  }
`;

export const ContentImage = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.5;
  }
`;

export const TechIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 20px 0px;
  margin-top: 20px;
  flex-wrap: wrap;

  svg {
    z-index: 1;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      transform: translateY(-3px);
      color: ${(props) => props.theme.color};
    }
  }
`;

export const TechTitle = styled.div`
  font-size: 32px;
  text-align: center;
  margin-top: 3rem;
  height: 32px;
  min-width: 100%;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.children ? 1 : 0)};
  z-index: 1;
`;
