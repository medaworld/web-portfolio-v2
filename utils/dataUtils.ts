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
    title: 'Cnnct Social',
    description:
      'Cnnct Social is a mockup platform, merging React, Redux, Node, and Express for a smooth social media experience. It emphasizes dynamic content sharing and real-time messaging with the integration of GraphQL, Websocket, and Socket.IO, setting Cnnct as a model for social platforms.',
    techStack: [
      'React',
      'Redux',
      'Tailwind',
      'Node.js',
      'Express',
      'GraphQL',
      'Socket.io',
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
      "Luminae Skincare, built with Node and Express, showcases a skincare brand's premium offerings. Featuring an organized cart, Stripe integration for transactions, and admin tools for product management, it ensures a sleek experience for users and admins.",
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
      'The Music Profile, built with Next.js & React, enables artists to showcase their presence. It features a built-in player via React Context & React-Player, a carousel for album art linking to streaming platforms, and integrates with WordPress public API for fresh news updates.',
    techStack: [
      'Next.js',
      'React',
      'Styled Components',
      'TypeScript',
      'React-Player',
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
      "The Photo Portfolio, made with Next.js & Firebase, simplifies photographers work displays. It offers strong content management, Firebase's Firestore for data, and Firebase Storage for uploads. With next-auth & Firebase-auth, it ensures secure admin access.",
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
