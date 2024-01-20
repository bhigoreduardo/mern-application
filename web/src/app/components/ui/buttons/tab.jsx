/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'

export default function Tab({ active, className, children, ...props }) {
  return (
    <button
      type="button"
      className={mergeClassName(
        `text-sm text-gray-500 bg-white p-4 border-b-[2px] border-transparent ${
          active && 'font-semibold text-gray-900 !border-orange-500'
        } hover:bg-gray-50 duration-300 ease-in-out`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
