import Layout from '../layouts/public'
import DashboardLayout from '../layouts/public/dashboard'

// PUBLIC
import Home from '../pages/public'
import About from '../pages/public/about'
import Auth from '../pages/public/auth'
import ActivatedToken from '../pages/public/auth/activated-token'
import GenerateRecoveryPassword from '../pages/public/auth/generate-recovery-password'
import RecoveryPassword from '../pages/public/auth/recovery-password'
import SignUpConfirm from '../pages/public/auth/sign-up-confirm'
import Cart from '../pages/public/cart'
import Checkout from '../pages/public/checkout'
import Compare from '../pages/public/compare'
import Maintenance from '../pages/public/maintenance'
import NotFound from '../pages/public/not-found'
import Product from '../pages/public/product'
import Store from '../pages/public/store'
import Tracker from '../pages/public/tracker'
import Wishlist from '../pages/public/wishlist'

// DASHBOARD
import Dashboard from '../pages/dashboard'
import Orders from '../pages/dashboard/orders'
import Order from '../pages/dashboard/order'
import Address from '../pages/dashboard/address'
import History from '../pages/dashboard/history'
import Setting from '../pages/dashboard/setting'

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
      {
        path: '/rastrear',
        element: <Tracker />,
      },
      {
        path: '/compare',
        element: <Compare />,
      },
      {
        path: '/sobre',
        element: <About />,
      },
      {
        path: '/favoritos',
        element: <Wishlist />,
      },
      {
        path: '/carrinho',
        element: <Cart />,
      },
      {
        path: '/finalizar-compra',
        element: <Checkout />,
      },
      {
        path: '/entrar',
        element: <Auth />,
      },
      {
        path: '/confirmar-conta',
        element: <SignUpConfirm />,
      },
      {
        path: '/ativar-conta',
        element: <ActivatedToken />,
      },
      {
        path: '/recuperar-senha',
        element: <GenerateRecoveryPassword />,
      },
      {
        path: '/redefinir-senha',
        element: <RecoveryPassword />,
      },
      {
        path: '/conta',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <Dashboard />,
          },
          {
            path: 'pedidos',
            children: [
              { path: '', element: <Orders /> },
              { path: ':id', element: <Order /> },
            ],
          },
          {
            path: 'endereco',
            element: <Address />,
          },
          {
            path: 'historico',
            element: <History />,
          },
          {
            path: 'configuracao',
            element: <Setting />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/manutencao',
    element: <Maintenance />,
  },
]

export default router
