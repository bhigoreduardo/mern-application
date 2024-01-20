import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

import { currencyPrice } from '../../../../utils/format'
import Button from '../buttons/button'
import CartItem from '../cart-item'

/* eslint-disable react/prop-types */
export default function CartCard({ cartItems, setOpenCard }) {
  const navigate = useNavigate()
  const subAmount = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  )

  return (
    <article className="absolute right-0 top-[calc(100%+25px)] z-20 w-[400px] border border-gray-100 bg-white rounded-sm shadow-md py-6 px-6">
      <div className="flex flex-col gap-6">
        <h4 className="font-semibold text-base text-gray-900 border-b border-gray-200 pb-3">
          Carrinho <span className="font-normal">({cartItems?.length})</span>
        </h4>
        <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
          {cartItems.map((item, i) => (
            <CartItem key={i} cartItems={cartItems} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-3 border-t border-gray-200 pt-3">
          <p className="flex items-center justify-between text-sm text-gray-900">
            <span className="font-normal">Sub-Total:</span>
            <span className="font-semibold">
              {currencyPrice.format(subAmount)}
            </span>
          </p>
          <Button
            onClick={() => {
              setOpenCard(false)
              navigate('/finalizar-compra')
            }}
            className="bg-orange-500 text-white hover:bg-orange-600 uppercase"
          >
            Finalizar compra
            <ArrowRight size={20} className="text-white" />
          </Button>
          <Button
            onClick={() => {
              setOpenCard(false)
              navigate('/carrinho')
            }}
            className="bg-white text-orange-500 hover:text-white hover:bg-orange-600 uppercase !border-orange-200 hover:border-orange-600"
          >
            Carrinho
          </Button>
        </div>
      </div>
    </article>
  )
}
