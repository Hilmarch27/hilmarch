import {
  Calendar,
  Code,
  Code2,
  Facebook,
  FileUser,
  Github,
  Globe,
  Heart,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Trophy,
  Zap,
} from 'lucide-react'

type NavItem = {
  name: string
  icon: React.ElementType
  link: string
}

type NavData = {
  nav: NavItem[]
}

export const DATA_LINK: NavData = {
  nav: [
    { name: 'Home', icon: Home, link: '/' },
    { name: 'Resume', icon: FileUser, link: '/resume' },
    { name: 'Showcase', icon: Code, link: '/showcase' },
  ],
}

type DataProfile = {
  title: string
  description: string
  link?: string
  icon: React.ElementType
}

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
]

type DataSocialMedia = {
  title: string
  description: string
  link?: string
  icon: React.ElementType
}

export const DATA_SOCIAL_MEDIA: DataSocialMedia[] = [
  {
    title: 'Github',
    description: 'Github Account',
    icon: Github,
    link: 'https://github.com/Hilmarch27',
  },
  {
    title: 'Instagram',
    description: 'Instagram Account',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/hilmarch',
  },
  {
    title: 'Facebook',
    description: 'Facebook Account',
    icon: Facebook,
    link: 'https://facebook.com/Hilmarch27',
  },
]


export  const skillCategories = [
  {
    name: 'Frontend',
    icon: <Globe className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 99 },
      { name: 'Vue.js', level:85 },
      { name: 'Next.js', level: 99 },
      { name: 'TypeScript', level: 99 },
      { name: 'Tailwind CSS', level: 99 },
      { name: 'HTML/CSS', level: 99 },
      { name: 'JavaScript', level: 99 },
    ],
  },
  {
    name: 'Backend',
    icon: <Code2 className="w-5 h-5" />,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 99 },
      { name: 'Express.js', level: 99 },
      { name: 'Golang', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'Hono.js', level: 99 },
      { name: 'Nest.js', level: 99 },
      { name: 'REST APIs', level: 99 },
    ],
  },
  {
    name: 'Database',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MongoDB', level: 99 },
      { name: 'PostgreSQL', level: 99 },
      { name: 'MySQL', level: 85 },
      { name: 'Firebase', level: 85 },
      { name: 'Redis', level: 85 },
    ],
  },
  {
    name: 'Mobile',
    icon: <Smartphone className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'iOS Development', level: 85 },
      { name: 'Android Development', level: 85 },
    ],
  },
  {
    name: 'DevOps & Cloud',
    icon: <Trophy className="w-5 h-5" />,
    color: 'from-gray-500 to-slate-600',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Vercel', level: 99 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    name: 'Tools & Others',
    icon: <Heart className="w-5 h-5" />,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'VS Code', level: 99 },
      { name: 'Figma', level: 85 },
      { name: 'Postman', level: 85 },
      { name: 'Linux', level: 99 },
    ],
  },
]