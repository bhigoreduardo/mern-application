import Layout from '../layouts/public'

import Home from '../pages/public'
import Store from '../pages/public/store'

const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'loja',
        element: <Store />,
      },
    ],
  },
]

export default router
