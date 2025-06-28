import { createFileRoute } from '@tanstack/react-router';
import { Layout } from '@/components/layouts';
import { Breadcrumb } from '@/components/retroui/Breadcrumb';

export const Route = createFileRoute('/_app/showcase/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout.Main>
      <Layout.Header>
        <div className="flex items-center gap-2 px-2.5">
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Page>Showcase</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </div>
      </Layout.Header>
      <Layout.Body>
        <div>Hello "/_app/showcase/"!</div>
      </Layout.Body>
    </Layout.Main>
  );
}
