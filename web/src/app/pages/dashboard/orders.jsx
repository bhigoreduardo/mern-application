import { order } from '../../../utils/mocks/public'
import { orderColumns } from '../../../utils/contants/public'
import FitlerOrder from '../../components/filters/order'
import TableData from '../../components/ui/table/data'

export default function Orders() {
  const docs = new Array(10).fill(order)
  const total = 10
  const pages = 3

  return (
    <section className="flex-grow flex flex-col gap-6">
      <FitlerOrder />
      <TableData
        title="Pedidos recentes"
        columns={orderColumns('/conta/pedidos')}
        data={docs}
        total={total}
        pages={pages}
      />
    </section>
  )
}
