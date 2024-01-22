/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import { currencyPrice, mergeClassName } from '../../../../utils/format'

export default function RelatedCard({ className }) {
  return (
    <Link
      className={mergeClassName(
        'flex gap-3 p-3 border border-gray-200 rounded-sm',
        className
      )}
    >
      <img
        src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/products/cover.png`}
        alt=""
        className="inline-block h-[80px] w-[80px]"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-sm text-gray-900 line-clamp-2">
          It is a long established fact that a reader will be distracted
        </h3>
        <span className="font-semibold text-sm text-blue-500">
          {currencyPrice.format(199.99)}
        </span>
      </div>
    </Link>
  )
}
