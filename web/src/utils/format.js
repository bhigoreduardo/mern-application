import { BadgeEnum } from '../types/public/enum-type'

export const mergeClassName = (first, last) => `${first} ${last}`

export const comparePathname = (pathname, cur) => pathname === cur

export const currencyPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const getBadgeClassName = (badge) => {
  switch (badge) {
    case BadgeEnum.Offer:
      return 'bg-green-500'
    case BadgeEnum.Hot:
      return 'bg-red-500'
    case BadgeEnum.Discount:
      return 'bg-yellow-500'
    case BadgeEnum.Saller:
      return 'bg-blue-500'
    case BadgeEnum.Out:
      return 'bg-gray-400'
    default:
      return null
  }
}

export const translateBadge = (badge, value) => {
  switch (badge) {
    case BadgeEnum.Offer:
      return `${value}% Off`
    case BadgeEnum.Hot:
      return 'Quente'
    case BadgeEnum.Discount:
      return 'Oferta'
    case BadgeEnum.Saller:
      return 'Mais vendidos'
    case BadgeEnum.Out:
      return 'Fora de estoque'
    default:
      return null
  }
}

export const parsedSelectData = (arr, value, label, otherProps) =>
  arr.map((item) => ({
    value: item?.[value],
    label: item?.[label],
    ...(otherProps !== undefined &&
      otherProps.map((i) => ({ [i]: item?.[i] })))[0],
  }))
