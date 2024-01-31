import { useNavigate } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'

import { brands } from '../../../../utils/mock'
import { brandColumns } from '../../../../utils/contants/admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import Filter from '../../../components/filters/admin'
import Button from '../../../components/ui/buttons/button'
import TableData from '../../../components/ui/table/data'

export default function Brands() {
  const matches = useMediaQuery('(max-width: 768px)')
  const navigate = useNavigate()
  const docs = brands

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <Filter />
      <TableData
        title="Marcas"
        btn={
          <Button
            icon={<PlusCircle size={16} className="text-white" />}
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2 uppercase"
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
        smallTable={matches}
      />
    </section>
  )
}
