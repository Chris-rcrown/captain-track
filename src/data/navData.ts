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
    title: 'Drive',
    link: '/driver',
  },
  {
    title: 'Add Shop',
    link: '/merchant',
  },
  // {
  //   title: 'Contact Us',
  //   link: '/contact-us',
  // },
  {
    title: 'FAQ',
    link: '/faq',
  },
  // {
  //   title: 'Blog',
  //   link: '/blog',
  // },
  // {
  //   title: 'Support',
  //   link: '/support',
  // },
  
];
