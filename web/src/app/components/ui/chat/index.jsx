/* eslint-disable react/prop-types */
import { messages } from '../../../../utils/mock'
import config from '../../../../config'
import useApp from '../../../../hooks/use-app'
import MessageCard from '../cards/message-card'
import Input from './input'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function Chat({ isAdmin = false }) {
  const { chatSelected } = useApp()
  const theirMessage = messages[0].messages
  const ownerMessage = messages[1].messages

  return (
    <article className="bg-white flex-grow rounded-sm p-6 max-h-[800px] shadow-md border border-gray-100">
      {isAdmin && !chatSelected && (
        <div className="flex items-center justify-center h-full text-gray-500">
          &larr; Selecione um usuário da barra lateral
        </div>
      )}
      {chatSelected && (
        <div className="flex flex-col gap-6">
          {/* HEADER */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
            <img
              src={`${serverPublicImages}/user/user-1.webp`}
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold text-xl text-gray-900">
                Florencio Dorrance
              </h5>
              <div className="flex items-center gap-2">
                <span className="block w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-800">Online</span>
              </div>
            </div>
          </div>
          {/* MESSAGES */}
          <div className="flex flex-col gap-8 max-h-[600px] overflow-y-auto">
            <MessageCard
              image="user/user-1.webp"
              messages={theirMessage}
              isAdmin={isAdmin}
            />
            {/* ONWER */}
            <MessageCard
              image="user/user-2.webp"
              messages={ownerMessage}
              isAdmin={isAdmin}
              isOwner
            />
          </div>
          {/* INPUT */}
          <Input />
        </div>
      )}
    </article>
  )
}
