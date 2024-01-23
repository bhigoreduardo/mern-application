export const calculatePercentage = (min, max) =>
  min !== 0 && max > 0 ? Math.ceil((1 - min / max) * 100) : 0

export const cartCalculate = (cartItems) => {
  let subAmount = 0
  let shippingFee = 0
  let discount = 0

  cartItems.forEach((item) => {
    subAmount += item.price * item.quantity
    shippingFee += item.fee * item.quantity
    discount += item.regularPrice * item.quantity
  })

  return { subAmount, shippingFee, discount }
}
