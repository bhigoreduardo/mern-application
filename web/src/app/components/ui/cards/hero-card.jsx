/* eslint-disable react/prop-types */
import { ArrowRight } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { currencyPrice, mergeClassName } from '../../../../utils/format'
import Button from '../buttons/button'
import Badge from '../common/badge'

export default function HeroCard({
  title,
  subTitle,
  name,
  description,
  image,
  href,
  offer,
  badge,
  price,
  smallCard = false,
  first = false,
  className,
}) {
  return (
    <article
      className={mergeClassName(
        `!text-start relative flex items-center justify-between gap-9 w-full ${
          smallCard ? 'p-6' : 'lg:p-14 md:p-8 p-6'
        } bg-gray-50 rounded-md`,
        className
      )}
    >
      {/* BAGDE */}
      {!smallCard && offer && (
        <div className="absolute lg:top-14 lg:right-14 md:top-8 md:right-8 top-6 right-6 bg-blue-500 md:p-6 p-2 rounded-full border-2 border-white">
          <span className="font-semibold md:text-xl text-sm text-white">
            {currencyPrice.format(offer)}
          </span>
        </div>
      )}
      {smallCard && badge && (
        <Badge className="absolute top-6 right-6 font-semibold text-black uppercase bg-yellow-400">
          {badge}
        </Badge>
      )}
      {/* CONTENT */}
      <div className={`flex flex-col ${smallCard ? 'gap-2' : 'gap-6'}`}>
        {!smallCard && title && (
          <div className="flex items-center gap-2">
            <span className="w-6 h-1 bg-blue-500" />
            <span className="font-semibold text-sm text-blue-600 uppercase">
              {title}
            </span>
          </div>
        )}
        {smallCard && subTitle && (
          <span className="font-semibold text-sm text-yellow-500 uppercase">
            {subTitle}
          </span>
        )}
        <h3
          className={`font-semibold line-clamp-2 ${smallCard ? 'text-xl' : 'xl:text-5xl text-3xl'} ${
            first ? 'text-white' : 'text-gray-900'
          }`}
        >
          {name}
        </h3>
        <p className="font-thin xl:text-lg text-base text-gray-700 line-clamp-2">
          {description}
        </p>
        {smallCard && price && !first && (
          <span className="text-lg text-blue-500">
            {currencyPrice.format(price)}
          </span>
        )}
        <Link to={href}>
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            Comprar
            <ArrowRight size={20} className="text-white" />
          </Button>
        </Link>
      </div>
      {/* IMAGE */}
      <img
        src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/products/${image}`}
        alt={name}
        className={`${smallCard ? '!max-w-[170px]' : 'sm:!max-w-[350px] !max-w-[250px]'}`}
      />
    </article>
  )
}
