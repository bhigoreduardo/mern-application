/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import { currencyPrice, mergeClassName } from '../../../../utils/format'
import config from '../../../../config'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function RelatedCard({
  name,
  image,
  brand,
  rangePrice,
  className,
}) {
  const { min, max } = rangePrice
  return (
    <Link
      className={mergeClassName(
        'flex gap-3 p-3 border border-gray-200 rounded-sm',
        className
      )}
    >
      <img
        src={`${serverPublicImages}/${image}`}
        alt={name}
        className="inline-block h-[80px] w-[80px]"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-sm text-gray-900 line-clamp-2">{name}</h3>
        <span className="text-xs text-gray-600 line-clamp-1">
          Marca: {brand}
        </span>
        <span className="font-semibold text-sm text-blue-500">
          {currencyPrice.format(min || max)}
        </span>
      </div>
    </Link>
  )
}
