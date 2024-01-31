import { MagnifyingGlass } from 'phosphor-react'

import { chats } from '../../../../utils/mock'
import useApp from '../../../../hooks/use-app'
import Badge from '../common/badge'
import Text from '../inputs/text'
import Heading from '../table/heading'
import ChatCard from '../cards/chat-card'

export default function List() {
  const { chatSelected, setChatSelected } = useApp()
  const getClassNameChateSelected = (item) =>
    chatSelected !== null && item._id === chatSelected._id && 'bg-orange-100'

  return (
    <article className="flex flex-col gap-6 w-[350px] min-w-[350px] max-w-[350px] bg-white p-4 rounded-sm max-h-[800px] border border-gray-100 shadow-md">
      <Heading
        title="Mensagens"
        btn={<Badge className="bg-red-500 text-white">+12</Badge>}
        className="!px-0 !pt-0"
      />
      <Text
        id="search"
        placeholder="Procurar"
        name="search"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        icon={<MagnifyingGlass className="text-gray-400" weight="duotone" />}
        className="flex-grow flex-row-reverse"
      />
      <div className="flex flex-col gap-2 overflow-y-auto">
        {chats
          .sort((a, b) => new Date(b.latest.date) - new Date(a.latest.date))
          .sort((a, b) => a.latest.viewd - b.latest.viewd)
          .map((item, i) => (
            <ChatCard
              key={i}
              status={item.status}
              onClick={() => setChatSelected(item)}
              className={
                !item.latest.viewd &&
                'bg-gray-100' &&
                getClassNameChateSelected(item)
              }
              {...item.latest}
            />
          ))}
      </div>
    </article>
  )
}
