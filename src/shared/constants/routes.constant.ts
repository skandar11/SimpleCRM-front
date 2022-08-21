import { AuthPage } from '@pages/auth'
import { ClientPage } from '@pages/client/client.page'
import { ClientsPage } from '@pages/clients'
import { CreateClientPage } from '@pages/create-client/create-client.page'
import { HomePage } from '@pages/index.page'
import { ProgressPage } from '@pages/progress/progress.page'
import { SchedulePage } from '@pages/schedule'

// import { lazy } from 'react'
export const ROUTES = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/clients',
    component: ClientsPage,
    exact: true,
  },
  {
    path: '/schedule',
    component: SchedulePage,
    exact: true,
  },
  {
    path: '/auth/*',
    component: AuthPage,
    exact: false,
  },
  {
    path: '/create-client',
    component: CreateClientPage,
    exact: false,
  },
  {
    path: '/clients/:clientId',
    component: ClientPage,
    exact: false,
  },
  {
    path: '/clients/edit-client/:clientId',
    component: ClientPage,
    exact: false,
  },
  {
    path: '/clients/progress/:clientId',
    component: ProgressPage,
    exact: false,
  },
]

// //If react suspense using
// const LAZY_ROUTES = [
//   {
//     path: "/",
//     component: lazy(() => import("../../pages/home/home.page")),
//     exact: true,
//   },
// ];
