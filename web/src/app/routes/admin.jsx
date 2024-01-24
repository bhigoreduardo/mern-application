import Layout from '../layouts/admin'

import Home from '../pages/admin'
import Customers from '../pages/admin/customers'
import CustomersForm from '../pages/admin/customers/form'
import CustomersOrders from '../pages/admin/customers/orders'
import CustomersProfile from '../pages/admin/customers/profile'

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

const admin = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: 'clientes',
        children: [
          { path: '', element: <Customers /> },
          { path: ':id', element: <CustomersProfile /> },
          { path: ':id/editar', element: <CustomersForm /> },
          { path: ':id/pedidos', element: <CustomersOrders /> },
        ],
      },
    ],
  },
]

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
