import DOMPurify from 'dompurify'
import truncHtml from 'trunc-html'

import { BadgeEnum, OrderStatusEnum } from '../types/public/enum-type'

export const mergeClassName = (first, last) => `${first} ${last}`

export const comparePathname = (pathname, cur) => pathname === cur

export const currencyPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const toCapitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const sanitizeSelectData = (parsedData, arr) =>
  parsedData.filter((item) => !arr.includes(item.value))

export const makeArrTree = (arr, parent) => {
  const node = []
  arr
    .filter((item) => item.parent === parent)
    .forEach((item) =>
      node.push({ ...item, children: makeArrTree(arr, item._id) })
    )

  return node
}

export const regexCaseIgnore = (search, value) => {
  const regex = new RegExp(search, 'i')
  return regex.test(value)
}

export const updateSearchParams = (type, value) => {
  const searchParams = new URLSearchParams(window.location.search)
  value?.length > 0 ? searchParams.set(type, value) : searchParams.delete(type)
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}

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

export function createMarkup(html, limit) {
  if (limit) {
    return {
      __html: DOMPurify.sanitize(truncHtml(html, limit).html),
    }
  }

  return {
    __html: DOMPurify.sanitize(html),
  }
}

export const optionsFullLocaleDate = (isWeek = true) => ({
  ...(!isWeek ? '' : { weekday: 'long' }),
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export const optionsShortLocaleDate = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
}

export const getOrderStatusColor = (orderStatus) => {
  switch (orderStatus) {
    case OrderStatusEnum.Created:
      return 'text-blue-500'
    case OrderStatusEnum.Pending:
      return 'text-purple-500'
    case OrderStatusEnum.Paid:
      return 'text-lime-500'
    case OrderStatusEnum.Canceled:
      return 'text-red-500'
    case OrderStatusEnum.Progress:
      return 'text-orange-500'
    case OrderStatusEnum.Traffic:
      return 'text-fuchsia-500'
    case OrderStatusEnum.Delivered:
      return 'text-green-500'
  }
}

export const translateOrderStatus = (orderStatus) => {
  switch (orderStatus) {
    case OrderStatusEnum.Created:
      return 'Criado'
    case OrderStatusEnum.Pending:
      return 'Pendente'
    case OrderStatusEnum.Paid:
      return 'Pago'
    case OrderStatusEnum.Canceled:
      return 'Cancelado'
    case OrderStatusEnum.Progress:
      return 'Embalando'
    case OrderStatusEnum.Traffic:
      return 'Em trânsito'
    case OrderStatusEnum.Delivered:
      return 'Entregue'
  }
}
