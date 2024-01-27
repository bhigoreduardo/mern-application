/* eslint-disable react/prop-types */
import {
  Heart,
  ShoppingCartSimple,
  ArrowsCounterClockwise,
} from 'phosphor-react'

import { getBadgeClassName, translateBadge } from '../../../../utils/format'
import config from '../../../../config'
import Button from '../buttons/button'
import Badge from '../common/badge'
import Price from '../common/price'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function ProductCard({
  badge,
  badgeValue,
  cover,
  backCover,
  name,
  rangePrice,
  isBanner = false,
  description,
}) {
  const isFavorite = true
  const isCompare = false

  return (
    <article className="relative flex flex-col justify-around gap-1 p-2 border border-gray-200 hover:shadow-md duration-300 ease-in-out h-full">
      {/* BADGE */}
      {badge && (
        <Badge
          className={`absolute top-2 left-2 text-white uppercase z-20 ${getBadgeClassName(
            badge
          )}`}
        >
          {translateBadge(badge, badgeValue)}
        </Badge>
      )}
      <div className="group relative flex items-center justify-center h-[240px] w-full overflow-hidden mb-3">
        {/* IMAGES */}
        <img
          src={`${serverPublicImages}/${cover}`}
          alt={name}
          className="absolute left-0 group-hover:-left-[100%] h-full w-full object-cover duration-300 ease-in-out"
        />
        <img
          src={`${serverPublicImages}/${backCover}`}
          alt={name}
          className="absolute -right-[100%] group-hover:right-0 h-full w-full object-cover duration-300 ease-in-out"
        />
        {/* BUTTONS */}
        {!isBanner && (
          <div className="hidden absolute top-0 right-0 left-0 bottom-0 group-hover:flex items-center justify-center gap-2 bg-black w-full h-full bg-opacity-50 duration-300 ease-in-out">
            <Button
              title="Favoritar"
              className={`${
                isFavorite
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-900'
              } hover:bg-orange-500 hover:text-white !w-10 !h-10 !p-0 !rounded-full`}
            >
              <Heart size={16} />
            </Button>
            <Button
              title="Visualizar"
              className="bg-white hover:bg-orange-500 text-gray-900 hover:text-white !w-10 !h-10 !p-0 !rounded-full"
            >
              <ShoppingCartSimple size={16} />
            </Button>
            <Button
              title="Comparar"
              className={`${
                isCompare
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-900'
              } hover:bg-orange-500 hover:text-white !w-10 !h-10 !p-0 !rounded-full`}
            >
              <ArrowsCounterClockwise size={16} />
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between gap-9">
        <div className="flex flex-col gap-2">
          {/* REVIEWS */}
          <span className="text-xs text-gray-400">Sem avaliações</span>
          {/* CONTENT */}
          <h3 className="font-semibold text-sm text-gray-900 line-clamp-2">
            {name}
          </h3>
          <Price rangePrice={rangePrice} />
          {isBanner && description && (
            <p className="text-sm text-gray-800 line-clamp-3">{description}</p>
          )}
        </div>
        {isBanner && (
          <div className="flex items-center gap-2">
            <Button
              title="Favoritar"
              className={`${
                isFavorite
                  ? 'bg-orange-500 text-white'
                  : 'bg-orange-50 text-gray-900'
              } hover:bg-orange-500 hover:text-white !w-fit`}
            >
              <Heart size={16} />
            </Button>
            <Button
              title="Visualizar"
              className="bg-orange-500 hover:bg-orange-600 text-white !w-full uppercase"
            >
              <ShoppingCartSimple size={16} /> Comprar
            </Button>
            <Button
              title="Comparar"
              className={`${
                isCompare
                  ? 'bg-orange-500 text-white'
                  : 'bg-orange-50 text-gray-900'
              } hover:bg-orange-500 hover:text-white !w-it`}
            >
              <ArrowsCounterClockwise size={16} />
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}
