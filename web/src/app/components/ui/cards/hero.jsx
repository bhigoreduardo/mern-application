/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import config from '../../../../config'

const SERVER_PUBLIC_IMAGES = config.SERVER_PUBLIC_IMAGES

export default function CardHero({
  name,
  image,
  badge,
  subTitle,
  title,
  href,
}) {
  return (
    <article className="relative before:content-[''] before:absolute before:top-[30%] before:left-0 before:w-[450px] before:h-[300px] before:bg-white before:blur-2xl before:opacity-80 before:-z-10">
      <img
        src={`${SERVER_PUBLIC_IMAGES}/${image}`}
        alt={name}
        className="absolute -z-20 h-full max-w-full"
      />
      <div className="flex flex-col justify-end pl-[10%] pb-[10%] gap-5 md:h-[500px] h-[350px] z-10">
        <h4 className="font-semibold text-sm w-fit py-1 px-3 bg-black text-white rounded-sm">
          {badge}
        </h4>
        <h2 className="sm:text-[40px] text-3xl">
          {subTitle}
          <span className="text-slate-700 uppercase block font-rubik tracking-tighter font-semibold">
            {title}
          </span>
        </h2>
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
