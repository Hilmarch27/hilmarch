import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link, useLocation } from '@tanstack/react-router';
import { Bell, Home, Menu, Paintbrush } from 'lucide-react';

type NavItem = {
  name: string;
  icon: React.ElementType;
  link: string;
};

type NavData = {
  nav: NavItem[];
};

const data: NavData = {
  nav: [
    { name: 'Notifications', icon: Bell, link: '/' },
    { name: 'Navigation', icon: Menu, link: '/about' },
    { name: 'Home', icon: Home, link: '/skills' },
    { name: 'Appearance', icon: Paintbrush, link: '/portfolio' },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const href = useLocation({ select: (location) => location.href });
  console.log('Current HREF:', href);

  return (
    <Sidebar {...props} collapsible="none" className="hidden md:flex">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.nav.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={item.link === href}>
                    <Link to={item.link}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
