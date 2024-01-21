/* eslint-disable react/prop-types */
import { calculatePercentage } from '../../../../utils/calculate'
import { currencyPrice, mergeClassName } from '../../../../utils/format'
import Badge from './badge'

export default function Price({ rangePrice, biggerPrice = false, className }) {
  const offer = rangePrice?.max !== rangePrice?.min

  return (
    <div className={mergeClassName('flex items-center gap-1', className)}>
      <span
        className={`${biggerPrice ? 'text-2xl' : 'text-sm'} ${
          offer ? 'text-gray-400 line-through' : 'text-blue-500'
        } `}
      >
        {currencyPrice.format(rangePrice?.max)}
      </span>
      {offer && (
        <>
          <span
            className={`${biggerPrice ? 'text-2xl' : 'text-sm'} text-blue-500`}
          >
            {currencyPrice.format(rangePrice?.min)}
          </span>
          {biggerPrice && (
            <Badge className="text-white uppercase bg-yellow-500">
              {calculatePercentage(rangePrice?.min, rangePrice?.max)}%Off
            </Badge>
          )}
        </>
      )}
    </div>
  )
}
