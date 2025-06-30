import { Layout } from '@/components/layouts'
import { Breadcrumb } from '@/components/retroui/Breadcrumb'
import { ShowCase } from '@/routes/_app/showcase/-components/showcase'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/showcase/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Layout.Main>
      <Layout.Header>
        <div className="flex items-center gap-2 px-2.5">
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Page>Current Projects</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </div>
      </Layout.Header>
      <Layout.Body>
        <ShowCase />
      </Layout.Body>
    </Layout.Main>
  )
}
