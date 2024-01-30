# :desktop_computer: Furniture First Release Application

<img src="./assets/cover.png" alt="Cover projeto" />


## :fire: Run

- Development (Port 3000): `yarn dev`

## :triangular_flag_on_post: Environment Variables

### Web Variables

- Environment: `VITE_NODE_ENV` ['develop/homolog/production']
- Bearer Token: `VITE_SERVER_BEARER`

TODO:
  - app/pages/public/store:
    -> Consertar seletor de preço do filtro lateral
    -> Consertar categorias filhas do filtro lateral

  - app/components/form/public/auth:
    -> TextLabel está com problema de controle de valores

  - app/pages/dashboard:
    -> Consertar o responsivo do carousel de histórico de produtos

  - app/components/navigation/admin/header:
    -> Consertar bug das páginas renderizadas para cada tipo de usuário

  FIXME: (TABELA - app/componensts/ui/table/data)
  - app/components/form/order:
    -> Consertar responsividade da tabela de produtos do carrinho do pedido
  - app/components/widgets/public/cart-items:
    -> Consertar responsividade da tabela de produtos do carrinho de compras
  - app/pages/dashboard:
    -> Consertar responsividade da tabela da lista de últimos pedidos
  - app/pages/dashboard/orders:
    -> Consertar responsividade da tabela da lista de pedidos
  - app/pages/public/wishlist:
    -> Consertar responsividade da tabela da lista de produtos favoritos
