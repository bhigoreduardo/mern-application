import Layout from '../layouts/public'

// PUBLIC
import Home from '../pages/public'

const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]

export default router
