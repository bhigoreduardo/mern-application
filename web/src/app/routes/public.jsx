import Layout from '../layouts/public'

import Home from '../pages/public'
import Product from '../pages/public/product'
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
      {
        path: '/produto/:id',
        element: <Product />,
      },
    ],
  },
]

export default router
