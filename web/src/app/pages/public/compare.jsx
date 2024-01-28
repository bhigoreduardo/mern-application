import { products } from '../../../utils/mock'
import { compareColumns } from '../../../utils/contants/public'
import useMediaQuery from '../../../hooks/use-mediaQuery'
import Container from '../../components/ui/common/container'
import TableData from '../../components/ui/table/data'
import Empty from '../../components/widget/public/common/empty'

export default function Compare() {
  const matches = useMediaQuery('(min-width: 640px)')
  const data = products
  const handleProduct = () => {}

  return (
    <section>
      {data?.length > 0 ? (
        <Container className="flex items-center justify-center py-16">
          <TableData
            columns={compareColumns(handleProduct, [])}
            data={data}
            isColumn
            isHeader={matches}
            className="w-full !p-0"
          />
        </Container>
      ) : (
        <Empty
          title="Compare vazio"
          description="Navegue em nossa loja e escolha os produtos."
        />
      )}
    </section>
  )
}
