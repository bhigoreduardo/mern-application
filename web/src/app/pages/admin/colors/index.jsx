import { useNavigate } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'

import { colors } from '../../../../utils/mock'
import { colorColumns } from '../../../../utils/contants/admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import Filter from '../../../components/filters/admin'
import Button from '../../../components/ui/buttons/button'
import TableData from '../../../components/ui/table/data'

export default function Colors() {
  const matches = useMediaQuery('(max-width: 768px)')
  const navigate = useNavigate()
  const docs = colors

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <Filter />
      <TableData
        title="Cores"
        btn={
          <Button
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2 uppercase"
            onClick={() => navigate('cadastrar')}
          >
            Adicionar
            <PlusCircle size={16} className="text-white" />
          </Button>
        }
        columns={colorColumns}
        data={docs}
        total={10}
        pages={2}
        smallTable={matches}
      />
    </section>
  )
}
