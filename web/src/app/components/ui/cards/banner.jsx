/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import config from '../../../../config'

const SERVER_PUBLIC_IMAGES = config.SERVER_PUBLIC_IMAGES

export default function CardBanner({
  image,
  title,
  subTitle,
  description,
  href,
}) {
  return (
    <article className="relative border border-gray-100 rounded-sm bg-gradient-to-l from-white from-50% to-gray-200">
      <div className="w-full">
        <img
          src={`${SERVER_PUBLIC_IMAGES}/${image}`}
          alt={title}
          className="w-auto max-h-[220px] ml-auto"
        />
      </div>
      <div className="absolute flex flex-col gap-2 top-0 left-0 h-full w-full py-6 px-10">
        <h3>{title}</h3>
        <h4 className="font-normal text-xl">
          <span className='text-[80%]'>{subTitle}</span>
          <br />
          {description}
        </h4>
        <Link
          to={href}
          className="text-base text-white bg-red-400 hover:bg-gray-900 w-fit duration-300 ease-in-out text-center px-4 py-2 rounded-full"
        >
          Comprar agora
        </Link>
      </div>
    </article>
  )
}
