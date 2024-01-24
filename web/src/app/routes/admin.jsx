import Layout from '../layouts/admin'

import Home from '../pages/admin'

const children = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]

const admin = []

const store = []

const router = [
  {
    path: '/acesso',
    children: [
      {
        path: 'loja',
        children: [...store, ...children, ...admin],
      },
      {
        path: 'admin',
        children: [...children, ...admin],
      },
      {
        path: 'colaborador',
        children: children,
      },
    ],
  },
]

export default router
