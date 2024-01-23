import Banner from '../../components/widget/public/about/banner'
import Hero from '../../components/widget/public/about/hero'
import Team from '../../components/widget/public/about/team'
import Newsletter from '../../components/widget/public/common/newsletter'

export default function About() {
  return (
    <section>
      <Hero />
      <Team />
      <Banner />
      <Newsletter />
    </section>
  )
}
