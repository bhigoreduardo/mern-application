// USER
export const UserEnum = {
  Customer: 'customer',
  Store: 'store',
  Admin: 'admin',
  Employee: 'employee',
}

// PRODUCT
export const StepEnum = {
  Draft: 'draft',
  Completed: 'completed',
}

export const VisibilityEnum = {
  Private: 'private',
  Public: 'public',
}

export const OfferEnum = {
  Default: '',
  Percentage: 'percentage',
  Money: 'money',
}

export const BadgeEnum = {
  Offer: 'offer',
  Saller: 'saller',
  Out: 'out',
  Hot: 'hot',
  Discount: 'discount',
}

export const DiscountEnum = {
  Coupon: 'coupon',
  Offer: 'offer',
}

// ORDER
export const OrderStatusEnum = {
  Created: 'created',
  Pending: 'pending',
  Paid: 'paid',
  Progress: 'progress',
  Traffic: 'traffic',
  Delivered: 'delivered',
  Canceled: 'canceled',
}
