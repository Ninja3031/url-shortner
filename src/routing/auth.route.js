import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree.js"
import AuthPage from "../pages/AuthPages.jsx"

export const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/auth',
    component: AuthPage,
  })
