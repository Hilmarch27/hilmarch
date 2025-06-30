import { BadgeCheck, Code, GraduationCap, Users } from 'lucide-react'

export const RESUME_DATA = [
  {
    category: 'Education',
    icon: GraduationCap,
    items: [
      {
        id: 1,
        date: 'August 2020 — April 2024',
        title: 'Bandung University of Technology',
        description:
          'Strata 1 Informatics Engineering Study Program | IPK: 3.52/4.00',
      },
    ],
  },
  {
    category: 'Experience',
    icon: Code,
    items: [
      {
        id: 1,
        date: 'April 2024 — Present',
        title: 'Ganesha Operation',
        description:
          'I work as a Fullstack Web Developer at Ganesha Operation, responsible for the development and maintenance of web systems, particularly in the product sales area and the Go Career platform. In this role, I manage the migration from the legacy website to a new system built with modern technologies, while ensuring system stability through regular maintenance and bug fixing. I utilize technologies such as TypeScript, JavaScript, and Golang to build efficient, scalable, and maintainable web applications.',
      },
      {
        id: 2,
        date: 'October 2023 — March 2024',
        title: 'Department of Trade and Industry (BANDUNG CITY DISDAGIN)',
        description:
          'Created a SIBANGKOK (Basic Necessities Information System) website for data collection on families of beneficiaries of subsidized cheap market operations in 30 sub-districts of Bandung City and a price recording system for basic necessities using NodeJs and the MongoDB database.',
      },
      {
        id: 3,
        date: 'RWKU',
        title: 'February 2023 — December 2023',
        description:
          'Creating a website for citizen administration services in Cikutra sub-district, Bandung city',
      },
    ],
  },
  {
    category: 'Licences And Certifications',
    icon: BadgeCheck,
    items: [
      {
        id: 1,
        date: 'February 2023 - June 2023',
        title: 'Web Developer PT Presentologics (Dicoding)',
        description:
          'Students are able to implement the material they obtain directly through projects and assignments that must be completed to complete each material',
      },
      {
        id: 2,
        date: 'February 2023 - June 2023',
        title: 'PT BISA ARTIFISIAL INDONESIA',
        description:
          'Students are able to master the creation and design of Designs and Products for Artificial Intelligence (AI-Hipster)',
      },
    ],
  },
  {
    category: 'Organizational experience',
    icon: Users,
    items: [
      {
        id: 1,
        date: '2022-2023',
        title: 'Bandung University of Technology Student Association',
        description:
          'Head of Department (Organizational Development and Human Resources)',
      },
      {
        id: 2,
        date: 'February 2023 - June 2023',
        title: 'Bandung University of Technology Student Association',
        description: 'Department Staff (Human Resource Development)',
      },
    ],
  },
] as const
