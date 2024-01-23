import { createMarkup } from '../../../../../utils/format'
import Container from '../../../ui/common/container'

const description = `
  <p>A relação com os Clientes é diferenciada pelo processo de amorização empregado no atendimento, carisma que a diferencia de todas as outras lojas no mercado de móveis.</p>
  <p>Com reconhecida tradição a NUOVA REALE produz Móveis Planejados de alta qualidades, com a nobresa de seus exclusivos acabamentos, tudo com padrões modernos. Toda sua linha é produzida em MDF com revestimento melamínico, laca, fórmica ou PVC.</p>
  <p>Segue padrões internacionais para seus painéis MICROBAN® (antibactericida), em especial padrões compatíveis com a preservação do meio ambiente.</p>
  <p>A NUOVA REALE empregando processos de alta tecnologia e designer atualizado oferece, através da loja LUMINATTO, toda a sofisticação e qualidade de serviços.</p>
`

export default function Team() {
  return (
    <Container className="flex items-center justify-center flex-col gap-10 py-16 border-y border-gray-100">
      <h3 className="font-semibold text-3xl text-gray-900">Nossa marca</h3>
      <div
        dangerouslySetInnerHTML={createMarkup(description)}
        className="flex flex-col gap-4 font-thin text-base text-gray-800"
      />
    </Container>
  )
}
