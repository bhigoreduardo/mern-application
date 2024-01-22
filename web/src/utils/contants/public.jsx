import ReactStars from 'react-rating-stars-component'
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
} from 'phosphor-react'

import { currencyPrice } from '../format'
import Button from '../../app/components/ui/buttons/button'
import { OrderStatusEnum } from '../../types/public/enum-type'

// HOME
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
          src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
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
