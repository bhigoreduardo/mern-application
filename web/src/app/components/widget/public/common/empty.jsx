/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, House } from 'phosphor-react'

import Button from '../../../ui/buttons/button'
import Container from '../../../ui/common/container'

export default function Empty({ title, description }) {
  const navigate = useNavigate()

  return (
    <Container className="flex items-center justify-center gap-6 py-16">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 z-10">
          <h4 className="font-semibold text-4xl-text-gray-900">{title}</h4>
          <span className="text-base text-gray-600 bg-white text-center p-1 bg-opacity-80">
            {description}
          </span>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate('/loja')}
              className="flex-row-reverse bg-orange-500 text-white hover:bg-orange-600 uppercase"
            >
              Loja
              <ArrowLeft size={20} />
            </Button>
            <Button
              onClick={() => navigate('/')}
              className="flex-row-reverse text-orange-500 bg-white !border-orange-200 hover:bg-orange-600 hover:text-white"
            >
              Início
              <House size={20} />
            </Button>
          </div>
        </div>
        <img
          src="/images/empty.svg"
          alt="Carrinho vazio"
          className="-mt-52 z-0"
        />
      </div>
    </Container>
  )
}
