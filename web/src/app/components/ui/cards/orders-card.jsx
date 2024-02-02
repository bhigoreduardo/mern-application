import { Link, useNavigate, useLocation } from 'react-router-dom'

import { orders } from '../../../../utils/mock'
import { getOrderHistoryStyle } from '../../form/order'
import { optionsShortLocaleDate } from '../../../../utils/format'
import Button from '../buttons/button'

export default function OrdersCard() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const path = pathname.split('/')[2]

  return (
    <article className="absolute sm:right-0 right-2 top-[calc(100%+10px)] z-30 w-[300px] flex flex-col gap-6 p-4 bg-white rounded-sm border border-gray-100 shadow-md">
      <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto">
        {orders?.map((item, i) => {
          const status = item?.status?.slice(-1)[0]
          const node = getOrderHistoryStyle(status)

          return (
            <Link
              key={i}
              to={`/acesso/${path}/pedidos/${item._id}`}
              className="flex items-center gap-4 hover:bg-gray-100 p-1"
            >
              <div className={`${node.bgIcon} p-2`}>{node.icon}</div>
              <div className="flex flex-col text-xs text-gray-600">
                <span className="font-normal text-sm text-gray-900">
                  {node.text}
                </span>
                <span>{item.customer.name}</span>
                <span>
                  {new Date(status.dateTime).toLocaleDateString(
                    'pt-BR',
                    optionsShortLocaleDate
                  )}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
      <Button
        onClick={() => {
          navigate('pedidos')
        }}
        className="text-orange-500 !border-orange-200 hover:bg-orange-600 hover:text-white uppercase"
      >
        Mostrar todas
      </Button>
    </article>
  )
}
