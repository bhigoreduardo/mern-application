/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'

export default function Count({
  handleDecrease,
  handleIncrease,
  value,
  className,
}) {
  return (
    <div
      className={mergeClassName(
        'flex items-center justify-between border border-gray-200 rounded-sm px-3 py-2',
        className
      )}
    >
      <button
        type="button"
        onClick={handleDecrease}
        className="flex-1 flex justify-center items-center bg-gray-100 hover:bg-purple-500 hover:text-white text-gray-900 h-10 w-10 duration-300 ease-in-out rounded-full"
      >
        <i className="ri-subtract-line text-lg" />
      </button>
      <span className="text-base text-gray-900 flex-1 text-center">
        {value}
      </span>
      <button
        type="button"
        onClick={handleIncrease}
        className="flex-1 flex justify-center items-center bg-gray-100 hover:bg-purple-500 hover:text-white text-gray-900 h-10 w-10 duration-300 ease-in-out rounded-full"
      >
        <i className="ri-add-line text-lg" />
      </button>
    </div>
  )
}
