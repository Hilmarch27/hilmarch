import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      <div className="hidden md:block">
        <TanStackRouterDevtools position="bottom-right" />
      </div>
    </>
  )
}
