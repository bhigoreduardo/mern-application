import Badge from '../../../ui/common/badge'
import Container from '../../../ui/common/container'

export default function Hero() {
  return (
    <article className="relative  overflow-hidden border-b border-gray-100">
      <Container className="sm:block flex flex-col-reverse sm:py-16 py-5">
        <div className="flex flex-col gap-6 -mt-40 sm:mt-0 sm:bg-transparent bg-white bg-opacity-80 py-2 sm:py-0">
          <Badge className="font-semibold uppercase bg-yellow-500 w-fit">
            Central de contato
          </Badge>
          <h6 className="font-semibold text-2xl text-gray-900">
            Como posso te ajudar?
          </h6>
        </div>
        <img
          src="/images/contact.png"
          alt="Central de contato"
          className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 lg:right-6 sm:right-2 max-h-[350px] w-auto object-cover"
        />
      </Container>
    </article>
  )
}
