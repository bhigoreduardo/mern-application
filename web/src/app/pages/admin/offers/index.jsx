import { useNavigate } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'

import { offers } from '../../../../utils/mock'
import { offerColumns } from '../../../../utils/contants/admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import FilterOffer from '../../../components/filters/admin/offer'
import Button from '../../../components/ui/buttons/button'
import TableData from '../../../components/ui/table/data'

export default function Offers() {
  const matches = useMediaQuery('(max-width: 768px)')
  const navigate = useNavigate()
  const docs = offers

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <FilterOffer />
      <TableData
        title="Ofertas e cupons"
        btn={
          <Button
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2 uppercase"
            onClick={() => navigate('cadastrar')}
          >
            Adicionar
            <PlusCircle size={16} />
          </Button>
        }
        columns={offerColumns}
        data={docs}
        total={10}
        pages={2}
        smallTable={matches}
      />
    </section>
  )
}
