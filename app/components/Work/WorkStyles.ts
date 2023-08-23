import { styled } from 'styled-components';

export const ProjectsGrid = styled.ul`
  a {
    position: relative;
  }
`;

export const Project = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }

    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
`;

export const ProjectContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  z-index: 1;

  @media (max-width: 1080px) {
    grid-column: 1 / 9;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    padding: 0 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 25px 20px;
  }
`;

export const ProjectOverline = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #00aadeff;
`;

export const ProjectTitle = styled.h3`
  font-size: clamp(24px, 5vw, 28px);

  a {
    padding: 5px;
    border-radius: 5px;
    background: linear-gradient(
        to bottom,
        transparent,
        rgba(250, 250, 250, 0.2)
      )
      rgba(214, 219, 220, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 768px) {
    margin: 0 0 20px;
  }

  @media (max-width: 768px) {
    a {
      position: static;
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

export const ProjectDescription = styled.div`
  position: relative;
  z-index: 1;
  padding: 25px;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(to bottom, transparent, rgba(250, 250, 250, 0.2))
    rgba(214, 219, 220, 0.5);

  @media (max-width: 768px) {
    padding: 20px 0;
    background-color: transparent;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }
`;

export const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  margin: 25px 0 10px;
  padding: 0;
  list-style: none;

  li {
    color: #333;
    padding: 3px;
    border-radius: 5px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: linear-gradient(
        to bottom,
        transparent,
        rgba(250, 250, 250, 0.2)
      )
      rgba(214, 219, 220, 0.5);
    margin: 0 20px 5px 0;
    font-size: 14px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    margin: 10px 0;

    li {
      margin: 0 10px 5px 0;
    }
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;

  a {
    padding: 10px;
    transition: all 0.2s ease;
    align-items: center;

    &.external {
      svg {
        width: 22px;
        height: 22px;
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      color: #00aadeff;
    }
  }

  .cta {
    margin: 10px;
  }
`;

export const ProjectLogin = styled.div`
  margin-top: 15px;

  p {
    font-size: 14px;
  }

  a {
    background-color: #00aadeaa;
    color: white;
    font-weight: 600;
    padding: 5px 10px;
    line-height: 40px;
    font-size: 14px;
    border-radius: 5px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #00aadeff;
    }
  }
`;

export const ProjectImage = styled.div`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  border-radius: 10px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  a {
    background-color: #00aade20;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      transition: all 0.3s ease;
      background-color: #58435350;
      mix-blend-mode: screen;
    }
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;

  .img {
    object-fit: contain;
    width: 100%;
    position: relative !important;
    height: unset !important;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
  }

  @media (max-width: 768px) {
    .img {
      object-fit: cover;
      object-position: center;
      width: auto;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(50%);
    }
  }
`;
