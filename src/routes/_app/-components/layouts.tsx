import { Avatar } from '@/components/retroui/Avatar'
import { Badge } from '@/components/retroui/Badge'
import { Button } from '@/components/retroui/Button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { SidebarProvider } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { AppSidebar } from '@/routes/_app/-components/app-sidebar'
import { DATA_LINK } from '@/routes/_app/-components/data'
import { Link, Outlet, useLocation } from '@tanstack/react-router'
import React from 'react'

export function MainBody() {
  return (
    <React.Fragment>
      {/* Mobile */}
      <div className="flex-1 m-2 mb-4 rounded-lg border shadow-lg overflow-hidden md:hidden">
        <SidebarProvider>
          <AppSidebar />
          <Outlet />
        </SidebarProvider>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex min-h-svh items-center justify-center">
        <div className="size-full max-w-5xl h-[calc(100svh-5rem)] xl:h-[calc(100svh-18rem)] overflow-hidden rounded-lg border shadow-lg">
          <SidebarProvider>
            <AppSidebar />
            <Outlet />
          </SidebarProvider>
        </div>
      </div>
    </React.Fragment>
  )
}

export function MainHeader({
  children,
  className,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      {...props}
      className={cn(
        'md:hidden flex-none rounded-lg border shadow-lg m-2 mb-4 flex p-4 space-x-3 relative',
        className,
      )}
    >
      <Avatar className="flex-none">
        <Avatar.Image
          src="https://github.com/Hilmarch27.png"
          alt="Diana Hilman"
        />
        <Avatar.Fallback>DH</Avatar.Fallback>
      </Avatar>
      <div className="flex-1 grid gap-0.5">
        <h4 className="font-bold">Diana Hilman</h4>
        <Badge className="rounded-md w-fit" variant={'surface'}>
          Programmer
        </Badge>
      </div>
      {children}
    </header>
  )
}

export function MainFooter({
  className,
  ...props
}: React.ComponentProps<'footer'>) {
  const href = useLocation({ select: (location) => location.href })
  return (
    <footer
      {...props}
      className={cn('md:hidden flex-none p-2 border-t bg-white', className)}
    >
      <div className="flex gap-3.5 justify-around">
        {DATA_LINK.nav.map((item) => {
          const isActive = item.link === href
          return (
            <Link key={item.link} to={item.link}>
              <Button
                variant={isActive ? 'default' : 'secondary'}
                size="icon"
                className="rounded-lg"
              >
                <item.icon className="w-4 h-4" />
              </Button>
            </Link>
          )
        })}
      </div>
    </footer>
  )
}

type DrawersProps = {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
  description?: string | React.ReactNode
  children?: React.ReactNode
}

export function MainDrawers({ ...Props }: DrawersProps) {
  return (
    <Drawer modal open={Props.open} onOpenChange={Props.setOpen}>
      <DrawerContent>
        <div className="px-3 pb-3">
          <DrawerHeader>
            <DrawerTitle>{Props.title ?? 'Drawer Title'}</DrawerTitle>
            {Props.description && (
              <DrawerDescription>{Props.description}</DrawerDescription>
            )}
          </DrawerHeader>
          {Props.children}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
