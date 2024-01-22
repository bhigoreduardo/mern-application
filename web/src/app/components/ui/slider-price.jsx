/* eslint-disable react/prop-types */
import { useState } from 'react'

import { currencyPrice } from '../../../utils/format'

export default function SliderPrice({ min, max }) {
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)

  return (
    <div className="relative flex flex-col gap-4 w-full bg-white py-2">
      <div className="relative flex items-center justify-between gap-2 mx-auto bg-orange-400 py-2 px-1 text-sm text-white before:content-[''] before:absolute before:left-0 before:right-0 before:-bottom-2 before:w-0 before:h-0 before:border-t-8 before:border-t-orange-400 before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:mx-auto">
        <span>{currencyPrice.format(minValue)}</span>
        <span>{currencyPrice.format(maxValue)}</span>
      </div>

      <div className="flex flex-col gap-1">
        <label className="relative block w-full">
          <div className="absolute top-0 bottom-0 mx-auto w-full h-[2px] bg-gray-300 rounded-sm" />
          <input
            type="range"
            name="min"
            min={min}
            max={max}
            value={minValue}
            onChange={({ target: { value } }) => setMinValue(value)}
            className="input-range"
          />
          <input
            type="range"
            name="max"
            min={min}
            max={max}
            value={maxValue}
            onChange={({ target: { value } }) => setMaxValue(value)}
            className="input-range"
          />
        </label>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Mínimo</span>
          <span>Máximo</span>
        </div>
      </div>
    </div>
  )
}
