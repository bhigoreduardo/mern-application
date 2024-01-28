import { useNavigate } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'

import { products } from '../../../../utils/mock'
import { productColumns } from '../../../../utils/contants/admin'
import FilterProduct from '../../../components/filters/admin/product'
import Button from '../../../components/ui/buttons/button'
import TableData from '../../../components/ui/table/data'

export default function Products() {
  const navigate = useNavigate()
  const docs = products

  return (
    <section className="flex-grow flex flex-col gap-6">
      <FilterProduct />
      <TableData
        title="Produtos"
        btn={
          <Button
            className="bg-orange-500 text-white hover:bg-orange-600 !py-2 uppercase"
            onClick={() => navigate('cadastrar')}
          >
            Adicionar
            <PlusCircle size={16} />
          </Button>
        }
        columns={productColumns}
        data={docs}
        total={10}
        pages={2}
      />
    </section>
  )
}
