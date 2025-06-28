import { Resume } from '@/routes/_app/resume/-components/resume';
import { Layout } from '@/components/layouts';
import { Breadcrumb } from '@/components/retroui/Breadcrumb';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/resume/')({
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
                <Breadcrumb.Page>Resume</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </div>
      </Layout.Header>
      <Layout.Body>
        <Resume />
      </Layout.Body>
    </Layout.Main>
  );
}
