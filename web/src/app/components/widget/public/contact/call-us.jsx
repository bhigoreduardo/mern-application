import { contactItems } from '../../../../../utils/contants/public'
import CallCard from '../../../ui/cards/call-card'
import Badge from '../../../ui/common/badge'
import Container from '../../../ui/common/container'

export default function CallUs() {
  return (
    <section className="bg-gray-100">
      <Container className="flex flex-col gap-10 items-center justify-center py-16">
        {/* HEADING */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Badge className="text-white bg-blue-500 uppercase w-fit">
            Fale conosco
          </Badge>
          <h6 className="flex flex-col text-center font-semibold text-3xl textgray-900">
            <span>Não encontrou uma solução?</span>
            <span>Fale conosco</span>
          </h6>
        </div>
        {/* CONTACTS */}
        <div className="flex lg:flex-row flex-col gap-6">
          {contactItems.map((item, i) => (
            <CallCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
