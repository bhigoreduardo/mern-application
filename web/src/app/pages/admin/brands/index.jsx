import { useNavigate } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'

import { brands } from '../../../../utils/mocks/public'
import { brandColumns } from '../../../../utils/contants/admin'
import Filter from '../../../components/filters/admin'
import Button from '../../../components/ui/buttons/button'
import TableData from '../../../components/ui/table/data'

export default function Brands() {
  const navigate = useNavigate()
  const docs = brands

  return (
    <section className="flex-grow flex flex-col gap-6">
      <Filter />
      <TableData
        title="Marcas"
        btn={
          <Button
            label=""
            icon={<PlusCircle size={16} className="text-white" />}
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2"
            onClick={() => navigate('cadastrar')}
          >
            Adicionar
            <PlusCircle size={16} />
          </Button>
        }
        columns={brandColumns}
        data={docs}
        total={10}
        pages={2}
      />
    </section>
  )
}
