import { Link } from 'react-router-dom'

import { brands } from '../../../../../utils/mocks/public'
import config from '../../../../../config'
import Container from '../../../ui/common/container'
import NewsletterForm from '../../../form/public/newsletter'
import Carousel from '../../../ui/carousel'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function Newsletter() {
  const responsive = [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]

  return (
    <section className="bg-blue-900">
      <Container className="flex flex-col items-center gap-8 py-16">
        {/* CONTENT */}
        <div className="flex flex-col gap-3 text-center text-white w-full max-w-[500px]">
          <h5 className="font-semibold text-3xl">
            Inscreva-se para receber ofertas
          </h5>
          <p className="font-thin text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry is simply dummy text and typesetting industry.
          </p>
        </div>
        {/* FORM */}
        <NewsletterForm />
        {/* BRANDS */}
        <div className="sm:max-w-[500px] max-w-[200px] mx-auto">
          <Carousel
            autoplay
            isNonRenderArrow
            responsive={responsive}
            slidesToShow={3}
          >
            {() =>
              brands.map((item, i) => (
                <Link key={i} className="px-5">
                  <img
                    src={`${serverPublicImages}/${item.image}`}
                    alt={item.name}
                    className="block max-h-[50px] w-auto mx-auto"
                  />
                </Link>
              ))
            }
          </Carousel>
        </div>
      </Container>
    </section>
  )
}
