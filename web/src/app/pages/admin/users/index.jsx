import { useNavigate, useLocation } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'

import { customer } from '../../../../utils/mocks/public'
import { toCapitalize } from '../../../../utils/format'
import { userColumns } from '../../../../utils/contants/admin'
import FilterUser from '../../../components/filters/admin/user'
import TableData from '../../../components/ui/table/data'
import Button from '../../../components/ui/buttons/button'

export default function Users() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const docs = new Array(10).fill(customer)

  return (
    <section className="flex-grow flex flex-col gap-6">
      <FilterUser />
      <TableData
        title={toCapitalize(pathname.split('/')[3])}
        btn={
          <Button
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2 uppercase"
            onClick={() => navigate('cadastrar')}
          >
            Adicionar
            <PlusCircle size={16} />
          </Button>
        }
        columns={userColumns}
        data={docs}
        total={10}
        pages={2}
      />
    </section>
  )
}
