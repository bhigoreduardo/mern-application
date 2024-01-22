import { product } from '../../../utils/mocks/public'
import Breadcrumb from '../../components/ui/breadcrumb'
import Container from '../../components/ui/common/container'
import Pagination from '../../components/ui/common/pagination'
import ProductGrid from '../../components/ui/common/product-grid'
import FilterSidebar from '../../components/ui/filters/public/filter-product/filter-sidebar'
import FilterTop from '../../components/ui/filters/public/filter-product/filter-top'

export default function Store() {
  return (
    <section>
      <Breadcrumb />
      <Container className="flex items-start gap-6 pt-[50px] pb-[100px]">
        <FilterSidebar />
        <section className="flex-grow flex flex-col gap-6">
          <FilterTop />
          <ProductGrid products={new Array(8).fill(product)} />
          <Pagination total={10} pages={2} />
        </section>
      </Container>
    </section>
  )
}
