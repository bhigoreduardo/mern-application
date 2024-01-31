import { orders } from '../../../../utils/mock'
import { orderColumns } from '../../../../utils/contants/admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import FitlerOrder from '../../../components/filters/order'
import TableData from '../../../components/ui/table/data'

export default function Orders() {
  const matches = useMediaQuery('(max-width: 768px)')
  const docs = orders

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <FitlerOrder />
      <TableData
        title="Pedidos"
        columns={orderColumns}
        data={docs}
        total={10}
        pages={2}
        smallTable={matches}
      />
    </section>
  )
}
