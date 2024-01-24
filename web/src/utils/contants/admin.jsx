import {
  Stack,
  UserList,
  Tag,
  PaintBrush,
  Lifebuoy,
  Armchair,
  ArchiveBox,
  ChatDots,
  Layout,
  CurrencyCircleDollar,
  Storefront,
  UserCircleGear,
  UsersThree,
  IdentificationCard,
  SignOut,
} from 'phosphor-react'

// SIDEBAR
export const pages = (isStore, isAdmin, isEmployee) => [
  {
    name: 'Painel',
    slug: '',
    icon: <Stack size={16} weight="duotone" />,
  },
  {
    name: 'Clientes',
    slug: 'clientes',
    icon: <UserList size={16} weight="duotone" />,
  },
  {
    name: 'Categorias',
    slug: 'categorias',
    icon: <Tag size={16} weight="duotone" />,
  },
  {
    name: 'Cores',
    slug: 'cores',
    icon: <PaintBrush size={16} weight="duotone" />,
  },
  {
    name: 'Marcas',
    slug: 'marcas',
    icon: <Lifebuoy size={16} weight="duotone" />,
  },
  {
    name: 'Produtos',
    slug: 'produtos',
    icon: <Armchair size={16} weight="duotone" />,
  },
  {
    name: 'Pedidos',
    slug: 'pedidos',
    icon: <ArchiveBox size={16} weight="duotone" />,
  },
  {
    name: 'Mensagens',
    slug: 'mensagens',
    icon: <ChatDots size={16} weight="duotone" />,
  },
  {
    name: 'Layout',
    slug: 'layout',
    icon: <Layout size={16} weight="duotone" />,
  },
  {
    name: 'Ofertas/Cupons',
    slug: 'ofertas',
    icon: <CurrencyCircleDollar size={16} weight="duotone" />,
  },
  ...((isStore || isAdmin) && [
    {
      name: 'Colaboradores',
      slug: 'colaboradores',
      icon: <UsersThree size={16} weight="duotone" />,
    },
  ]),
  ...(isStore && [
    {
      name: 'Loja',
      slug: 'loja',
      icon: <Storefront size={16} weight="duotone" />,
    },
    {
      name: 'Administradores',
      slug: 'administradores',
      icon: <UserCircleGear size={16} weight="duotone" />,
    },
  ]),
  ...((isAdmin || isEmployee) && [
    {
      name: 'Perfil',
      slug: 'perfil',
      icon: <IdentificationCard size={16} weight="duotone" />,
    },
  ]),
  {
    name: 'Sair',
    slug: '/',
    icon: <SignOut size={16} weight="duotone" />,
  },
]
