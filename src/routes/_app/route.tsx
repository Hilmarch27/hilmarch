import { Button } from '@/components/retroui/Button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Body,
  Drawers,
  Footer,
  Header,
} from '@/routes/_app/-components/layouts';
import { Profile, SocialMedia } from '@/routes/_app/-components/profile';
import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
});

function RouteComponent() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {/* Mobile Layout - Full Screen dengan Header, Body, Footer */}
      <div className={isMobile ? 'h-svh flex flex-col' : undefined}>
        {/* Header */}
        <Header>
          <Button
            className="absolute top-0 right-0 text-[10px] rounded-tr-md rounded-bl-md hover:translate-0 hover:shadow"
            variant="secondary"
            onClick={() => setOpen(!open)}
          >
            Click Me!
          </Button>
        </Header>
        {/* Body - Content Area */}
        <Body />
        {/* Footer - Button Area */}
        <Footer />
      </div>
      {/* Drawer for mobile */}
      <Drawers
        open={open}
        setOpen={setOpen}
        title="Personal Data"
        description={<SocialMedia />}
      >
        <Profile />
      </Drawers>
    </>
  );
}
