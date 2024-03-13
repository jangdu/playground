export interface NavLink {
  text: string;

  href: string;
}

export const navLinkList: NavLink[] = [
  {
    text: 'Home',
    href: '/home',
  },
  {
    text: 'Products',
    href: '/products',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Playground',
    href: '/playground',
  },
];
