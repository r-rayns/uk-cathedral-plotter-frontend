import { Outlet, createRootRoute } from '@tanstack/react-router'

// This root encapsulates all other routes as children. Primary app shell elements go here.
export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
})
