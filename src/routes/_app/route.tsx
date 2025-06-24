import { Avatar } from '@/components/retroui/Avatar';
import { Badge } from '@/components/retroui/Badge';
import { Button } from '@/components/retroui/Button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/routes/_app/-components/app-sidebar';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Home, PenIcon } from 'lucide-react';
import React from 'react';

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
});

function RouteComponent() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {/* Mobile Layout - Full Screen dengan Header, Body, Footer */}
      <div className="md:hidden h-svh flex flex-col">
        {/* Header */}
        <header className="flex-none rounded-lg border shadow-lg m-2 mb-4 flex p-4 space-x-3 relative">
          <Avatar className="flex-none">
            <Avatar.Image src="broken-link" alt="Arif Logs" />
            <Avatar.Fallback>DH</Avatar.Fallback>
          </Avatar>
          <div className="flex-1 grid gap-0.5">
            <h4 className="font-bold">Diana Hilman</h4>
            <Badge className="rounded-md w-fit" variant={'surface'}>
              Programmer
            </Badge>
          </div>
          <Button
            className="absolute top-0 right-0 text-[10px] rounded-tr-md rounded-bl-md hover:translate-0 hover:shadow"
            variant="secondary"
            onClick={() => setOpen(!open)}
          >
            Click Me!
          </Button>
        </header>

        {/* Body - Content Area */}
        <div className="flex-1 m-2 mb-4 rounded-lg border shadow-lg overflow-hidden">
          <SidebarProvider>
            <AppSidebar />
            <Outlet />
          </SidebarProvider>
        </div>

        {/* Footer - Button Area */}
        <footer className="flex-none p-2 border-t bg-white">
          <div className="flex gap-3.5 justify-around">
            <Button variant="default" size="icon">
              <Home className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <PenIcon className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <PenIcon className="w-4 h-4" />
            </Button>
          </div>
        </footer>
      </div>

      {/* Desktop view - Layout centered seperti modal */}
      <div className="hidden md:block size-full max-w-5xl max-h-[70%] overflow-hidden translate-x-[-50%] translate-y-[-50%] fixed top-[50%] left-[50%] rounded-lg border shadow-lg">
        <SidebarProvider>
          <AppSidebar />
          <Outlet />
        </SidebarProvider>
      </div>

      <Drawer modal open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
