/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, XCircle, Stack } from 'phosphor-react'

import Button from '../../ui/buttons/button'

export default function CheckoutSuccess({ isSuccess = true }) {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col items-center gap-6 justify-center">
      {isSuccess ? (
        <CheckCircle size={50} weight="duotone" className="text-green-500" />
      ) : (
        <XCircle size={50} weight="duotone" className="text-red-500" />
      )}
      <div className="flex flex-col items-center gap-3">
        <h4 className="font-semibold text-4xl-text-gray-900">
          {isSuccess
            ? 'Seu pedido foi realizado com sucesso'
            : 'Ocorreu algum erro para finalizar seu pedido'}
        </h4>
        <span className="text-base text-gray-600">
          {isSuccess
            ? 'Acesse sua conta e acompanhe o status do seu pedido ou navegue em nossa loja e veja outros produtos.'
            : 'Tente novamente realizar seu pedido, se o problema continuar entre em contato conosco e iremos te ajudar.'}
        </span>
        {isSuccess && (
          <div className="flex items-center sm:flex-row flex-col gap-4">
            <Button
              onClick={() => navigate('/conta')}
              className="flex-row-reverse text-orange-500 !border-orange-200 hover:bg-orange-600 hover:text-white uppercase"
            >
              Acessar conta
              <Stack size={20} />
            </Button>
            <Button
              onClick={() => navigate('/conta/pedidos')}
              className="flex-row-reverse bg-orange-500 text-white hover:bg-orange-600 uppercase"
            >
              Meus pedidos
              <ArrowRight size={20} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
