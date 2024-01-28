/* eslint-disable react/prop-types */
import {
  mergeClassName,
  optionsShortLocaleDate,
} from '../../../../utils/format'
import config from '../../../../config'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function ChatCard({
  image,
  name,
  message,
  date,
  status,
  className,
  ...props
}) {
  return (
    <article
      className={mergeClassName(
        'flex gap-4 p-2 rounded-sm cursor-pointer hover:bg-gray-200 hover:shadow-sm transition-all duration-300 ease-in-out',
        className
      )}
      {...props}
    >
      <img
        src={`${serverPublicImages}/${image}`}
        alt={name}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex flex-col gap-1">
        <h6 className="font-semibold text-base text-gray-900 capitalize">
          {name}
        </h6>
        <div className="flex items-center gap-2">
          <span
            className={`block w-2 h-2 rounded-full ${
              status ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span className="text-xs text-gray-800">
            {status ? 'Online' : 'Offline'}
          </span>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2">{message}</p>
        <span className="text-xs text-gray-600 line-clamp-2">
          {new Date(date).toLocaleDateString('pt-BR', optionsShortLocaleDate)}
        </span>
      </div>
    </article>
  )
}
