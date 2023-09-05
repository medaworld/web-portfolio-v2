export const NavLinkList = [
  { title: 'About', path: 'about' },
  { title: 'Work', path: 'work' },
  { title: 'Contact', path: 'contact' },
];

export const SocialMediaList = [
  { platform: 'github', url: 'https://github.com/medaworld' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/briansuruki' },
];

export const ProjectsListData = [
  {
    title: 'Blockchain.com Explorer',
    description:
      'The Blockchain.com Explorer offers in-depth insights into Bitcoin, Ethereum, and Bitcoin Cash transactions, addresses, and blocks. With its intuitive interface, users can easily track and visualize blockchain activities.',
    techStack: [
      'Next.js',
      'React',
      'Styled Components',
      'TypeScript',
      'Chart.js',
    ],
    links: {
      github: null,
      live: 'https://www.blockchain.com/explorer',
    },
    image: '/images/screenshots/blockchainScreenshot.webp',
    overline: 'Work Experience',
    load: false,
    login: null,
  },
  {
    title: 'cnnct Social',
    description:
      'cnnct is a mockup social media platform designed for a seamless user experience. Built with tools like React and Redux on the frontend and tools like Node, Express, GraphQL, and Websocket on the backend, it offers quick sign-ins, interactive sharing, and responsive feedback.',
    techStack: [
      'React',
      'Redux',
      'Tailwind',
      'Node.js',
      'Express',
      'GraphQL',
      'Socket.io',
      'MongoDB',
      'JWT',
      'Cloudinary',
      'TypeScript',
    ],
    links: {
      github: 'https://github.com/medaworld/cnnct-social-media',
      live: 'https://cnnct-social.vercel.app/',
    },
    image: '/images/screenshots/cnnctScreenshot.webp',
    overline: 'Project',
    load: true,
    login: {
      username: 'usera',
      password: 'usera',
      link: 'https://cnnct-social.vercel.app/',
    },
  },
  {
    title: 'Luminae Skincare',
    description:
      "Luminae Skincare is a mockup ecommerce platform crafted to elegantly display a skincare brand's offerings. The project aimed to provide a seamless and aesthetically pleasing experience for users, ensuring both customers and administrators found it intuitive and user-friendly.",
    techStack: ['Node.js', 'Express', 'MongoDB', 'Bootstrap', 'EJS', 'Stripe'],
    links: {
      github: 'https://github.com/medaworld/luminae-ecommerce-site',
      live: 'https://luminae-ecom.onrender.com/',
    },
    image: '/images/screenshots/luminaeScreenshot.webp',
    overline: 'Project',
    load: true,
    login: {
      username: 'admin@luminae.com',
      password: 'admin',
      link: 'https://luminae-ecom.onrender.com/login',
    },
  },
  {
    title: 'Music Profile',
    description:
      "Developed using Next.js, this Music Profile serves as a centralized space where fans can access different facets of the artist's world. Central to its design is a media player, streamlined by the React Context API for a seamless auditory journey. An interactive carousel beautifully presents album art, each linked to streaming platforms and equipped with instant play capabilities. And to keep fans updated, a dynamic news feed effortlessly brings in the latest from a linked WordPress blog.",
    techStack: [
      'Next.js',
      'React',
      'Styled Components',
      'TypeScript',
      'React Player',
    ],
    links: {
      github: 'https://github.com/medaworld/music-profile-site',
      live: 'https://music-profile-site.vercel.app/',
    },
    image: '/images/screenshots/musicProfileScreenshot.webp',
    overline: 'Project',
    load: true,
    login: null,
  },
  {
    title: 'Photo Portfolio',
    description:
      "Built with Next.js and Firebase, this photo portfolio offers a robust content management system, allowing for seamless uploads, edits, and organization of images into albums and collections. Leveraging Firebase's Firestore for data and Firebase Storage for image hosting ensures efficient and secure handling.",
    techStack: [
      'Next.js',
      'Firebase',
      'TypeScript',
      'Styled Components',
      'EmailJS',
    ],
    links: {
      github: 'https://github.com/medaworld/photo-portfolio-site-v2',
      live: 'https://photo-portfolio-site-v2.vercel.app/',
    },
    image: '/images/screenshots/photoPortfolioScreenshot.webp',
    overline: 'Project',
    load: false,
    login: {
      username: 'admin@photo.com',
      password: 'admin1',
      link: 'https://photo-portfolio-site-v2.vercel.app/secure/admin',
    },
  },
];

export const email = 'briansuruki@gmail.com';
