export const mergeClassName = (first, last) => `${first} ${last}`

export const comparePathname = (pathname, cur) => pathname === cur

export const currencyPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
