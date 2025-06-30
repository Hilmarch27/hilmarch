import { Card } from '@/components/retroui/Card'
import { Progress } from '@/components/retroui/Progress'
import {
  Code2,
  Coffee,
  Globe,
  GraduationCap,
  Heart,
  Smartphone,
  Trophy,
  Zap,
} from 'lucide-react'
import React from 'react'

export function HOME() {
  const [skillProgress, setSkillProgress] = React.useState<{
    [key: string]: number
  }>({})

  const skillCategories = [
    {
      name: 'Frontend',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      name: 'Backend',
      icon: <Code2 className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      name: 'Mobile',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 65 },
        { name: 'iOS Development', level: 60 },
        { name: 'Android Development', level: 60 },
      ],
    },
    {
      name: 'Database',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      name: 'DevOps & Cloud',
      icon: <Trophy className="w-5 h-5" />,
      color: 'from-gray-500 to-slate-600',
      skills: [
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 60 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 55 },
      ],
    },
    {
      name: 'Tools & Others',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 85 },
        { name: 'Linux', level: 70 },
      ],
    },
  ]

  // Animate skill progress bars
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress: { [key: string]: number } = {}
      for (const category of skillCategories) {
        for (const skill of category.skills) {
          newProgress[`${category.name}-${skill.name}`] = skill.level
        }
      }
      setSkillProgress(newProgress)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Card className="w-full rounded-md">
        <Card.Header>
          <Card.Title className="flex items-center gap-3">
            <div className="bg-fancy">
              <GraduationCap className="size-5" />
            </div>
            <span className="underline-fancy">About Me</span>
          </Card.Title>
        </Card.Header>
        <Card.Content className="space-y-6">
          <p className="text-lg leading-relaxed">
            {
              "I'm a passionate  with a strong foundation in computer science and a burning desire to create innovative digital solutions. My journey in tech has led me to specialize in fullstack development, where I enjoy building comprehensive applications that work seamlessly across both mobile and web platforms."
            }
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg  border-2 border-black shadow-primary">
              <Heart className="w-8 h-8 text-red-400" />
              <div>
                <div className="font-semibold">Passionate</div>
                <div className="text-sm text-zinc-700">Love what I do</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg  border-2 border-black shadow-primary">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div>
                <div className="font-semibold">Ambitious</div>
                <div className="text-sm text-zinc-700">Always improving</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg  border-2 border-black shadow-primary">
              <Coffee className="w-8 h-8 text-orange-400" />
              <div>
                <div className="font-semibold">Dedicated</div>
                <div className="text-sm text-zinc-700">24/7 learner</div>
              </div>
            </div>
          </div>
        </Card.Content>
      </Card>
      <Card className="w-full rounded-md">
        <Card.Header>
          <Card.Title className="flex items-center gap-3">
            <div className="bg-fancy">
              <Code2 className="size-5" />
            </div>
            <span className="underline-fancy">Technical Skills</span>
          </Card.Title>
        </Card.Header>
        <Card.Content className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.name} className="rounded-md">
              <Card.Header className="pb-0.5">
                <Card.Title className="flex items-center gap-2 text-black text-lg">
                  <div
                    className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}
                  >
                    {category.icon}
                  </div>
                  {category.name}
                </Card.Title>
              </Card.Header>
              <Card.Content className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-black font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-zinc-900 text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={
                        skillProgress[`${category.name}-${skill.name}`] || 0
                      }
                      className="h-1.5"
                    />
                  </div>
                ))}
              </Card.Content>
            </Card>
          ))}
        </Card.Content>
      </Card>
    </>
  )
}
