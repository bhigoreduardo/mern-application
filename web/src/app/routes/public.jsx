import Layout from '../layouts/public'

import Home from '../pages/public'
import Auth from '../pages/public/auth'
import SignUpConfirm from '../pages/public/auth/sign-up-confirm'
import Cart from '../pages/public/cart'
import Checkout from '../pages/public/checkout'
import Compare from '../pages/public/compare'
import Product from '../pages/public/product'
import Store from '../pages/public/store'
import Tracker from '../pages/public/tracker'
import Wishlist from '../pages/public/wishlist'

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
    ],
  },
]

export default router
