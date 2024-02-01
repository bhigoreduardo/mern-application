/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

import { currencyPrice, mergeClassName } from '../../../../utils/format'
import config from '../../../../config'
import Button from '../buttons/button'
import Badge from '../common/badge'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function BannerCard({
  _id,
  category,
  title,
  description,
  badge,
  image,
  offer,
  smallBanner = false,
  className,
}) {
  const navigate = useNavigate()

  return (
    <article
      className={mergeClassName(
        `flex justify-around gap-8 rounded-sm py-8 bg-yellow-200 ${
          smallBanner ? 'flex-col-reverse' : 'flex-col h-full'
        }`,
        className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2 px-8">
        <span className="font-semibold text-sm text-red-700">{category}</span>
        <span className="font-semibold text-2xl text-gray-900">{title}</span>
        <p className="font-thin text-base text-gray-600 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          {offer && (
            <span className="font-thin text-sm text-gray-700">Por apenas</span>
          )}
          <Badge className="font-semibold bg-white uppercase">
            {badge || currencyPrice.format(offer)}
          </Badge>
        </div>
        <Button
          onClick={() => navigate(`/produto/${_id}`)}
          className="bg-orange-500 text-white hover:bg-orange-600 uppercase"
        >
          Comprar
          <ArrowRight size={20} className="text-white" />
        </Button>
      </div>
      <img
        src={`${serverPublicImages}/${image}`}
        alt={category}
        className={`${smallBanner && 'max-h-[100px] object-contain'}`}
      />
    </article>
  )
}
