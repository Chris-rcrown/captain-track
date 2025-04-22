// src/data/navData.ts

// Define interface for navigation items
export interface NavItem {
  title: string;
  link: string;
}

export const navData: NavItem[] = [
  {
    title: 'Company',
    link: '/company',
  },
  {
    title: 'Earn with CaptainTrack',
    link: '/earn',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Support',
    link: '/support',
  },
  {
    title: 'Register',
    link: '/register',
  },
];
