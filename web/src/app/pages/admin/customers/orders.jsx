import { useLocation } from 'react-router-dom'

import { orders } from '../../../../utils/mock'
import { orderColumns } from '../../../../utils/contants/public'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import FitlerOrder from '../../../components/filters/order'
import TableData from '../../../components/ui/table/data'

export default function Orders() {
  const { pathname } = useLocation()
  const matches = useMediaQuery('(max-width: 768px)')
  const docs = orders
  const total = 10
  const pages = 3

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <FitlerOrder />
      <TableData
        title="Pedidos"
        columns={orderColumns(`/acesso/${pathname.split('/')[2]}/pedidos`)}
        data={docs}
        total={total}
        pages={pages}
        smallTable={matches}
      />
    </section>
  )
}
