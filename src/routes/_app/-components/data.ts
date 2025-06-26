import {
  Bell,
  Calendar,
  Facebook,
  Github,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Paintbrush,
  Phone,
} from 'lucide-react';

type NavItem = {
  name: string;
  icon: React.ElementType;
  link: string;
};

type NavData = {
  nav: NavItem[];
};

export const DATA_LINK: NavData = {
  nav: [
    { name: 'Home', icon: Home, link: '/' },
    { name: 'CV', icon: Menu, link: '/about' },
    { name: 'Skills', icon: Bell, link: '/skills' },
    { name: 'Showcase', icon: Paintbrush, link: '/showcase' },
  ],
};

type DataProfile = {
  title: string;
  description: string;
  link?: string;
  icon: React.ElementType;
};

export const DATA_PROFILE: DataProfile[] = [
  {
    title: 'hilmarch03@gmail.com',
    description: 'Email',
    link: 'mailto:hilmarch03@gmail.com',
    icon: Mail,
  },
  {
    title: '08992732002',
    description: 'Phone/WhatsApp',
    link: 'https://wa.me/08992732002',
    icon: Phone,
  },
  {
    title: 'March 27, 2002',
    description: 'Place and Date of Birth',
    icon: Calendar,
  },
  {
    title: 'Location',
    description: 'Sumedang, Jawa Barat, Indonesia',
    icon: MapPin,
    link: 'https://maps.app.goo.gl/8FAMdJDo4zYsNfb46',
  },
];

type DataSocialMedia = {
  title: string;
  description: string;
  link?: string;
  icon: React.ElementType;
};

export const DATA_SOCIAL_MEDIA: DataSocialMedia[] = [
  {
    title: 'Github',
    description: 'Github Account',
    icon: Github,
  },
  {
    title: 'Instagram',
    description: 'Instagram Account',
    icon: Instagram,
  },
  {
    title: 'Github',
    description: 'Facebook Account',
    icon: Facebook,
  },
];
