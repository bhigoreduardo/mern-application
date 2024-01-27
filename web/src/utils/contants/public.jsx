import ReactStars from 'react-rating-stars-component'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  House,
  Storefront,
  MapPinLine,
  ArrowsCounterClockwise,
  Headphones,
  Note,
  Package,
  Trophy,
  CreditCard,
  Notepad,
  WarningCircle,
  CheckCircle,
  Truck,
  Handshake,
  XCircle,
  ShoppingCartSimple,
  Heart,
  Stack,
  Notebook,
  ClockClockwise,
  Gear,
  SignOut,
  Rocket,
  Receipt,
  ArrowRight,
  PhoneCall,
  ChatCircleDots,
} from 'phosphor-react'

import {
  currencyPrice,
  getOrderStatusColor,
  optionsShortLocaleDate,
  translateOrderStatus,
} from '../format'
import { OrderStatusEnum } from '../../types/public/enum-type'
import config from '../../config'
import Button from '../../app/components/ui/buttons/button'
import ReviewStar from '../../app/components/ui/common/review-star'
import Count from '../../app/components/ui/buttons/count'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

// HEADER
export const pages = [
  {
    name: 'Início',
    slug: '/',
    icon: <House size={16} weight="duotone" />,
  },
  {
    name: 'Loja',
    slug: '/loja',
    icon: <Storefront size={16} weight="duotone" />,
  },
  {
    name: 'Rastrear',
    slug: '/rastrear',
    icon: <MapPinLine size={16} weight="duotone" />,
  },
  {
    name: 'Compare',
    slug: '/compare',
    icon: <ArrowsCounterClockwise size={16} weight="duotone" />,
  },
  {
    name: 'Contato',
    slug: '/contato',
    icon: <Headphones size={16} weight="duotone" />,
  },
  {
    name: 'Sobre',
    slug: '/sobre',
    icon: <Note size={16} weight="duotone" />,
  },
]

// HOME
export const features = [
  {
    icon: <Package size={40} weight="duotone" className="text-gray-900" />,
    title: 'Entrega rápida',
    description: 'Entrega em 24h',
  },
  {
    icon: <Trophy size={40} weight="duotone" className="text-gray-900" />,
    title: 'Qualidade',
    description: 'Qualidade a preço justo',
  },
  {
    icon: <CreditCard size={40} weight="duotone" className="text-gray-900" />,
    title: 'Facilidade Pagamento',
    description: 'Encontra a melhor forma',
  },
  {
    icon: <Headphones size={40} weight="duotone" className="text-gray-900" />,
    title: 'Suporte',
    description: 'Suporte para contato',
  },
]

// PRODUCT
export const productInformationItems = [
  {
    label: 'Descrição',
    value: 'description',
  },
  {
    label: 'Informações adicionais',
    value: 'additional',
  },
  {
    label: 'Especificações',
    value: 'specification',
  },
  {
    label: 'Avaliações',
    value: 'reviews',
  },
]

export const productRelatedItems = [
  {
    label: 'Produtos relacionados',
    value: 'related',
  },
  {
    label: 'Mais vendidos',
    value: 'saller',
  },
  {
    label: 'Veja também',
    value: 'random',
  },
  {
    label: 'Novidades',
    value: 'news',
  },
]

