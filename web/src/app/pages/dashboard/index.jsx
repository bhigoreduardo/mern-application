import { Link } from 'react-router-dom'

import { customer } from '../../../utils/mocks/public'
import WidgetProfile from '../../components/widget/profile'

export default function Dashboard() {
  const user = customer

  return (
    <section className="flex-grow flex flex-col gap-6">
      {/* GREETINGS */}
      <div className="flex flex-col gap-3">
        <h4 className="text-xl text-gray-900">Olá, {user?.name}</h4>
        <p className="text-sm text-gray-700">
          No painel da sua conta. você pode verificar e visualizar facilmente
          seus{' '}
          <Link to="pedidos" className="text-blue-500">
            pedidos
          </Link>{' '}
          recentes, gerenciar seus{' '}
          <Link to="endereco" className="text-blue-500">
            endereços
          </Link>{' '}
          de envio e cobrança e editar sua{' '}
          <Link to="configuracao" className="text-blue-500">
            senha
          </Link>{' '}
          e configurações da{' '}
          <Link to="configuracao" className="text-blue-500">
            conta
          </Link>
          .
        </p>
      </div>
      <WidgetProfile
        user={user}
        address={user.address}
        hrefProfile="configuracao"
        hrefAddress="configuracao"
        hrefOrdersHeader="/conta/pedidos"
        hrefOrders="/conta/pedidos"
        hrefHistory="/conta/historico"
      />
    </section>
  )
}
