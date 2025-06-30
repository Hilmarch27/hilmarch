import { Card } from '@/components/retroui/Card'
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline'
import { RESUME_DATA } from '@/routes/_app/resume/-components/resume-data'
import { CheckIcon } from 'lucide-react'

export function Resume() {
  return (
    <Card className="w-full rounded-md">
      <Card.Content>
        {RESUME_DATA.map((category) => (
          <div className="grid gap-3 mt-3" key={category.category}>
            <div className="flex space-x-3.5">
              <category.icon className="bg-fancy p-0.5 text-white size-7" />
              <h1 className="underline-fancy">{category.category}</h1>
            </div>
            <Timeline defaultValue={category.items.length} className="ms-0.5">
              {category.items.map((item) => (
                <TimelineItem
                  key={item.id}
                  step={item.id}
                  className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-5"
                >
                  <TimelineHeader>
                    <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5 bg-primary" />
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
                      <CheckIcon
                        className="group-not-data-completed/timeline-item:hidden"
                        size={16}
                      />
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent>{item.description}</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        ))}
      </Card.Content>
    </Card>
  )
}
