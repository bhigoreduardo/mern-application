/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import config from '../../../../config'

const SERVER_PUBLIC_IMAGES = config.SERVER_PUBLIC_IMAGES

export default function CardOffer({ image, title, categories, href }) {
  return (
    <article className="flex xxs:min-w-[350px] min-w-full flex-1 gap-4 p-6 border border-gray-100 rounded-sm">
      <img
        src={`${SERVER_PUBLIC_IMAGES}/${image}`}
        alt={title}
        className="max-w-[150px]"
      />
      <div className="flex flex-col justify-between gap-2">
        <h4>{title}</h4>
        <ul className="flex flex-col gap-1 text-gray-500 text-sm">
          {categories.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <Link to={href} className="text-sm text-gray-600">
          Vê todos <i className="ri-arrow-right-line" />
        </Link>
      </div>
    </article>
  )
}
