import { Globe, LayoutTemplate, Squirrel } from 'lucide-react'

export const currentProjects = [
  {
    title: 'STD UI',
    description: 'React-focused UI kit for consistent design and dev speed.',
    tech: ['Shadcn UI', 'Next js', 'Typescript', 'Tanstack', 'Radix UI'],
    status: 'Done',
    progress: 100,
    color: 'from-green-500 to-emerald-500',
    icon: Squirrel,
    link: 'https://std-ui.vercel.app',
  },
  {
    title: 'MONIFY',
    description: 'Collaborative workspace with shared budget tracking.',
    tech: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'TRPc',
      'Tanstack',
      'Shadcn UI',
      'Auth Js',
      'Prisma',
    ],
    status: 'Beta Testing',
    progress: 80,
    color: 'from-blue-500 to-cyan-500',
    icon: Globe,
    link: 'https://monify.vercel.app',
  },
  {
    title: 'Template Next JS',
    description:
      'Template built with Next.js to document my learning experience.',
    tech: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'TRPc',
      'Tanstack',
      'Shadcn UI',
      'Auth Js',
      'Prisma',
    ],
    status: 'Progress',
    progress: 77,
    color: 'from-purple-500 to-pink-500',
    icon: LayoutTemplate,
    link: 'https://github.com/Hilmarch27/next-js',
  },
] as const
