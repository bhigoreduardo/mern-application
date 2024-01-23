import { useNavigation } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import { cart } from '../../../../utils/mocks/public'
import { cartColumns } from '../../../../utils/contants/public'
import { cartCalculate } from '../../../../utils/calculate'
import { currencyPrice } from '../../../../utils/format'
import useApp from '../../../../hooks/use-app'
import Button from '../../ui/buttons/button'
import Container from '../../ui/common/container'
import TableData from '../../ui/table/data'
import TextLabel from '../../ui/inputs/text/label'

export default function CartItems() {
  const navigate = useNavigation()
  const { handleCartItems } = useApp()
  const cartItems = new Array(10).fill(cart)
  const { subAmount, shippingFee, discount } = cartCalculate(cartItems)
  const handleDelete = () => {}
  const handleDecrease = () => {}
  const handleIncrease = () => {}
  const handleClear = () => handleCartItems([])

  return (
    <Container className="flex items-start lg:flex-row flex-col gap-6 py-16">
      {/* PRODUCT LIST */}
      <div className="flex-grow w-full flex flex-col border border-gray-200 rounded-sm py-3">
        <h4 className="font-semibold text-base text-gray-900 border-b border-gray-200 px-6 pb-3">
          Carrinho <span className="font-normal">({cartItems?.length})</span>
        </h4>
        <TableData
          columns={cartColumns(handleDelete, handleDecrease, handleIncrease)}
          data={cartItems}
          className="border-none shadow-none !p-0 rounded-none"
        />
        <div className="flex items-center justify-between sm:flex-row flex-col gap-2 pt-3 px-6 border-t border-gray-200">
          <Button
            onClick={() => navigate('/')}
            className="flex-row-reverse text-blue-500 !border-blue-200 hover:bg-blue-600 hover:text-white uppercase sm:w-fit w-full"
          >
            Comprar mais
            <ArrowLeft size={16} />
          </Button>
          <Button
            onClick={handleClear}
            className="text-blue-500 !border-blue-200 hover:bg-blue-600 hover:text-white uppercase sm:w-fit w-full"
          >
            Limpar carrinho
          </Button>
        </div>
      </div>
      {/* REVIEW VALUES */}
      <div className="flex flex-col gap-6 lg:w-[400px] w-full">
        {/* AMOUNT */}
        <div className="flex flex-col border border-gray-200 rounded-sm py-3 gap-4">
          <h4 className="font-semibold text-base text-gray-900 border-b border-gray-200 px-6 pb-3">
            Total
          </h4>
          <div className="flex flex-col gap-2 px-6">
            <p className="flex items-center justify-between text-xs text-gray-900">
              <span className="font-normal">Sub-Total:</span>
              <span className="font-semibold">
                {currencyPrice.format(subAmount)}
              </span>
            </p>
            <p className="flex items-center justify-between text-xs text-gray-900">
              <span className="font-normal">Entrega:</span>
              <span className="font-semibold">
                {currencyPrice.format(shippingFee)}
              </span>
            </p>
            <p className="flex items-center justify-between text-xs text-gray-900">
              <span className="font-normal">Desconto:</span>
              <span className="font-semibold">
                {currencyPrice.format(discount - subAmount)}
              </span>
            </p>
          </div>
          <p className="flex items-center justify-between text-sm text-gray-900 border-t border-gray-200 px-6 pt-3">
            <span className="font-normal">Total:</span>
            <span className="font-semibold">
              {currencyPrice.format(subAmount + shippingFee)}
            </span>
          </p>
          <Button
            onClick={() => navigate('/finalizar-compra')}
            className="bg-orange-500 text-white hover:bg-orange-600 mx-6 uppercase"
          >
            Finalizar compra
            <ArrowRight size={20} />
          </Button>
        </div>
        {/* COUPON */}
        <div className="flex flex-col border border-gray-200 rounded-sm py-3 gap-4">
          <h4 className="font-semibold text-base text-gray-900 border-b border-gray-200 px-6 pb-3">
            Cupom de desconto
          </h4>
          <form
            // onSubmit={formik.handleSubmit}
            className="flex flex-col gap-3 px-6"
          >
            <TextLabel
              id="coupon"
              placeholder="Infome cupom de desconto"
              name="coupon"
              // error={formik.touched.name && formik.errors.name}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.name}
              className="flex-grow"
            />
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 w-fit !p-2 uppercase"
            >
              Aplicar
            </Button>
          </form>
        </div>
      </div>
    </Container>
  )
}
