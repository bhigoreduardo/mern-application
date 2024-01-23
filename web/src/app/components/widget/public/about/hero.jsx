import { Checks } from 'phosphor-react'

import { createMarkup } from '../../../../../utils/format'
import Badge from '../../../ui/common/badge'
import Container from '../../../ui/common/container'

const about = `
  <p>A Furniture é reconhecida pela credibilidade na revenda de móveis planejados, convencionais e acessórios, pela atuação há mais de 21 anos no mercado, sempre primando pela excelência no atendimento pós venda.</p>
  <p>O potencial humano, a determinação e a vontade são a base de nossa empresa, resultando essa combinação, em serviços de qualidade nos projetos que elabora para seus Clientes, sempre tratados com respeito e carinho.</p>
  <p>O maior orgulho da Furniture, é a satisfação de seus Clientes que a qualificam como excelente!</p>
`
const features = [
  'Atendimento e carisma',
  'Qualidade e durabilidade',
  '50+ lojas no Brasil',
]

export default function Hero() {
  return (
    <Container className="flex items-center justify-between xl:gap-32 gap-6 md:flex-row flex-col-reverse py-16">
      {/* CONTENT */}
      <div className="flex-1 flex flex-col gap-8">
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-3">
          <Badge className="text-white uppercase bg-blue-500 w-fit">
            Quem somos
          </Badge>
          <div
            dangerouslySetInnerHTML={createMarkup(about)}
            className="flex flex-col gap-4 font-thin text-base text-gray-800"
          />
        </div>
        {/* ICONS */}
        <div className="flex flex-col gap-3">
          {features.map((item, i) => (
            <p
              key={i}
              className="flex items-center gap-3 text-base text-gray-900"
            >
              <Checks size={20} className="text-green-500" />
              {item}
            </p>
          ))}
        </div>
      </div>
      {/* IMAGE */}
      <img
        src="/images/about.png"
        alt="Quem somos"
        className="md:max-w-[50%] object-cover"
      />
    </Container>
  )
}
