/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

import { currencyPrice } from '../../../utils/format'

const getPercent = (first, last) => Math.floor((first / last) * 100)

export default function SliderPrice({ min, max }) {
  const minGap = 5
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)

  const getMinPercent = () => getPercent(maxValue - minGap, max)
  const getMaxPercent = () => getPercent(max - minValue - minGap, max)
  const [minPercent, setMinPercent] = useState(() => getMinPercent())
  const [maxPercent, setMaxPercent] = useState(() => getMaxPercent())
  useEffect(() => {
    if (maxValue - minValue < minGap) return
    setMinPercent(() => getMinPercent())
    setMaxPercent(() => getMaxPercent())
  }, [minValue, maxValue]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative flex flex-col gap-4 w-full bg-white py-2">
      <div className="relative flex items-center justify-between gap-2 mx-auto bg-orange-400 py-2 px-1 text-sm text-white before:content-[''] before:absolute before:left-0 before:right-0 before:-bottom-2 before:w-0 before:h-0 before:border-t-8 before:border-t-orange-400 before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:mx-auto">
        <span>{currencyPrice.format(minValue)}</span>
        <span>{currencyPrice.format(maxValue)}</span>
      </div>

      <div className="flex flex-col gap-1">
        <label className="relative block w-full">
          <div
            className={`absolute top-0 bottom-0 mx-auto w-full h-[2px] bg-gray-300 rounded-sm bg-gradient-to-r from-gray-300 from-[${minPercent}%] via-yellow-500 via-[${minPercent}%, ${maxPercent}%] to-gray-300 to-[${maxPercent}%]`}
          />
          <input
            type="range"
            name="min"
            min={min}
            max={maxValue - minGap}
            value={minValue}
            onChange={({ target: { value } }) => setMinValue(value)}
            style={{ width: `${minPercent}%` }}
            className="input-range left-0"
          />
          <input
            type="range"
            name="max"
            min={minValue + minGap}
            max={max}
            value={maxValue}
            onChange={({ target: { value } }) => setMaxValue(value)}
            style={{
              width: `${maxPercent}%`,
            }}
            className="input-range absolute !right-0"
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
