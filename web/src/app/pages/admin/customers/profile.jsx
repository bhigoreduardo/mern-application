import { useLocation, useParams } from 'react-router-dom'

import { customers, products, orders } from '../../../../utils/mock'
import ToggleLabel from '../../../components/ui/inputs/toggle/label'
import WidgetProfile from '../../../components/widget/profile'

export default function Profile() {
  const { id } = useParams()
  const { pathname } = useLocation()
  const path = pathname.split('/')[2]
  const customer = customers.find((item) => item._id === id)

  return (
    <section className="flex-grow flex flex-col gap-6">
      <ToggleLabel id="status" name="status" label="Status" />
      <WidgetProfile
        user={customer}
        address={customer.address}
        orders={orders}
        history={products}
        hrefProfile="editar"
        hrefAddress="editar"
        hrefOrdersHeader={`/acesso/${path}/clientes/${id}/pedidos`}
        hrefOrders={`/acesso/${path}/pedidos`}
        hrefHistory={`/acesso/${path}/clientes/${id}/historico`}
      />
    </section>
  )
}
