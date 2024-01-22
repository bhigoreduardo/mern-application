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
} from 'phosphor-react'

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
