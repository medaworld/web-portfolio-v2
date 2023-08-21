export type ProjectProps = {
  title: string;
  description: string;
  techStack: string[];
  links: {
    github: string | null;
    live: string | null;
  };
  image: string;
  load: boolean;
  login: null | { username: string; password: string; link: string };
};
