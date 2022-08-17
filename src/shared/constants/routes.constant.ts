import { HomePage } from '@pages/home/index.page'
// import { lazy } from 'react'
export const ROUTES = [
  {
    path: '/',
    component: HomePage,
    exact: true,
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
