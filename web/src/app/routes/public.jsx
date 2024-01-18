import Layout from '../layouts/public'

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
