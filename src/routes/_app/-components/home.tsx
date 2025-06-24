import { Breadcrumb } from '@/components/retroui/Breadcrumb';

export function HOME() {
  return (
    <main className="flex h-[700px] md:h-[650px] flex-1 flex-col overflow-hidden">
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item className="hidden md:block">
                <Breadcrumb.Link href="#">Settings</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator className="hidden md:block" />
              <Breadcrumb.Item>
                <Breadcrumb.Page>Messages & media</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 md:pt-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
            className="bg-muted/50 aspect-video max-w-3xl rounded-xl"
          />
        ))}
      </div>
    </main>
  );
}
