import Layout from '../layouts/admin'

import Home from '../pages/admin'
import Brands from '../pages/admin/brands'
import BrandsForm from '../pages/admin/brands/form'
import Categories from '../pages/admin/categories'
import CategoriesForm from '../pages/admin/categories/form'
import Colors from '../pages/admin/colors'
import ColorsForm from '../pages/admin/colors/form'
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
      {
        path: 'clientes',
        children: [
          { path: '', element: <Customers /> },
          { path: ':id', element: <CustomersProfile /> },
          { path: ':id/editar', element: <CustomersForm /> },
          { path: ':id/pedidos', element: <CustomersOrders /> },
        ],
      },
      {
        path: 'categorias',
        children: [
          { path: '', element: <Categories /> },
          { path: 'cadastrar', element: <CategoriesForm /> },
          { path: ':id/editar', element: <CategoriesForm /> },
        ],
      },
      {
        path: 'cores',
        children: [
          { path: '', element: <Colors /> },
          { path: 'cadastrar', element: <ColorsForm /> },
          { path: ':id/editar', element: <ColorsForm /> },
        ],
      },
      {
        path: 'marcas',
        children: [
          { path: '', element: <Brands /> },
          { path: 'cadastrar', element: <BrandsForm /> },
          { path: ':id/editar', element: <BrandsForm /> },
        ],
      },
    ],
  },
]

const admin = [
  {
    path: '',
    element: <Layout />,
    children: [],
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
