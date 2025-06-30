import { cn } from '@/lib/utils'
import type React from 'react'

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-[calc(100svh-13rem)] md:h-[calc(100svh-6rem)] xl:h-[calc(100svh-19rem)] flex-1 flex-col overflow-hidden">
      {children}
    </main>
  )
}

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      {children}
    </header>
  )
}

export function Body({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('px-2.5 overflow-y-auto', className)}>
      {children}
    </div>
  )
}

export const Layout = {
  Main,
  Header,
  Body,
}
