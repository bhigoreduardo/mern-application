// import { categories } from '../../../../../utils/mocks/public'
// import Carousel from '../../../ui/carousel'
// import Carousel from '../../../ui/carousel-old'
import Container from '../../../ui/common/container'
import Heading from '../../../ui/common/heading'

export default function Category() {
  return (
    <section>
      <Container className="flex flex-col gap-6">
        {/* HEADING */}
        <Heading title="Categorias" className="!justify-center" />
        {/* CATEGORIES */}
        {/* <Carousel />
        {categories.map((item, i) => (
          <Carousel key={i}>{() => <div>{item.name}</div>}</Carousel>
        ))} */}
        <p className="text-center">Work in progress</p>
      </Container>
    </section>
  )
}
