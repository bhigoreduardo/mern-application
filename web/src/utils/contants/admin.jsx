import { Fragment } from 'react'
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
  Trash,
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

// PRODUCTS
export const categoryColumns = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
            row?.original?.image
          }`}
          alt={row?.original?.name}
          className="h-12 w-12 rounded-full bg-gray-500 object-contain"
        />
        <span>{row?.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
    cell: ({ row }) => row?.original?.description || '-',
  },
  {
    accessorKey: 'slug',
    header: 'Link',
    cell: ({ row }) => (
      <Link to={`/${row.original?.slug}`}>{row.original?.slug}</Link>
    ),
  },
  {
    accessorKey: 'products',
    header: 'Produtos',
    cell: ({ row }) =>
      row?.original?.products?.length > 0
        ? row?.original?.products?.length
        : '-',
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <Link
        to={`${row.original?._id}/editar`}
        className="flex items-center gap-1 text-sm text-blue-500"
      >
        Vê detalhes <ArrowRight size={14} />
      </Link>
    ),
  },
]

export const highlightProductColumns = (handleDelete) => [
  {
    accessorKey: 'product',
    header: 'Produto',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
            row?.original?.productData?.media?.cover
          }`}
          alt={row?.original?.name}
          className="h-14 w-14 rounded-full bg-gray-500 object-contain"
        />
        <p className="flex flex-col">
          <span className="font-semibold text-sm text-gray-900 line-clamp-1">
            {row?.original?.name}
          </span>
          <span className="text-xs">
            Categoria:{' '}
            {row?.original?.category?.map((item, i) => (
              <Fragment key={item._id}>
                {item.name}
                {row?.original?.category?.length === i + 1 ? '' : '/'}
              </Fragment>
            ))}
          </span>
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-sm text-blue-600">
        <button
          type="button"
          title="Excluir"
          onClick={() => handleDelete(row?.original?._id)}
          className="text-red-500"
        >
          <Trash size={16} />
        </button>
      </div>
    ),
  },
]
