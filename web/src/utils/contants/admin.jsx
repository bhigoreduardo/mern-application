import { Link } from 'react-router-dom'
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
  IdentificationBadge,
  ArrowRight,
} from 'phosphor-react'

import { mobileMask, zipCodeMask } from '../mask'

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

// CUSTOMERS
export const customerColumns = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row?.original?.image ? (
          <img
            className="h-6 w-6 rounded-full"
            src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
              row?.original?.image
            }`}
          />
        ) : (
          <IdentificationBadge size={16} weight="duotone" />
        )}

        <span className="font-semibold text-sm text-gray-900 capitalize">
          {row?.original?.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'whatsApp',
    header: 'Contato',
    cell: ({ row }) => mobileMask(row?.original?.whatsApp),
  },
  {
    accessorKey: 'address',
    header: 'Endereço',
    cell: ({ row }) => {
      return row?.original?.address ? (
        <div className="flex flex-col text-xs">
          <span>
            {row?.original?.address?.street},{' '}
            {row?.original?.address?.neighborhood} -{' '}
            {row?.original?.address?.number}
          </span>
          <span>
            {row?.original?.address?.city}/{row?.original?.address?.state},{' '}
            {zipCodeMask(row?.original?.address?.zipCode)}
          </span>
          <span>{row?.original?.address?.complement}</span>
        </div>
      ) : (
        <span>-</span>
      )
    },
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <Link
        to={`${row.original?._id}`}
        className="flex items-center gap-1 text-sm text-blue-500"
      >
        Vê detalhes <ArrowRight size={14} />
      </Link>
    ),
  },
]
