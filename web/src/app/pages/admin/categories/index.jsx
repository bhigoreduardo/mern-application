import { useNavigate } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'

import { categories } from '../../../../utils/mocks/public'
import { categoryColumns } from '../../../../utils/contants/admin'
import Filter from '../../../components/filters/admin'
import Button from '../../../components/ui/buttons/button'
import TableData from '../../../components/ui/table/data'

export default function Categories() {
  const navigate = useNavigate()
  const docs = categories

  return (
    <section className="flex-grow flex flex-col gap-6">
      <Filter />
      <TableData
        title="Categorias"
        btn={
          <Button
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2"
            onClick={() => navigate('cadastrar')}
          >
            Adicionar
            <PlusCircle size={16} />
          </Button>
        }
        columns={categoryColumns}
        data={docs}
        total={10}
        pages={3}
      />
    </section>
  )
}
