import Layout from '../layouts/public'

// PUBLIC
import Home from '../pages/public'
import Product from '../pages/public/product'

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
        path: '/produto/:id',
        element: <Product />,
      },
    ],
  },
]

export default router
