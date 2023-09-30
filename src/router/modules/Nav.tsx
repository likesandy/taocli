import lazyLoad from '../utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'
import { lazy } from 'react'

// 首页模块
const Nav: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'Nav',
    },
    children: [
      {
        path: '/nav/link',
        element: lazyLoad(lazy(() => import('@/views/nav/link'))),
        meta: {
          title: 'Nav',
          key: 'xx',
        },
      },
    ],
  },
]

export default Nav