'use client';

import type React from 'react';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Calendar,
  Building,
  User,
  Code,
  Briefcase,
  FileText,
  MessageCircle,
  Star,
  Award,
  Globe,
} from 'lucide-react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/retroui/Card';
import { Badge } from '@/components/retroui/Badge';
import { Button } from '@/components/retroui/Button';
import { Avatar } from '@/components/retroui/Avatar';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/retroui/Progress';
import { cn, placeHolderURL } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
  logo?: string;
}

interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Skill {
  name: string;
  level: number;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const tabItems: TabItem[] = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.',
      image: placeHolderURL({ w: '500', h: '300' }), // Placeholder image URL
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: '2',
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      image: placeHolderURL({ w: '500', h: '300' }),
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Socket.io',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard with location-based forecasts, interactive charts, and detailed weather analytics.',
      image: placeHolderURL({ w: '500', h: '300' }),
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      id: '4',
      title: 'Social Media Analytics',
      description:
        'Advanced analytics platform for social media management with AI-powered insights and automated reporting.',
      image: placeHolderURL({ w: '500', h: '300' }),
      technologies: ['React', 'Python', 'FastAPI', 'Redis', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
  ];

  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      duration: '2022 - Present',
      description: [
        'Led development of responsive web applications using React and TypeScript',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      logo: placeHolderURL({ w: '40', h: '40' }),
    },
    {
      id: '2',
      company: 'Digital Agency Co.',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      description: [
        'Developed and maintained client websites using modern web technologies',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Integrated third-party APIs and payment gateways',
        'Participated in agile development processes',
      ],
      technologies: ['JavaScript', 'Vue.js', 'SCSS', 'WordPress'],
      logo: placeHolderURL({ w: '40', h: '40' }),
    },
  ];

  const education: Education[] = [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2016 - 2020',
      description:
        'Graduated with honors, specialized in web development and software engineering',
      logo: placeHolderURL({ w: '40', h: '40' }),
    },
  ];

  const skillCategories = {
    Frontend: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'Vue.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
    Backend: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'REST APIs', level: 90 },
    ],
    'Tools & Others': [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Figma', level: 85 },
      { name: 'Jest', level: 80 },
      { name: 'Webpack', level: 75 },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Max width container for laptop screens */}
      <div className="max-w-[1400px] mx-auto flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0 bg-card/95 backdrop-blur-sm border-r shadow-lg">
          <div className="flex flex-col h-full">
            {/* Profile Section with Background */}
            <div className="relative p-6 border-b bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
              <div className="absolute inset-0 bg-cover bg-center opacity-5" />
              <div className="relative text-center">
                <div className="relative inline-block">
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-primary/20 shadow-lg">
                    <Avatar.Image
                      src={placeHolderURL({ w: '80', h: '80' })}
                      alt="Profile"
                    />
                    <Avatar.Fallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-lg font-bold">
                      JD
                    </Avatar.Fallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
                </div>
                <h1 className="text-xl font-bold mb-1">John Doe</h1>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  Full Stack Developer
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-2 hover:text-foreground transition-colors">
                    <Mail className="w-3 h-3" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 hover:text-foreground transition-colors">
                    <Phone className="w-3 h-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 hover:text-foreground transition-colors">
                    <MapPin className="w-3 h-3" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 transition-transform"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 transition-transform"
                  >
                    <Linkedin className="w-3 h-3 mr-1" />
                    LinkedIn
                  </Button>
                </div>
                <Button
                  className="w-full mt-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all"
                  size="sm"
                >
                  <Download className="w-3 h-3 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                {tabItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02]',
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Stats Section */}
            <div className="p-4 border-t bg-muted/20">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">20+</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-80">
          <div className="container mx-auto px-4 py-6 pb-20 lg:pb-6 max-w-5xl">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="relative p-6">
                <Avatar className="w-16 h-16 mx-auto mb-3 ring-4 ring-primary/20">
                  <Avatar.Image
                    src={placeHolderURL({ w: '64', h: '64' })}
                    alt="Profile"
                  />
                  <Avatar.Fallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                    JD
                  </Avatar.Fallback>
                </Avatar>
                <h1 className="text-2xl font-bold mb-1">John Doe</h1>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              {/* About Tab */}
              <TabsContent value="about" className="space-y-6 mt-0">
                {/* Hero Section */}
                <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cover bg-center opacity-10" />
                    <Card.Content className="relative p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                          <User className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">About Me</h2>
                          <p className="text-muted-foreground">
                            Passionate Developer & Problem Solver
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          I'm a passionate full-stack developer with over 4
                          years of experience creating digital solutions that
                          make a difference. I specialize in modern web
                          technologies and love turning complex problems into
                          simple, beautiful designs.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          When I'm not coding, you can find me exploring new
                          technologies, contributing to open-source projects, or
                          sharing knowledge with the developer community. I
                          believe in writing clean, maintainable code and
                          creating user experiences that delight.
                        </p>
                      </div>
                    </Card.Content>
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <Card.Header className="pb-3">
                      <Card.Title className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        What I Do
                      </Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <ul className="space-y-3">
                        {[
                          'Frontend Development',
                          'Backend Development',
                          'UI/UX Design',
                          'API Integration',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card.Content>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <Card.Header className="pb-3">
                      <Card.Title className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Interests
                      </Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <ul className="space-y-3">
                        {[
                          'Open Source',
                          'Machine Learning',
                          'Mobile Development',
                          'Cloud Computing',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card.Content>
                  </Card>
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="space-y-6 mt-0">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <Card
                    key={category}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Card.Header>
                      <Card.Title className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        {category}
                      </Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </Card.Content>
                  </Card>
                ))}
              </TabsContent>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="space-y-6 mt-0">
                {/* Featured Projects */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Featured Projects
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects
                      .filter((p) => p.featured)
                      .map((project) => (
                        <Card
                          key={project.id}
                          className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                        >
                          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-primary/90 text-primary-foreground">
                                Featured
                              </Badge>
                            </div>
                          </div>
                          <Card.Header>
                            <Card.Title className="text-lg">
                              {project.title}
                            </Card.Title>
                            <Card.Description className="text-sm leading-relaxed">
                              {project.description}
                            </Card.Description>
                          </Card.Header>
                          <Card.Content className="space-y-4">
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="surface"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              {project.liveUrl && (
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-primary to-primary/80"
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Live Demo
                                </Button>
                              )}
                              {project.githubUrl && (
                                <Button size="sm" variant="outline">
                                  <Github className="w-3 h-3 mr-1" />
                                  Code
                                </Button>
                              )}
                            </div>
                          </Card.Content>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* All Projects */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    All Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                      <Card
                        key={project.id}
                        className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <Card.Header>
                          <Card.Title className="text-lg">
                            {project.title}
                          </Card.Title>
                          <Card.Description className="text-sm">
                            {project.description}
                          </Card.Description>
                        </Card.Header>
                        <Card.Content className="space-y-4">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            {project.liveUrl && (
                              <Button size="sm" variant="outline">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Live Demo
                              </Button>
                            )}
                            {project.githubUrl && (
                              <Button size="sm" variant="outline">
                                <Github className="w-3 h-3 mr-1" />
                                Code
                              </Button>
                            )}
                          </div>
                        </Card.Content>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Resume Tab */}
              <TabsContent value="resume" className="space-y-6 mt-0">
                {/* Experience Section */}
                <Card className="border-0 shadow-xl">
                  <Card.Header className="bg-gradient-to-r from-primary/10 to-transparent">
                    <Card.Title className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-primary" />
                      Professional Experience
                    </Card.Title>
                  </Card.Header>
                  <Card.Content className="p-6 space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={exp.id} className="relative">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                              <img
                                src={
                                  exp.logo ||
                                  placeHolderURL({ w: '32', h: '32' })
                                }
                                alt={exp.company}
                                className="w-8 h-8 rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-lg">
                                  {exp.position}
                                </h4>
                                <p className="text-primary font-medium">
                                  {exp.company}
                                </p>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 sm:mt-0">
                                <Calendar className="w-3 h-3" />
                                {exp.duration}
                              </div>
                            </div>
                            <ul className="text-muted-foreground space-y-2 mb-4">
                              {exp.description.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="surface"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        {index < experiences.length - 1 && (
                          <Separator className="mt-8" />
                        )}
                      </div>
                    ))}
                  </Card.Content>
                </Card>

                {/* Education Section */}
                <Card className="border-0 shadow-lg">
                  <Card.Header>
                    <Card.Title className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Education
                    </Card.Title>
                  </Card.Header>
                  <Card.Content>
                    {education.map((edu) => (
                      <div key={edu.id} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                            <img
                              src={
                                edu.logo || placeHolderURL({ w: '32', h: '32' })
                              }
                              alt={edu.institution}
                              className="w-8 h-8 rounded-lg"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{edu.degree}</h4>
                              <p className="text-primary font-medium">
                                {edu.institution}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 sm:mt-0">
                              <Calendar className="w-3 h-3" />
                              {edu.duration}
                            </div>
                          </div>
                          {edu.description && (
                            <p className="text-muted-foreground">
                              {edu.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </Card.Content>
                </Card>
              </TabsContent>

              {/* Contact Tab */}
              <TabsContent value="contact" className="space-y-6 mt-0">
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
                    <Card.Header className="relative">
                      <Card.Title className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        Get In Touch
                      </Card.Title>
                      <Card.Description className="text-base">
                        I'm always interested in hearing about new opportunities
                        and interesting projects. Let's create something amazing
                        together!
                      </Card.Description>
                    </Card.Header>
                    <Card.Content className="relative space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-background to-muted/20 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                              <Mail className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <p className="font-semibold">Email</p>
                              <p className="text-muted-foreground">
                                john.doe@example.com
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-background to-muted/20 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                              <Phone className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <p className="font-semibold">Phone</p>
                              <p className="text-muted-foreground">
                                +1 (555) 123-4567
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-background to-muted/20 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                              <MapPin className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <p className="font-semibold">Location</p>
                              <p className="text-muted-foreground">
                                San Francisco, CA
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-4 flex items-center gap-2">
                              <Globe className="w-4 h-4 text-primary" />
                              Connect with me
                            </h4>
                            <div className="flex gap-3">
                              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </Button>
                              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all">
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn
                              </Button>
                            </div>
                          </div>
                          <div className="p-6 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 border">
                            <h5 className="font-medium mb-2">
                              Let's collaborate!
                            </h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Feel free to reach out if you want to collaborate
                              on a project, have a question, or just want to
                              connect. I'm always excited to work on innovative
                              projects and meet fellow developers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card.Content>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-2xl z-50">
          <div className="flex items-center justify-around py-2 max-w-[1400px] mx-auto">
            {tabItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    'flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-0',
                    activeTab === item.id
                      ? 'text-primary bg-primary/10 scale-105'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium truncate">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
