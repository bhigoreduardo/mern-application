/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'

export default function Heading({ title, btn, className }) {
  return (
    <div
      className={mergeClassName(
        'flex items-center justify-between uppercase px-6 py-2 border-b border-gray-100 bg-white flex-wrap gap-2',
        className
      )}
    >
      <span className="font-semibold text-sm text-gray-900">{title}</span>
      {btn && btn}
    </div>
  )
}
