import { wishlistColumns } from '../../../utils/contants/public'
import { wishlist } from '../../../utils/mocks/public'
import Container from '../../components/ui/common/container'
import TableData from '../../components/ui/table/data'
import Empty from '../../components/widget/public/common/empty'

export default function Wishlist() {
  const data = new Array(8).fill(wishlist)
  const handleProduct = () => {}

  return (
    <section>
      {data?.length > 0 ? (
        <Container className="flex items-center justify-center py-16">
          <TableData
            title="Favoritos"
            columns={wishlistColumns(handleProduct)}
            data={data}
            className="w-full"
          />
        </Container>
      ) : (
        <Empty
          title="Favoritos vazio"
          description="Navegue em nossa loja e escolha os produtos."
        />
      )}
    </section>
  )
}
