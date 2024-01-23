import { faqItems } from '../../../../../utils/mocks/public'
import FormContact from '../../../form/public/contact'
import Accordion from '../../../ui/accordion'
import Container from '../../../ui/common/container'

export default function FAQ() {
  return (
    <Container className="flex justify-between xl:gap-32 gap-6 py-16 lg:flex-row flex-col">
      {/* ACCORDION */}
      <div className="flex flex-col gap-10 w-full">
        <h4 className="font-semibold text-3xl text-gray-900">
          Perguntas frequentes (FAQ)
        </h4>
        <Accordion data={faqItems} />
      </div>
      {/* CONTACT FORM */}
      <div className="flex flex-col gap-6 lg:w-[600px] p-8 rounded-md bg-yellow-100">
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold text-base text-gray-900">
            Não obteve sua resposta? Envie uma mensagem.
          </h6>
          <p className="font-thin text-sm text-gray-800">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
            molestie accumsan dui, non iaculis primis in faucibu raesent eget
            sem purus.
          </p>
        </div>
        <FormContact />
      </div>
    </Container>
  )
}
