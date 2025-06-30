import { Badge } from '@/components/retroui/Badge'
import { Button } from '@/components/retroui/Button'
import { Card } from '@/components/retroui/Card'
import { Progress } from '@/components/retroui/Progress'
import { currentProjects } from '@/routes/_app/showcase/-components/showcase-data'
import { ExternalLink } from 'lucide-react'
import React from 'react'

export function ShowCase() {
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(
    null,
  )

  return (
    <div className="p-3">
      <div className="grid gap-6 md:grid-cols-2">
        {currentProjects.map((project) => (
          <Card
            key={project.title}
            className={`shadow-md bg-zinc/5 backdrop-blur-sm border border-zinc/10 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-zinc/10 ${
              hoveredProject === project.title ? 'ring-2 ring-primary' : ''
            }`}
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Card.Content className="p-6">
              <div className="flex items-center justify-between">
                <div
                  className={`p-2 size-[34px] rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center text-white mb-4 shadow-md`}
                >
                  <project.icon className="size-3.5" />
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="rounded-md shadow-md cursor-text"
                  >
                    {project.status}
                  </Badge>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Button
                      size="icon"
                      variant="outline"
                      className="text-black rounded-md"
                    >
                      <ExternalLink className="size-3.5" />
                    </Button>
                  </a>
                </div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-black mb-4">{project.description}</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-black mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="solid" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  )
}
