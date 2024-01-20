import { categories } from '../../../../../utils/mocks/public'
import Carousel from '../../../ui/carousel'
import Container from '../../../ui/common/container'
import Heading from '../../../ui/common/heading'

export default function Category() {
  return (
    <section>
      <Container className="flex flex-col gap-6">
        {/* HEADING */}
        <Heading title="Categorias" className="!justify-center" />
        {/* CATEGORIES */}
        <Carousel autoplay>
          {() =>
            categories.map((item, i) => (
              <div
                key={i}
                className="flex flex-col py-3 border border-gray-100"
              >
                <img
                  src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
                    item.image
                  }`}
                  alt={item.name}
                  className="block max-h-[150px] w-auto mx-auto mb-2"
                />
                <span className="block font-semibold text-base text-gray-900 text-center">
                  {item.name}
                </span>
              </div>
            ))
          }
        </Carousel>
      </Container>
    </section>
  )
}
