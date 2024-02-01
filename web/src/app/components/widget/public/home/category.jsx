import { Link } from 'react-router-dom'

import { categories } from '../../../../../utils/mock'
import config from '../../../../../config'
import Carousel from '../../../ui/carousel'
import Container from '../../../ui/common/container'
import Heading from '../../../ui/common/heading'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function Category() {
  const responsive = [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]

  return (
    <section>
      <Container className="flex flex-col gap-6">
        {/* HEADING */}
        <Heading title="Categorias" className="!justify-center" />
        {/* CATEGORIES */}
        <Carousel autoplay responsive={responsive}>
          {() =>
            categories.map((item, i) => (
              <Link
                key={i}
                to={`/loja?categoria=${item.slug}`}
                className="flex flex-col py-3 border border-gray-100"
              >
                <img
                  src={`${serverPublicImages}/${item.image}`}
                  alt={item.name}
                  className="block max-h-[150px] w-auto mx-auto mb-2"
                />
                <span className="block font-semibold text-base text-gray-900 text-center">
                  {item.name}
                </span>
              </Link>
            ))
          }
        </Carousel>
      </Container>
    </section>
  )
}
