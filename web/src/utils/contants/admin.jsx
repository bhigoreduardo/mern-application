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
  PencilLine,
} from 'phosphor-react'
import ReactStars from 'react-rating-stars-component'

import { mobileMask, zipCodeMask } from '../mask'
import {
  createMarkup,
  currencyPrice,
  getOrderStatusColor,
  optionsShortLocaleDate,
  translateOrderStatus,
} from '../format'

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

export const colorColumns = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span
          className="w-6 h-6 rounded-full border border-gray-300"
          style={{ backgroundColor: row.original?.color }}
        />
        <span className="font-semibold text-gray-900 text-sm capitalize">
          {row.original?.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
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

export const brandColumns = [
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

export const productColumns = [
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
    accessorKey: 'sku',
    header: 'SKU',
    cell: ({ row }) => row?.original?.sku || '-',
  },
  {
    accessorKey: 'stock',
    header: 'Estoque',
    cell: ({ row }) =>
      row?.original?.productData?.inventory?.info?.reduce(
        (acc, cur) => cur.stock + acc,
        0
      ),
  },
  {
    accessorKey: 'price',
    header: 'Preço',
    cell: ({ row }) => (
      <div className="flex flex-col text-xs">
        <p>
          <span className="font-semibold">Mínimo:</span>{' '}
          {currencyPrice.format(row?.original?.rangePrice?.min)}
        </p>
        <p>
          <span className="font-semibold">Médio:</span>{' '}
          {currencyPrice.format(row?.original?.rangePrice?.avg)}
        </p>
        <p>
          <span className="font-semibold">Máximo:</span>{' '}
          {currencyPrice.format(row?.original?.rangePrice?.max)}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'sales',
    header: 'Vendas',
    cell: ({ row }) =>
      row?.original?.sales ? (
        <span className="flex flex-col">
          {currencyPrice.format(row?.original?.amountSales)}
          <span className="text-xs">({row?.original?.sales}) unidades</span>
        </span>
      ) : (
        '-'
      ),
  },
  {
    accessorKey: 'reviews',
    header: 'Avaliações',
    cell: ({ row }) =>
      row?.original?.reviews ? (
        <span className="flex items-center gap-2">
          <ReactStars
            count={5}
            size={12}
            value={row?.original?.reviewsAvg?.avg}
            edit={false}
            activeColor="#FA8232"
          />
          <span className="text-xs">({row?.original?.reviews?.length})</span>
        </span>
      ) : (
        '-'
      ),
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

export const infoProductColumns = (handleEdit, handleDelete) => [
  {
    accessorKey: 'title',
    header: 'Título',
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
    cell: ({ row }) => (
      <span
        className="line-clamp-4"
        dangerouslySetInnerHTML={createMarkup(row?.original?.description)}
      />
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-sm text-blue-600">
        <button
          type="button"
          title="Editar"
          onClick={() => handleEdit(row?.index)}
        >
          <PencilLine size={16} />
        </button>
        <button
          type="button"
          title="Excluir"
          onClick={() => handleDelete(row?.index)}
          className="text-red-500"
        >
          <Trash size={16} />
        </button>
      </div>
    ),
  },
]

export const invetoryProductColumns = (handleEdit, handleDelete) => [
  {
    accessorKey: 'color',
    header: 'Cor',
  },
  {
    accessorKey: 'stock',
    header: 'Quantidade',
  },
  {
    accessorKey: 'price',
    header: 'Preço',
    cell: ({ row }) => currencyPrice.format(row?.original?.price),
  },
  {
    accessorKey: 'offer',
    header: 'Desconto',
    cell: ({ row }) =>
      row?.original?.offer?.offerValue ? (
        <div className="flex flex-col text-xs">
          <p>
            <span className="font-semibold">Desconto: </span>
            {row?.original?.offer?.offerType === 'percentage'
              ? `${row?.original?.offer?.offerValue}%`
              : currencyPrice.format(row?.original?.offer?.offerValue)}
          </p>
          <p>
            <span className="font-semibold">Preço: </span>
            {currencyPrice.format(row?.original?.offer?.offerPrice)}
          </p>
          {row?.original?.offer?.offerPriceDates[0] && (
            <p>
              <span className="font-semibold">Data criação: </span>
              {new Date(
                row?.original?.offer?.offerPriceDates[0]
              ).toLocaleDateString('pt-BR', optionsShortLocaleDate)}
            </p>
          )}
          {row?.original?.offer?.offerPriceDates[1] && (
            <p>
              <span className="font-semibold">Data expiração: </span>
              {new Date(
                row?.original?.offer?.offerPriceDates[1]
              ).toLocaleDateString('pt-BR', optionsShortLocaleDate)}
            </p>
          )}
        </div>
      ) : (
        '-'
      ),
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-sm text-blue-600">
        <button
          type="button"
          title="Editar"
          onClick={() => handleEdit(row?.index)}
        >
          <PencilLine size={16} />
        </button>
        <button
          type="button"
          title="Excluir"
          onClick={() => handleDelete(row?.index)}
          className="text-red-500"
        >
          <Trash size={16} />
        </button>
      </div>
    ),
  },
]

export const orderColumns = [
  {
    accessorKey: 'code',
    header: 'Código',
    cell: ({ row }) => (
      <span className="font-semibold text-sm text-gray-900">
        {row?.original?.code}
      </span>
    ),
  },
  {
    accessorKey: 'customer',
    header: 'Cliente',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row?.original?.image ? (
          <img
            src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
              row?.original?.customer?.user?.image
            }`}
            alt={row?.original?.customer?.name}
            className="h-6 w-6 rounded-full bg-gray-500 object-contain"
          />
        ) : (
          <IdentificationBadge size={16} weight="duotone" />
        )}

        <span className="font-semibold text-sm text-gray-900">
          {row?.original?.customer?.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const history = row?.original?.status?.slice(-1)[0]?.history

      return (
        <span
          className={`font-semibold uppercase ${getOrderStatusColor(history)}`}
        >
          {translateOrderStatus(history)}
        </span>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Data',
    cell: ({ row }) =>
      new Date(row?.original?.createdAt).toLocaleDateString(
        'pt-BR',
        optionsShortLocaleDate
      ),
  },
  {
    accessorKey: 'amount',
    header: 'Total',
    cell: ({ row }) => (
      <span>
        {currencyPrice.format(row?.original?.payment?.amount)} (
        {row?.original?.payment?.cartQuantity})
      </span>
    ),
  },
  {
    accessorKey: 'payment',
    header: 'Forma de pagamento',
    cell: ({ row }) => row?.original?.payment?.method?.method,
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
