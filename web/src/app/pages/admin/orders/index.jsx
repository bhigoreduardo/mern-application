import { order } from '../../../../utils/mocks/public'
import { orderColumns } from '../../../../utils/contants/admin'
import FitlerOrder from '../../../components/filters/order'
import TableData from '../../../components/ui/table/data'

export default function Orders() {
  const docs = new Array(10).fill(order)

  return (
    <section className="flex-grow flex flex-col gap-6">
      <FitlerOrder />
      <TableData
        title="Pedidos"
        columns={orderColumns}
        data={docs}
        total={10}
        pages={2}
      />
    </section>
  )
}
