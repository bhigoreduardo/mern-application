import { useParams } from 'react-router-dom'
import { XCircle, Printer } from 'phosphor-react'

import { orders } from '../../../../utils/mock'
import { sanitizeSelectData } from '../../../../utils/format'
import { OrderStatusEnum } from '../../../../types/public/enum-type'
import { orderStatus as orderStatusType } from '../../../../types/filter-type'
import useApp from '../../../../hooks/use-app'
import Alert from '../../../components/ui/modal/alert'
import Select from '../../../components/ui/inputs/select'
import Heading from '../../../components/ui/table/heading'
import Button from '../../../components/ui/buttons/button'
import FormOrder from '../../../components/form/order'

export default function Detail() {
  const { id } = useParams()
  const { isModal, setIsModal } = useApp()
  const data = orders.filter((item) => item._id === id)[0]
  const orderStatus = data?.status?.slice(-1)[0]?.history
  const orderStatusTypeParsed = sanitizeSelectData(orderStatusType, [
    'canceled',
  ])

  return (
    <section className="flex-grow flex flex-col gap-6">
      <Alert isOpen={isModal} onClose={() => setIsModal(false)} />
      {orderStatus !== OrderStatusEnum.Delivered &&
        orderStatus !== OrderStatusEnum.Canceled && (
          <Select
            id="status"
            name="status"
            placeholder="Status"
            data={orderStatusTypeParsed}
            value={orderStatus}
            onChange={(e) => console.log(e.target.value)}
            className="w-fit"
          />
        )}

      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading
          title="Detalhe do pedido"
          btn={
            <div className="flex items-center gap-2">
              {orderStatus !== OrderStatusEnum.Delivered &&
                orderStatus !== OrderStatusEnum.Canceled && (
                  <Button
                    className="bg-red-500 text-white hover:bg-red-600 !py-2 uppercase"
                    onClick={() => setIsModal(true)}
                  >
                    Cancelar
                    <XCircle size={16} />
                  </Button>
                )}
              <Button
                icon={<Printer size={16} className="text-white" />}
                className="bg-orange-500 text-white hover:bg-orange-600 !py-2 flex-row-reverse uppercase"
              >
                Imprimir
                <Printer size={16} />
              </Button>
            </div>
          }
        />
        <FormOrder data={data} isAdmin />
      </div>
    </section>
  )
}
