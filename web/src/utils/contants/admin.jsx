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
  CreditCard,
  Bag,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  YoutubeLogo,
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
import { OfferEnum } from '../../types/public/enum-type'
import { DiscountEnum } from '../../types/admin/enum-type'
import { IncomeEnum, UserEnum } from '../../types/enum-type'
import config from '../../config'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

// SIDEBAR
export const pages = (_type) => [
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
  ...(_type === UserEnum.Store || _type === UserEnum.Admin
    ? [
        {
          name: 'Colaboradores',
          slug: 'colaboradores',
          icon: <UsersThree size={16} weight="duotone" />,
        },
      ]
    : []),
  ...(_type === UserEnum.Store
    ? [
        {
          name: 'Loja',
          slug: 'configuracao',
          icon: <Storefront size={16} weight="duotone" />,
        },
        {
          name: 'Administradores',
          slug: 'administradores',
          icon: <UserCircleGear size={16} weight="duotone" />,
        },
      ]
    : []),
  ...(_type === UserEnum.Admin || _type === UserEnum.Employee
    ? [
        {
          name: 'Perfil',
          slug: 'perfil',
          icon: <IdentificationCard size={16} weight="duotone" />,
        },
      ]
    : []),
  {
    name: 'Sair',
    slug: '/',
    icon: <SignOut size={16} weight="duotone" />,
  },
]

// HOME
export const incomes = [
  {
    _type: IncomeEnum.Cash,
    title: 'Vendas do dia',
    amount: 34152.99,
    icon: (
      <CurrencyCircleDollar
        size={30}
        weight="duotone"
        className="text-orange-500"
      />
    ),
  },
  {
    _type: IncomeEnum.Cash,
    title: 'Vendas do mês',
    amount: 360894.87,
    icon: <CreditCard size={30} weight="duotone" className="text-orange-500" />,
  },
  {
    _type: IncomeEnum.Units,
    title: 'Pedidos do dia',
    amount: 36894,
    icon: <Bag size={30} weight="duotone" className="text-orange-500" />,
  },
  {
    _type: IncomeEnum.Units,
    title: 'Produtos vendidos do dia',
    amount: 4152,
    icon: <Armchair size={30} weight="duotone" className="text-orange-500" />,
  },
]

export const socialTraffic = [
  {
    name: 'Facebook',
    amount: 153100,
    icon: <FacebookLogo size={16} weight="duotone" className="text-blue-500" />,
  },
  {
    name: 'Instagram',
    amount: 234100,
    icon: (
      <InstagramLogo size={16} weight="duotone" className="text-orange-500" />
    ),
  },
  {
    name: 'Twitter',
    amount: 554100,
    icon: <TwitterLogo size={16} weight="duotone" className="text-blue-500" />,
  },
  {
    name: 'LinkedIn',
    amount: 134100,
    icon: <LinkedinLogo size={16} weight="duotone" className="text-blue-500" />,
  },
  {
    name: 'YouTube',
    amount: 153100,
    icon: <YoutubeLogo size={16} weight="duotone" className="text-red-500" />,
  },
]

export const socialColumns = [
  {
    accessorKey: 'source',
    header: 'Origem',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row?.original?.icon}
        <span className="font-thin text-base text-gray-900">
          {row?.original.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Visitantes',
    cell: ({ row }) => (
      <span className="font-semibold text-base text-gray-600">
        {row?.original?.amount}
      </span>
    ),
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
            src={`${serverPublicImages}/${row?.original?.image}`}
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
          src={`${serverPublicImages}/${row?.original?.image}`}
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
    cell: ({ row }) => (
      <span className="line-clamp-3">{row?.original?.description || '-'}</span>
    ),
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
          src={`${serverPublicImages}/${row?.original?.productData?.media?.cover}`}
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
    cell: ({ row }) => (
      <span className="line-clamp-3">{row?.original?.description || '-'}</span>
    ),
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
          src={`${serverPublicImages}/${row?.original?.image}`}
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
    cell: ({ row }) => (
      <span className="line-clamp-3">{row?.original?.description || '-'}</span>
    ),
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
          src={`${serverPublicImages}/${row?.original?.productData?.media?.cover}`}
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
    header: () => <span className="xl:inline-block hidden">SKU</span>,
    cell: ({ row }) => (
      <span className="xl:inline-block hidden">
        {row?.original?.sku || '-'}
      </span>
    ),
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

// ODERS
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
            src={`${serverPublicImages}/${row?.original?.customer?.user?.image}`}
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
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-semibold line-clamp-1 capitalize">
          {row?.original?.payment?.method?.method}
        </span>
        {row?.original?.payment?.method?.availableInstallments ? (
          <small>
            {row?.original?.payment?.installments?.installments}x +{' '}
            {row?.original?.payment?.installments?.fee}%
          </small>
        ) : (
          <small>à vista</small>
        )}
      </div>
    ),
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

// USER
export const userColumns = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row?.original?.image ? (
          <img
            className="h-6 w-6 rounded-full"
            src={`${serverPublicImages}/${row?.original?.image}`}
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
        '-'
      )
    },
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

