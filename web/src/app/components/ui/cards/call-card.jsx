/* eslint-disable react/prop-types */
import { mobileMask } from '../../../../utils/mask'

export default function CallCard({
  _type,
  icon,
  title,
  description,
  contact,
  button,
}) {
  return (
    <article className="flex gap-6 bg-white sm:p-8 p-4 rounded-md shadow-md">
      {icon}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h5 className="font-semibold text-lg text-gray-900">{title}</h5>
          <p className="font-thin text-sm text-gray-800">{description}</p>
          <span className="text-lg text-gray-900">
            {_type === 'mobile' ? mobileMask(contact) : contact}
          </span>
        </div>
        {button}
      </div>
    </article>
  )
}
