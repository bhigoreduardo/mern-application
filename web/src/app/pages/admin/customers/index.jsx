import { customer } from '../../../../utils/mocks/public'
import { customerColumns } from '../../../../utils/contants/admin'
import FilterCustomer from '../../../components/filters/admin/customer'
import TableData from '../../../components/ui/table/data'

export default function Customers() {
  const docs = new Array(10).fill(customer)

  return (
    <section className="flex-grow flex flex-col gap-6">
      <FilterCustomer />
      <TableData
        title="Clientes"
        columns={customerColumns}
        data={docs}
        total={10}
        pages={3}
      />
    </section>
  )
}
