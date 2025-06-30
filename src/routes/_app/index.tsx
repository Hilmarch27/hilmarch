import { Layout } from '@/components/layouts'
import { Breadcrumb } from '@/components/retroui/Breadcrumb'
import { HOME } from '@/routes/_app/-components/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <Layout.Main>
      <Layout.Header>
        <div className="flex items-center gap-2 px-2.5">
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Page>Profile</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </div>
      </Layout.Header>
      <Layout.Body className="space-y-8">
        <HOME />
      </Layout.Body>
    </Layout.Main>
  )
}
