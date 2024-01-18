import {
  House,
  Storefront,
  MapPinLine,
  ArrowsCounterClockwise,
  Headphones,
  Note,
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
