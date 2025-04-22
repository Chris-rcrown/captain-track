// src/data/footerData.ts

// Type definitions for footer navigation and support items
export interface FooterNavItem {
  title: string;
  link: string;
}

export interface LocationItem {
  title: string;
  link: string;
}

export interface ContactSupportItem {
  phone?: string;
  email?: string;
  link: string;
}

export const footerNav: FooterNavItem[] = [
  { title: 'About', link: '/about' },
  { title: 'Career', link: '/career' },
  { title: 'FAQ', link: '/faq' },
  { title: 'User Policy', link: '/user-policy' },
  { title: 'Privacy Policy', link: '/privacy-policy' },
];

export const companyLocation: LocationItem[] = [
  {
    title: 'Lagos',
    link: 'https://www.google.com/maps/place/Lagos/@6.5480282,3.1191457,11z',
  },
  {
    title: 'Port Harcourt',
    link: 'https://www.google.com/maps/place/Port+Harcourt,+Rivers/@4.8173927,6.848896,12z',
  },
  {
    title: 'Abuja',
    link: 'https://www.google.com/maps/place/Abuja,+Federal+Capital+Territory/@9.0242468,7.3674659,12z',
  },
  {
    title: 'Ibadan',
    link: 'https://www.google.com/maps/place/Ibadan,+Oyo/@7.3869099,3.8226583,12z',
  },
  {
    title: 'Abia',
    link: 'https://www.google.com/maps/place/Abia/@5.4316198,6.9050737,9z',
  },
  {
    title: 'Benin',
    link: 'https://www.google.com/maps/place/Benin+City,+Edo/@6.332063,5.447489,11z',
  },
];

export const contactSupport: ContactSupportItem[] = [
  { phone: '+234792903032', link: '/phone' },
  { phone: '+234792903049', link: '/phone' },
  { email: 'info@CaptainTrack.com', link: 'mailto:info@CaptainTrack.com' },
];
