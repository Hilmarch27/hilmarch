import {
  Sidebar,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { DATA_LINK } from '@/routes/_app/-components/data';
import { MainHeader } from '@/routes/_app/-components/layouts';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu } from 'lucide-react';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const href = useLocation({ select: (location) => location.href });

  return (
    <Sidebar {...props} collapsible="none" className="hidden md:flex space-y-3">
      <SidebarHeader>
        <MainHeader className="md:flex m-0 p-2" />
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel className="text-black font-extrabold px-0 gap-0.5">
          <Menu />
          Menu
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="gap-1.5">
            {DATA_LINK.nav.map((item) => {
              const isActive = item.link === href;
              return (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    className="bg-fancy"
                    asChild
                    isActive={isActive}
                  >
                    <Link to={item.link}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter>test</SidebarFooter>
    </Sidebar>
  );
}
