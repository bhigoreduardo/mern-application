import Container from './container'
import NewsletterForm from '../../form/public/newsletter'

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
      </Container>
    </section>
  )
}
