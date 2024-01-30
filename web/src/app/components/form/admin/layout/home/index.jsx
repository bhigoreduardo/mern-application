import Heading from '../../../../ui/table/heading'
import Banner from './banner'
import Hero from './hero'
import Lover from './lover'
import News from './news'
import Promotion from './promotion'

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Heading
        title="Página inicial"
        className="!border border-gray-100 rounded-sm shadow-md"
      />
      <Hero />
      <News />
      <Banner />
      <Lover />
      <Promotion />
    </div>
  )
}
