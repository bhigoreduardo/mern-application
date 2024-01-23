import { useFormik } from 'formik'
import { ArrowRight } from 'phosphor-react'

import { cart, customer, payment } from '../../../../utils/mocks/public'
import { cartCalculate } from '../../../../utils/calculate'
import { currencyPrice } from '../../../../utils/format'
import {
  creditCardNumberMask,
  mobileMask,
  zipCodeMask,
} from '../../../../utils/mask'
import {
  checkoutInitialValues,
  checkoutValidationSchema,
} from '../../../../types/public/form-type'
import TextLabel from '../../ui/inputs/text/label'
import Radio from '../../ui/inputs/radio'
import TextAreaLabel from '../../ui/inputs/textarea/label'
import SelectLabel from '../../ui/inputs/select/label'
import CartItem from '../../ui/common/cart-item'
import HintIcon from '../../ui/icons/hint-icon'
import Button from '../../ui/buttons/button'

export default function Checkout() {
  const cartItems = new Array(10).fill(cart)
  const user = customer
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...checkoutInitialValues, ...user, cart: cartItems },
    validationSchema: checkoutValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })
  const { subAmount, shippingFee, discount } = cartCalculate(cartItems)
  const parsedInstallments = []
  const paymentFee = 10
  const handleSubmit = async (values) => console.log(values)
  const clearFieldValues = () => {}

  return (
    <form
      className="flex items-start gap-6 lg:flex-row flex-col"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-grow w-full flex flex-col gap-6">
        {/* PERSONAL INFORMATION */}
        <div className="flex flex-col gap-4 border border-gray-200 rounded-sm py-3">
          <h4 className="font-semibold text-base text-gray-900 border-b border-gray-200 px-6 pb-3">
            Informações de pagamento
          </h4>
          <div className="flex sm:flex-row flex-col gap-4 px-6">
            <TextLabel
              id="name"
              label="Nome"
              placeholder="Infome nome do cliente"
              name="name"
              error={formik.touched.name && formik.errors.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="flex-grow"
            />
            <TextLabel
              id="email"
              label="Email"
              type="email"
              placeholder="Informe o email do cliente"
              name="email"
              error={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="flex-grow"
            />
            <TextLabel
              id="whatsApp"
              label="WhatsApp"
              placeholder="Informe o whatsApp do cliente"
              name="whatsApp"
              error={formik.touched.whatsApp && formik.errors.whatsApp}
              onChange={(e) =>
                formik.setFieldValue('whatsApp', mobileMask(e.target.value))
              }
              onBlur={formik.handleBlur}
              value={mobileMask(formik.values.whatsApp)}
              className="flex-grow"
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-4 px-6">
            <TextLabel
              id="address.street"
              label="Rua"
              placeholder="Infome nome da rua"
              name="address.street"
              error={
                formik.touched?.address?.street &&
                formik.errors?.address?.street
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.address?.street}
              className="flex-grow"
            />
            <TextLabel
              id="address.neighborhood"
              label="Bairro"
              placeholder="Infome nome do bairro"
              name="address.neighborhood"
              error={
                formik.touched?.address?.neighborhood &&
                formik.errors?.address?.neighborhood
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.address?.neighborhood}
              className="flex-grow"
            />
            <TextLabel
              id="address.city"
              label="Cidade"
              placeholder="Infome nome da cidade"
              name="address.city"
              error={
                formik.touched?.address?.city && formik.errors?.address?.city
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.address?.city}
              className="flex-grow"
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-4 px-6">
            <TextLabel
              id="address.state"
              label="Estado"
              placeholder="Infome nome do estado"
              name="address.state"
              error={
                formik.touched?.address?.state && formik.errors?.address?.state
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.address?.state}
              className="flex-grow"
            />
            <TextLabel
              id="address.number"
              label="Número"
              placeholder="Infome o número do endereço"
              name="address.number"
              error={
                formik.touched?.address?.number &&
                formik.errors?.address?.number
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.address?.number}
              className="flex-grow"
            />
            <TextLabel
              id="address.zipCode"
              label="CEP"
              placeholder="Infome o CEP"
              name="address.zipCode"
              error={
                formik.touched?.address?.zipCode &&
                formik.errors?.address?.zipCode
              }
              onChange={(e) =>
                formik.setFieldValue(
                  'address.zipCode',
                  zipCodeMask(e.target.value)
                )
              }
              onBlur={formik.handleBlur}
              value={zipCodeMask(formik.values?.address?.zipCode)}
              className="flex-grow"
            />
            <TextLabel
              id="address.complement"
              label="Complemento"
              placeholder="Infome o complemento"
              name="address.complement"
              error={
                formik.touched?.address?.complement &&
                formik.errors?.address?.complement
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.address?.complement}
              className="flex-grow"
            />
          </div>
        </div>
        {/* PAYMENT INFORMATION */}
        <div className="flex flex-col gap-4 border border-gray-200 rounded-sm py-3">
          <h4 className="font-semibold text-base text-gray-900 border-b border-gray-200 px-6 pb-3">
            Método de pagamento
          </h4>
          <div className="flex items-center px-6 py-3">
            {payment?.map((item, i) => (
              <label
                key={item._id}
                htmlFor={item._id}
                className={`flex flex-col gap-1 justify-center items-center ${
                  payment.length !== i + 1 && 'border-r border-gray-200'
                } px-6`}
              >
                <img
                  src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
                    item.image
                  }`}
                  alt={item.method}
                  className="w-10 h-10 object-cover"
                />
                <span className="font-semibold text-sm text-gray-900">
                  {item.name}
                </span>
                <Radio
                  smallRadio
                  name="payment.method"
                  value={item._id}
                  onChange={({ target: { value } }) => {
                    formik.setFieldValue('payment.method', value)
                    formik.setFieldValue(
                      'payment.availableInstallments',
                      item.availableInstallments
                    )
                    clearFieldValues([
                      'payment.cardName',
                      'payment.cardNumber',
                      'payment.cardDate',
                      'payment.cardCvv',
                      'payment.installments',
                    ])
                  }}
                />
              </label>
            ))}
          </div>
          {formik.touched?.payment?.method &&
            formik.errors?.payment?.method && (
              <span className="text-xs text-red-500 px-6">
                {formik.errors?.payment?.method}
              </span>
            )}
          {formik.values?.payment?.availableInstallments && (
            <div className="flex flex-col gap-4 px-6 border-t border-gray-200 pt-3">
              <div className="flex sm:flex-row flex-col gap-4">
                <TextLabel
                  id="payment.cardName"
                  label="Nome no cartão"
                  placeholder="Infome nome escrito no cartão"
                  name="payment.cardName"
                  error={
                    formik.touched?.payment?.cardName &&
                    formik.errors?.payment?.cardName
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values?.payment?.cardName}
                  className="flex-grow"
                />
                <TextLabel
                  id="payment.cardNumber"
                  label="Número do cartão"
                  placeholder="Infome número escrito no cartão"
                  name="payment.cardNumber"
                  error={
                    formik.touched?.payment?.cardNumber &&
                    formik.errors?.payment?.cardNumber
                  }
                  onChange={(e) =>
                    formik.setFieldValue(
                      'payment.cardNumber',
                      creditCardNumberMask(e.target.value)
                    )
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values?.payment?.cardNumber}
                  className="flex-grow"
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <TextLabel
                  type="date"
                  id="payment.cardDate"
                  label="Data de validade"
                  placeholder="Infome data de validade escrito no cartão"
                  name="payment.cardDate"
                  error={
                    formik.touched?.payment?.cardDate &&
                    formik.errors?.payment?.cardDate
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values?.payment?.cardDate}
                  className="flex-grow"
                />
                <TextLabel
                  id="payment.cardCvv"
                  label="CVV"
                  placeholder="Infome CVV escrito no cartão"
                  name="payment.cardCvv"
                  error={
                    formik.touched?.payment?.cardCvv &&
                    formik.errors?.payment?.cardCvv
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values?.payment?.cardCvv}
                  className="flex-grow"
                />
                <SelectLabel
                  id="payment.installments"
                  label="Parcelas"
                  name="payment.installments"
                  placeholder="Selecione"
                  data={parsedInstallments}
                  error={
                    formik.touched?.payment?.installments &&
                    formik.errors?.payment?.installments
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values?.payment?.installments}
                  className="flex-grow"
                />
              </div>
            </div>
          )}
        </div>
        {/* OBS */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-base text-gray-900">
            Informações adicionais
          </h4>
          <TextAreaLabel
            id="obs"
            label="Observação (opcional)"
            name="obs"
            placeholder="Observações sobre o pedido, ex: Embrulhar em papel presente"
            error={formik.touched.obs && formik.errors.obs}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.obs}
          />
        </div>
      </div>
      {/* REVIEW VALUES */}
      <div className="flex flex-col gap-6 lg:w-[400px] w-full">
        <div className="flex flex-col border border-gray-200 rounded-sm py-3 gap-4">
          <h4 className="font-semibold text-base text-gray-900 border-b border-gray-200 px-6 pb-3">
            Resumo do pedido
          </h4>
          <div className="lg:flex lg:flex-col grid sm:grid-cols-2 grid-cols-1 gap-4 max-h-[600px] overflow-y-auto px-6">
            {cartItems.map((item, i) => (
              <CartItem key={i} {...item} isCheckout />
            ))}
          </div>
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
            <div className="flex items-center justify-between text-xs text-gray-900">
              <span className="relative flex items-center gap-1 font-normal">
                Taxa: <HintIcon>Taxas de pagamentos</HintIcon>
              </span>
              <span className="font-semibold">
                {currencyPrice.format(subAmount * (paymentFee / 100))}
              </span>
            </div>
          </div>
          <p className="flex items-center justify-between text-sm text-gray-900 border-t border-gray-200 px-6 pt-3">
            <span className="font-normal">Total:</span>
            <span className="font-semibold">
              {currencyPrice.format(
                (subAmount + shippingFee) * (1 + paymentFee / 100)
              )}
            </span>
          </p>
          <Button
            type="submit"
            className="bg-orange-500 text-white hover:bg-orange-600 mx-6 uppercase"
          >
            Confirmar
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </form>
  )
}
