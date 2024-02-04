export const mergeClassName = (first, last) => `${first} ${last}`

export const makeArrTree = (arr, parent) => {
  const node = []
  arr
    .filter((item) => item.parent === parent)
    .forEach((item) =>
      node.push({ ...item, children: makeArrTree(arr, item._id) })
    )

  return node
}

export const currencyPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
