/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'

export default function Button({ type, className, children, ...props }) {
  return (
    <button
      type={type || 'button'}
      className={mergeClassName(
        'text-base w-fit duration-300 ease-in-out text-center px-4 py-2 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
