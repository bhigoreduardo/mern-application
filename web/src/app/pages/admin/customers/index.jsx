import { customers } from '../../../../utils/mock'
import { customerColumns } from '../../../../utils/contants/admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import FilterCustomer from '../../../components/filters/admin/customer'
import TableData from '../../../components/ui/table/data'

export default function Customers() {
  const matches = useMediaQuery('(max-width: 768px)')
  const docs = customers

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <FilterCustomer />
      <TableData
        title="Clientes"
        columns={customerColumns}
        data={docs}
        total={10}
        pages={3}
        smallTable={matches}
      />
    </section>
  )
}