export const compareColumns = (handleProduct, favorits) => [
  {
    accessorKey: 'product',
    header: 'Produto',
    cell: ({ row }) => (
      <div className="flex flex-col gap-3">
        <Button
          className="text-gray-400 hover:text-red-500 !p-0 flex-row-reverse"
          onClick={() =>
            handleProduct('/customers/toggle-compare', row?.original?._id)
          }
        >
          <XCircle size={20} weight="duotone" />
        </Button>
        <img
          src={`${serverPublicImages}/${
            row?.original?.productData?.media?.cover
          }`}
          alt={row?.original?.name}
          className="w-64 h-64 object-cover"
        />
        <p className="flex flex-col">
          <span className="font-semibold text-base text-gray-900">
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
        <div className="flex items-center gap-1">
          <Link
            to={`/produto/${row.original?._id}`}
            title="Comprar"
            className="w-full flex items-center justify-center gap-2 font-semibold text-sm text-white bg-orange-500 hover:bg-orange-600 duration-300 ease-in-out py-2 px-3 uppercase rounded-sm"
          >
            Comprar <ShoppingCartSimple size={18} />
          </Link>
          <Button
            title="Favoritar"
            className={`hover:text-white hover:bg-orange-500 h-9 !px-2 border-[2px] hover:!border-orange-500 ${
              favorits.includes(row?.original?._id)
                ? 'text-white bg-orange-500 !border-orange-500'
                : 'text-orange-500 !border-orange-200'
            }`}
            onClick={() =>
              handleProduct('/customers/toggle-favorite', row?.original?._id)
            }
          >
            <Heart size={20} weight="duotone" />
          </Button>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'reviews',
    header: 'Avaliações',
    cell: ({ row }) => (
      <ReviewStar
        reviewsAvg={row?.original?.reviewsAvg}
        reviews={row?.original?.reviews}
      />
    ),
  },
  {
    accessorKey: 'price',
    header: 'Preço',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span className="text-gray-400 line-through">
          {currencyPrice.format(row?.original?.rangePrice?.max)}
        </span>
        <span className="text-blue-500">
          {currencyPrice.format(row?.original?.rangePrice?.min)}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Ano publicação',
    cell: ({ row }) => new Date(row?.original?.createdAt).getFullYear(),
  },
  {
    accessorKey: 'brand',
    header: 'Marca',
    cell: ({ row }) => row?.original?.brand?.name,
  },
  {
    accessorKey: 'status',
    header: 'Disponibilidade',
    cell: ({ row }) => (
      <span
        className={`font-semibold uppercase text-sm ${
          row?.original?.status ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {row?.original?.status ? 'Em estoque' : 'Fora de estoque'}
      </span>
    ),
  },
  {
    accessorKey: 'size',
    header: 'Dimensões',
    cell: ({ row }) => (
      <span>
        {row?.original?.productData?.shippingInfo?.height} x{' '}
        {row?.original?.productData?.shippingInfo?.length} x{' '}
        {row?.original?.productData?.shippingInfo?.width} cm
      </span>
    ),
  },
  {
    accessorKey: 'weight',
    header: 'Peso',
    cell: ({ row }) => (
      <span>{row?.original?.productData?.shippingInfo?.weight} kg</span>
    ),
  },
  {
    accessorKey: 'timeDelivery',
    header: 'Entrega',
    cell: ({ row }) => (
      <span>{row?.original?.productData?.shippingInfo?.timeDelivery} dias</span>
    ),
  },
  {
    accessorKey: 'fee',
    header: 'Frete',
    cell: ({ row }) => (
      <span>
        {row?.original?.productData?.shippingInfo?.isFree
          ? 'Frete grátis'
          : currencyPrice.format(row?.original?.productData?.shippingInfo?.fee)}
      </span>
    ),
  },
]

export const wishlistColumns = (handleProduct) => [
  {
    accessorKey: 'product',
    header: 'Produto',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={`${serverPublicImages}/${
            row?.original?.productData?.media?.cover
          }`}
          alt={row?.original?.name}
          className="w-16 h-16 object-cover"
        />
        <p className="flex flex-col">
          <span className="font-normal text-sm text-blue-500">
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
    accessorKey: 'price',
    header: 'Preço',
    cell: ({ row }) => (
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-gray-400 line-through">
            {currencyPrice.format(row?.original?.rangePrice?.max)}
          </span>
          <span className="text-blue-500">
            {currencyPrice.format(row?.original?.rangePrice?.min)}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Disponibilidade',
    cell: ({ row }) => (
      <span
        className={`font-semibold uppercase text-sm ${
          row?.original?.status ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {row?.original?.status ? 'Em estoque' : 'Fora de estoque'}
      </span>
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Link
          to={`/produto/${row.original?._id}`}
          title="Comprar"
          className="flex items-center gap-1 font-semibold text-sm text-white bg-orange-500 hover:bg-orange-600 duration-300 ease-in-out py-2 px-3 uppercase rounded-sm"
        >
          Comprar <ShoppingCartSimple size={14} />
        </Link>
        <Button
          title="Remover favorito"
          className="text-gray-400 hover:text-red-500 !p-0 flex-row-reverse"
          onClick={() => handleProduct(row?.original?._id)}
        >
          <XCircle size={20} weight="duotone" />
        </Button>
      </div>
    ),
  },
]

// ORDER
export const orderStatusIconItems = [
  {
    icon: <Notepad size={25} weight="duotone" />,
    label: 'Pedido criado',
    colorIcon: 'blue',
  },
  {
    icon: <WarningCircle size={25} weight="duotone" />,
    label: 'Pendente',
    colorIcon: 'purple',
  },
  {
    icon: <CheckCircle size={25} weight="duotone" />,
    label: 'Pago',
    colorIcon: 'lime',
  },
  {
    icon: <Package size={25} weight="duotone" />,
    label: 'Embalando',
    colorIcon: 'orange',
  },
  {
    icon: <Truck size={25} weight="duotone" />,
    label: 'Em trânsito',
    colorIcon: 'fuchsia',
  },
  {
    icon: <Handshake size={25} weight="duotone" />,
    label: 'Entregue',
    colorIcon: 'green',
  },
]

export const cartOrderColumns = (handleReview, isAdmin) => [
  {
    accessorKey: 'product',
    header: 'Produto',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={`${serverPublicImages}/${
            row?.original?.cover
          }`}
          alt={row?.original?.name}
          className="w-16 h-16 object-cover"
        />
        <div className="flex flex-col gap-1">
          <h6 className="font-normal text-sm text-blue-500">
            {row?.original?.name}
          </h6>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-400">Cor:</span>
            <span
              className="inline-block w-4 h-4 rounded-full"
              style={{ backgroundColor: row?.original?.background }}
              title={row?.original?.colorName}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: 'Preço',
    cell: ({ row }) => (
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          {row?.original?.price !== row?.original?.regularPrice && (
            <span className="text-gray-400 line-through">
              {currencyPrice.format(row?.original?.regularPrice)}
            </span>
          )}
          <span className="text-blue-500">
            {currencyPrice.format(row?.original?.price)}
          </span>
        </div>
        {row?.original?.fee !== 0 && (
          <span className="text-xs text-gray-600">
            Frete: {currencyPrice.format(row?.original?.fee)}
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'quantity',
    header: 'Quantidade',
  },
  {
    accessorKey: 'subAmount',
    header: 'Sub-Total',
    cell: ({ row }) => currencyPrice.format(row?.original?.subAmount),
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) =>
      !isAdmin ? (
        <div className="relative w-full">
          <Button
            title="Avaliar"
            className="peer !gap-1 font-semibold text-sm text-orange-500 hover:bg-orange-500 hover:text-white !py-2 disabled:!bg-gray-200 disabled:!text-white"
            disabled={
              row?.original?.reviewd ||
              row?.original?.status?.slice(-1)[0]?.history !==
                OrderStatusEnum.Delivered
            }
            onClick={() => handleReview(row?.original?._id)}
          >
            Avaliar
          </Button>
          {row?.original?.reviewd && (
            <div className="absolute hidden peer-hover:block -top-[calc(100%+10px)] border border-gray-100 p-2 shadow-sm rounded-sm w-full bg-white">
              <span className="flex items-center text-xs text-gray-900">
                <ReactStars
                  count={5}
                  size={12}
                  value={row?.original?.review?.stars}
                  edit={false}
                  activeColor="#FA8232"
                />
                ({row?.original?.review?.stars})
              </span>
              <p className="text-sm text-gray-600">
                {row?.original?.review?.description}
              </p>
            </div>
          )}
        </div>
      ) : (
        '-'
      ),
  },
]

export const cartColumns = (handleDelete, handleDecrease, handleIncrease) => [
  {
    accessorKey: 'product',
    header: 'Produto',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() =>
            handleDelete(row?.original?.product, row?.original?.color)
          }
          className="text-gray-400 hover:text-red-500"
        >
          <XCircle size={20} weight="duotone" />
        </button>
        <img
          src={`${serverPublicImages}/${
            row?.original?.cover
          }`}
          alt={row?.original?.name}
          className="w-16 h-16 object-cover"
        />
        <div className="flex flex-col gap-1">
          <h6 className="font-normal text-sm text-gray-900">
            {row?.original?.name}
          </h6>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-400">Cor:</span>
            <span
              className="inline-block w-4 h-4 rounded-full"
              style={{ backgroundColor: row?.original?.background }}
              title={row?.original?.colorName}
            />
          </div>
          <p className="text-xs text-gray-600">
            <span className="font-semibold">Estoque:</span>{' '}
            {row?.original?.stock}
          </p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: 'Preço',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        {row?.original?.price !== row?.original?.regularPrice && (
          <span className="text-gray-400 line-through">
            {currencyPrice.format(row?.original?.regularPrice)}
          </span>
        )}
        <span className="text-blue-500">
          {currencyPrice.format(row?.original?.price)}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'quantity',
    header: 'Quantidade',
    cell: ({ row }) => (
      <Count
        handleDecrease={() =>
          handleDecrease(row?.original?.product, row?.original?.color)
        }
        handleIncrease={() =>
          handleIncrease(row?.original?.product, row?.original?.color)
        }
        value={row?.original?.quantity}
        className="w-[140px]"
      />
    ),
  },
  {
    accessorKey: 'subAmount',
    header: 'Sub-Total',
    cell: ({ row }) =>
      currencyPrice.format(row?.original?.price * row?.original?.quantity),
  },
]

export const orderColumns = (endpoint) => [
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
        to={`${endpoint}/${row.original?._id}`}
        className="flex items-center gap-1 text-sm text-blue-500"
      >
        Vê detalhes <ArrowRight size={14} />
      </Link>
    ),
  },
]

// ACCOUNT
export const accountPagesItems = [
  {
    name: 'Conta',
    slug: '/conta',
    icon: <Stack size={16} weight="duotone" />,
  },
  {
    name: 'Pedidos',
    slug: 'pedidos',
    icon: <Storefront size={16} weight="duotone" />,
  },
  {
    name: 'Rastrear',
    slug: '/rastrear',
    icon: <MapPinLine size={16} weight="duotone" />,
  },
  {
    name: 'Carrinho',
    slug: '/carrinho',
    icon: <ShoppingCartSimple size={16} weight="duotone" />,
  },
  {
    name: 'Favoritos',
    slug: '/favoritos',
    icon: <Heart size={16} weight="duotone" />,
  },
  {
    name: 'Compare',
    slug: '/compare',
    icon: <ArrowsCounterClockwise size={16} weight="duotone" />,
  },
  {
    name: 'Endereço',
    slug: 'endereco',
    icon: <Notebook size={16} weight="duotone" />,
  },
  {
    name: 'Histórico',
    slug: 'historico',
    icon: <ClockClockwise size={16} weight="duotone" />,
  },
  {
    name: 'Configuração',
    slug: 'configuracao',
    icon: <Gear size={16} weight="duotone" />,
  },
  {
    name: 'Sair',
    slug: '/',
    icon: <SignOut size={16} weight="duotone" className="text-red-500" />,
  },
]

export const latested = [
  {
    icon: <Rocket size={20} className="text-blue-500" />,
    value: 10,
    description: 'Total Pedidos',
    className: 'bg-blue-50',
  },
  {
    icon: <Receipt size={20} className="text-orange-500" />,
    value: 10,
    description: 'Pedidos Pendetes',
    className: 'bg-orange-50',
  },
  {
    icon: <Package size={20} className="text-green-500" />,
    value: 10,
    description: 'Pedidos Entregue',
    className: 'bg-green-50',
  },
]

// CONTACT
export const contactItems = [
  {
    _type: 'mobile',
    icon: (
      <div className="bg-blue-50 sm:p-6 p-2 h-fit rounded-sm">
        <PhoneCall size={48} className="text-blue-600" weight="duotone" />
      </div>
    ),
    title: 'Ligue para nós',
    description: 'nossos horários de funcionamento são das 9h até 17h',
    contact: '11997533598',
    button: (
      <Button className="bg-blue-500 hover:bg-blue-600 text-white uppercase lg:w-fit w-full">
        Ligar
        <ArrowRight size={20} />
      </Button>
    ),
  },
  {
    _type: 'email',
    icon: (
      <div className="bg-green-50 sm:p-6 p-2 h-fit rounded-sm">
        <ChatCircleDots size={48} className="text-green-600" weight="duotone" />
      </div>
    ),
    title: 'Conversar no WhatsApp',
    description: 'nossos horários de funcionamento são das 9h até 17h',
    contact: 'furniture@contato.com',
    button: (
      <Button className="bg-green-500 hover:bg-green-600 text-white uppercase lg:w-fit w-full">
        WhatsApp
        <ArrowRight size={20} />
      </Button>
    ),
  },
]
