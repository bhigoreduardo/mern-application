/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../utils/format'

export default function Badge({ className, children }) {
  return (
    <span
      className={mergeClassName(
        'text-xs font-normal px-2 py-1 rounded-[2px]',
        className
      )}
    >
      {children}
    </span>
  )
}
