// import { brands } from '../../../../utils/mocks/public'
import Container from './container'
import NewsletterForm from '../../form/public/newsletter'
// import Carousel from '../carousel'

export default function Newsletter() {
  return (
    <section className="bg-blue-900">
      <Container className="flex flex-col items-center gap-8 py-16">
        <div className="flex flex-col gap-3 text-center text-white w-full max-w-[500px]">
          <h5 className="font-semibold text-3xl">
            Inscreva-se para receber ofertas
          </h5>
          <p className="font-thin text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry is simply dummy text and typesetting industry.
          </p>
        </div>

        <NewsletterForm />

        {/* <Carousel>
          {({ onSwipe }) =>
            brands.map((item, i) => (
              <img
                key={i}
                src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
                  item.image
                }`}
                alt={item.name}
                className="h-[15px] w-fit"
              />
            ))
          }
        </Carousel> */}
      </Container>
    </section>
  )
}
