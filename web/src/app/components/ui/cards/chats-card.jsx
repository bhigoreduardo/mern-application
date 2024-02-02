import { Link, useNavigate, useLocation } from 'react-router-dom'

import { chats } from '../../../../utils/mock'
import useApp from '../../../../hooks/use-app'
import ChatCard from './chat-card'
import Button from '../buttons/button'

export default function ChatsCard() {
  const navigate = useNavigate()
  const { setChatSelected } = useApp()
  const { pathname } = useLocation()
  const path = pathname.split('/')[2]

  return (
    <article className="absolute sm:right-0 right-2 top-[calc(100%+10px)] z-30 w-[300px] flex flex-col gap-6 p-4 bg-white rounded-sm border border-gray-100 shadow-md">
      <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto">
        {chats
          .sort((a, b) => new Date(b.latest.date) - new Date(a.latest.date))
          .sort((a, b) => a.latest.viewd - b.latest.viewd)
          .map((item, i) => (
            <Link key={i} to={`/acesso/${path}/mensagens`}>
              <ChatCard
                status={item.status}
                onClick={() => setChatSelected(item)}
                className={!item.latest.viewd && 'bg-gray-100'}
                {...item.latest}
              />
            </Link>
          ))}
      </div>
      <Button
        onClick={() => {
          navigate('mensagens')
        }}
        className="text-orange-500 !border-orange-200 hover:bg-orange-600 hover:text-white uppercase"
      >
        Mostrar todas
      </Button>
    </article>
  )
}
