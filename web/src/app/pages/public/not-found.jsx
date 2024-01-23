import { useNavigate } from 'react-router-dom'
import { ArrowLeft, House } from 'phosphor-react'

import Container from '../../components/ui/common/container'
import Button from '../../components/ui/buttons/button'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <Container className="flex items-center justify-center pb-16">
      <div className="flex flex-col gap-10">
        <img src="/images/not-found.svg" alt="Página não encontrada" />
        <div className="flex flex-col items-center gap-4">
          <h4 className="font-semibold text-4xl-text-gray-900">
            Página não encontrada
          </h4>
          <span className="text-base text-gray-600 text-center">
            Alguma coisa errada ocorreu ou o link está incorreto/inexistente.
          </span>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate('/produtos')}
              className="flex-row-reverse bg-orange-500 text-white hover:bg-orange-600 uppercase"
            >
              Loja
              <ArrowLeft size={20} />
            </Button>
            <Button
              onClick={() => navigate('/')}
              className="flex-row-reverse text-orange-500 !border-orange-200 hover:bg-orange-600 hover:text-white uppercase"
            >
              Início
              <House size={20} />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
