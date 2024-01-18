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
      <Promotion />
      <Newsletter />
    </section>
  )
}