export const paymentColumns = (handleEdit, handleDelete) => [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          className="h-6 w-6 rounded-full"
          src={
            typeof row?.original?.image === 'string'
              ? `${serverPublicImages}/${row?.original?.image}`
              : window.URL.createObjectURL(row?.original?.image)
          }
        />
        <span className="font-semibold text-sm text-gray-900 capitalize">
          {row?.original?.method}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
    cell: ({ row }) =>
      row?.original?.availableInstallments ? (
        <div className="flex flex-col text-xs">
          {row?.original?.infoInstallments?.map((item, i) => (
            <span key={i}>
              {item.installments}x{' '}
              {Number(item.fee) !== 0 ? `+ ${item.fee}%a.m.` : 'sem juros'}
            </span>
          ))}
        </div>
      ) : (
        'à vista'
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
          onClick={() => handleEdit(row?.index, row?.original?._id)}
        >
          <PencilLine size={16} />
        </button>
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

// OFFER
export const offerColumns = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => (
      <span className="font-semibold">{row?.original?.name}</span>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) =>
      row?.original?.status ? (
        <span className="font-semibold text-green-500 uppercase">Ativo</span>
      ) : (
        <span className="font-semibold text-red-500 uppercase">Inativo</span>
      ),
  },
  {
    accessorKey: 'discount',
    header: 'Tipo Desconto',
    cell: ({ row }) =>
      row?.original?.discountType === DiscountEnum.Coupon ? (
        <span className="font-semibold text-green-500 uppercase">Cupom</span>
      ) : (
        <span className="font-semibold text-red-500 uppercase">Oferta</span>
      ),
  },
  {
    accessorKey: 'offerValue',
    header: 'Valor desconto',
    cell: ({ row }) =>
      row?.original?.offerType === OfferEnum.Percentage
        ? `${row?.original?.offerValue}%`
        : currencyPrice.format(row?.original?.offerValue),
  },
  {
    accessorKey: 'expiresIn',
    header: 'Data limite',
    cell: ({ row }) => (
      <div className="flex flex-col">
        {row?.original?.offerPriceDates[0] && (
          <p>
            <span className="font-semibold">Data criação: </span>
            {new Date(row?.original?.offerPriceDates[0]).toLocaleDateString(
              'pt-BR',
              optionsShortLocaleDate
            )}
          </p>
        )}
        {row?.original?.offerPriceDates[1] && (
          <p>
            <span className="font-semibold">Data expiração: </span>
            {new Date(row?.original?.offerPriceDates[1]).toLocaleDateString(
              'pt-BR',
              optionsShortLocaleDate
            )}
          </p>
        )}
      </div>
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

export const offerProductColumns = (handleDelete) => [
  {
    accessorKey: 'product',
    header: 'Produto',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={`${serverPublicImages}/${row?.original?.productData?.media?.cover}`}
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

// LAYOUT
export const layoutColumns = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => (
      <span className="font-semibold">{row?.original?.name}</span>
    ),
  },
  {
    accessorKey: 'updatedAt',
    header: 'Data de atualização',
    cell: ({ row }) =>
      new Date(row?.original?.updatedAt).toLocaleDateString(
        'pt-BR',
        optionsShortLocaleDate
      ),
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <Link
        to={`${row.original?.slug}`}
        className="flex items-center gap-1 text-sm text-blue-500"
      >
        Vê detalhes <ArrowRight size={14} />
      </Link>
    ),
  },
]
