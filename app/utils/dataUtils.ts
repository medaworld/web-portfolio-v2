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
    image: '/images/screenshots/blockchainScreenshot.png',
    overline: 'Work Experience',
    load: false,
    login: null,
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
    image: '/images/screenshots/luminaeScreenshot.png',
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
      "Crafted with Next.js, this Music Profile offers enthusiasts a unified platform to immerse in an artist's journey—intuitively exploring social media links, engaging with tracks via an integrated media player, viewing videos, and staying updated on upcoming events and news.",
    techStack: ['Next.js', 'React', 'Styled Components', 'TypeScript'],
    links: {
      github: 'https://github.com/medaworld/music-profile-site',
      live: 'https://music-profile-site.vercel.app/',
    },
    image: '/images/screenshots/musicProfileScreenshot.png',
    overline: 'Project',
    load: true,
    login: null,
  },
  {
    title: 'Photo Portfolio',
    description:
      "Built with Next.js and Firebase, this photo portfolio offers a robust content management system, allowing for seamless uploads, edits, and organization of images into albums and collections. Leveraging Firebase's Firestore for data and Firebase Storage for image hosting ensures efficient and secure handling.",
    techStack: ['Next.js', 'Firebase', 'Styled Components', 'EmailJS'],
    links: {
      github: 'https://github.com/medaworld/photo-portfolio-site-v2',
      live: 'https://photo-portfolio-site-v2.vercel.app/',
    },
    image: '/images/screenshots/photoPortfolioScreenshot.png',
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
