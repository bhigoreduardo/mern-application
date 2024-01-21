import { product } from '../../../utils/mocks/public'
import PreviewCard from '../../components/ui/cards/preview-card'
import Newsletter from '../../components/ui/common/newsletter'
import Banner from '../../components/widget/public/home/banner'
import BestSeller from '../../components/widget/public/home/best-seller'
import Category from '../../components/widget/public/home/category'
import Hero from '../../components/widget/public/home/hero'
import Lover from '../../components/widget/public/home/lover'
import News from '../../components/widget/public/home/news'
import Promotion from '../../components/widget/public/home/promotion'

export default function Home() {
  return (
    <section>
      <Hero />
      <BestSeller />
      <Category />
      <News />
      <Banner />
      <Lover />
      <Promotion
        bagde="Economize até 20%"
        title="Armário planejado"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
        image="products/cover.png"
        offer={1999}
      />
      <Newsletter />
      <PreviewCard
        name={product.name}
        sku={product.sku}
        productStatus={product.status}
        brand={product.brand?.name}
        category={product.category}
        rangePrice={product.rangePrice}
      />
    </section>
  )
}
