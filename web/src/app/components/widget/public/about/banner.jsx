import Container from '../../../ui/common/container'

export default function Banner() {
  return (
    <article className="bg-about-banner bg-cover bg-center bg-no-repeat">
      <Container className="py-16">
        <div className="flex flex-col gap-4 max-w-[450px] bg-white p-2 bg-opacity-80 rounded-md">
          <h4 className="font-semibold text-3xl text-gray-900">
            Sua loja confiável de móveis planejado
          </h4>
          <p className="font-thin text-base text-gray-800">
            Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla
            elit gravida eget. Nunc consequat auctor urna a placerat.
          </p>
        </div>
      </Container>
    </article>
  )
}
