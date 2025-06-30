import { Card } from '@/components/retroui/Card'
import { Progress } from '@/components/retroui/Progress'
import {
  Code2,
  Coffee,
  GraduationCap,
  Heart,
  Trophy,
} from 'lucide-react'
import React from 'react'
import { skillCategories } from './data'

export function HOME() {
  const [skillProgress, setSkillProgress] = React.useState<{
    [key: string]: number
  }>({})

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
