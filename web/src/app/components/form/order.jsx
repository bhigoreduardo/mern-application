/* eslint-disable react/prop-types */
import {
  MapPinLine,
  Notepad,
  WarningCircle,
  CheckCircle,
  XCircle,
  User,
  Checks,
} from 'phosphor-react'

import {
  currencyPrice,
  mergeClassName,
  optionsFullLocaleDate,
  optionsShortLocaleDate,
} from '../../../utils/format'
import { mobileMask, zipCodeMask } from '../../../utils/mask'
import { OrderStatusEnum } from '../../../types/public/enum-type'
import { cartOrderColumns } from '../../../utils/contants/public'
import ProcessCard from '../ui/cards/process-card'
import TableData from '../ui/table/data'

const getOrderHistoryStyle = (orderStatus) => {
  const node = { dateTime: orderStatus.dateTime }
  switch (orderStatus.history) {
    case OrderStatusEnum.Created:
      node.bgIcon = 'bg-blue-50'
      node.icon = <Notepad size={20} className="text-blue-500" />
      node.text = 'Pedido criado.'
      return node
    case OrderStatusEnum.Pending:
      node.bgIcon = 'bg-purple-50'
      node.icon = <WarningCircle size={20} className="text-purple-500" />
      node.text = 'Pagamento do pedido pendente.'
      return node
    case OrderStatusEnum.Paid:
      node.bgIcon = 'bg-lime-50'
      node.icon = <CheckCircle size={20} className="text-lime-500" />
      node.text = 'Pedido foi pago com sucesso.'
      return node
    case OrderStatusEnum.Canceled:
      node.bgIcon = 'bg-red-50'
      node.icon = <XCircle size={20} className="text-red-500" />
      node.text = 'Pedido cancelado.'
      return node
    case OrderStatusEnum.Progress:
      node.bgIcon = 'bg-orange-50'
      node.icon = <User size={20} className="text-orange-500" />
      node.text = 'Pedido está sendo empacotado.'
      return node
    case OrderStatusEnum.Traffic:
      node.bgIcon = 'bg-fuchsia-50'
      node.icon = <MapPinLine size={20} className="text-fuchsia-500" />
      node.text = 'Pedido está em trânsito para entrega.'
      return node
    case OrderStatusEnum.Delivered:
      node.bgIcon = 'bg-green-50'
      node.icon = <Checks size={20} className="text-green-500" />
      node.text =
        'Pedido foi entregue. Obrigado por comprar na Furniture eCommerce!'
      return node
  }
}

export default function Order({ data, isAdmin = false, className }) {
  const status = data?.status?.slice(-1)[0]?.history
  const createdAt = new Date(data?.createdAt)
  const timeDelivery = data?.cart?.reduce(
    (acc, cur) => acc + cur.timeDelivery,
    0
  )
  const orderHistory = data?.status?.map((item) => getOrderHistoryStyle(item))
  const customOptionsDate = {
    ...optionsFullLocaleDate(true),
    hour: 'numeric',
    minute: 'numeric',
  }
  const handleReview = () => {}

  return (
    <form
      className={mergeClassName(
        'flex flex-col gap-6 px-6 w-full mx-auto',
        className
      )}
    >
      {/* ORDER PROCESS */}
      <div className="flex flex-col gap-6 border-b border-gray-100 pb-6">
        <div className="flex sm:items-center justify-between sm:flex-row flex-col-reverse p-6 bg-yellow-50">
          <div className="flex flex-col gap-2">
            <h6 className="text-xl text-gray-900">#{data.code}</h6>
            <p className="flex md:items-center md:flex-row flex-col gap-2 text-sm text-gray-600">
              <span>{data?.payment?.cartQuantity} produtos</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full hidden md:inline-block" />
              <span>
                Data: {createdAt.toLocaleDateString('pt-BR', customOptionsDate)}
              </span>
            </p>
          </div>
          <h5 className="font-semibold text-3xl text-blue-500">
            {currencyPrice.format(data?.payment?.amount)}
          </h5>
        </div>
        <p className="text-sm text-gray-600">
          Entrega estimada para:{' '}
          <span className="font-semibold text-gray-900">
            {new Date(
              createdAt.setDate(createdAt.getDate() + timeDelivery)
            ).toLocaleDateString('pt-BR', optionsFullLocaleDate(false))}
          </span>
        </p>
        {status === OrderStatusEnum.Canceled ? (
          <div className="flex items-center justify-center">
            <span className="flex flex-col items-center gap-1 w-[100px]">
              <XCircle size={25} weight="duotone" className="text-red-500" />
              <span className="font-semibold text-sm text-gray-500">
                Cancelado
              </span>
            </span>
          </div>
        ) : (
          <ProcessCard status={status} />
        )}
      </div>
      {/* ORDER STATUS */}
      <div className="flex flex-col gap-6 border-b border-gray-100 pb-6">
        <h5 className="font-semibold text-lg text-gray-900">Histórico</h5>
        <div className="flex flex-col gap-4">
          {orderHistory?.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`${item.bgIcon} p-2`}>{item.icon}</div>
              <p className="flex flex-col justify-between font-semibold text-sm text-gray-900">
                {item.text}
                <span className="font-normal text-xs text-gray-600">
                  {new Date(item.dateTime).toLocaleDateString(
                    'pt-BR',
                    optionsShortLocaleDate
                  )}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* CART ITEMS */}
      <div className="flex flex-col gap-4 border-b border-gray-100">
        <h5 className="font-semibold text-lg text-gray-900">
          Produtos ({data?.payment?.cartQuantity})
        </h5>
        <TableData
          columns={cartOrderColumns(handleReview, isAdmin)}
          data={data?.cart}
          className="!p-0 !border-none !shadow-none"
        />
      </div>
      {/* ADDRESS/PAYMENT */}
      <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-4">
        <div className="flex-1 flex flex-col gap-4 sm:pr-4 sm:border-r sm:border-gray-100">
          <h5 className="font-semibold text-lg text-gray-900">
            Informação para entrega
          </h5>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-sm text-gray-900">
              {data?.customer?.name}
            </span>
            <div className="flex flex-col text-sm text-gray-600">
              <span>
                {data?.address?.street}, {data?.address?.neighborhood} -{' '}
                {data?.address?.number}
              </span>
              <span>
                {data?.address?.city}/{data?.address?.state},{' '}
                {zipCodeMask(data?.address?.zipCode)}
              </span>
              <span>{data?.address?.complement}</span>
            </div>
            <div className="flex flex-col text-sm text-gray-900">
              <p className="font-semibold">
                WhatsApp:{' '}
                <span className="font-normal text-gray-600">
                  {mobileMask(data?.customer?.whatsApp)}
                </span>
              </p>
              <p className="font-semibold">
                Email:{' '}
                <span className="font-normal text-gray-600">
                  {data?.customer?.email}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 sm:pl-4">
          <h5 className="font-semibold text-lg text-gray-900">Observações</h5>
          <p className="text-sm text-gray-600">
            {data.obs ? data.obs : 'Sem observações'}
          </p>
          <div className="flex gap-2">
            <h5 className="font-semibold text-lg text-gray-900">
              Forma de pagamento:
            </h5>
            <p className="flex flex-col items-center text-gray-900">
              <span className="text-lg capitalize">
                {data?.payment?.method?.method}
              </span>
              {data.payment?.method?.availableInstallments ? (
                <small>
                  ({data?.payment?.installments?.installments}x +{' '}
                  {data?.payment?.installments?.fee}%)
                </small>
              ) : (
                <small>(à vista)</small>
              )}
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}
