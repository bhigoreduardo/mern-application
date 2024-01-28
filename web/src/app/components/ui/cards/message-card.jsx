/* eslint-disable react/prop-types */
import config from '../../../../config'
import Badge from '../common/badge'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function MessageCard({
  image,
  messages,
  isOwner = false,
  isAdmin = false,
}) {
  return (
    <article className={`flex gap-4 rounded-sm ${isOwner && 'flex-row-reverse'}`}>
      <img
        src={`${serverPublicImages}/${image}`}
        alt="Usuário"
        className="w-10 h-10 object-cover rounded-full"
      />
      <div className={`flex flex-col gap-2 ${isAdmin && 'max-w-[80%]'}`}>
        {messages.map((item, i) => (
          <Badge
            key={i}
            className={
              isOwner ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
            }
          >
            {item.text}
          </Badge>
        ))}
      </div>
    </article>
  )
}
