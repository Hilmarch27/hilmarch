import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/routes/_app/-components/app-sidebar';
import { Outlet } from '@tanstack/react-router';
import React from 'react';

export function Body() {
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
      <div className="hidden md:flex min-h-svh items-center justify-center bg-red-500">
        <div className="size-full max-w-5xl h-[calc(100svh-18rem)] overflow-hidden rounded-lg border shadow-lg">
          <SidebarProvider>
            <AppSidebar />
            <Outlet />
          </SidebarProvider>
        </div>
      </div>
    </React.Fragment>
  );
}
