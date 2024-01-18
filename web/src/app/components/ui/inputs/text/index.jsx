/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../../utils/format'

export default function Text({
  type,
  name,
  id,
  placeholder,
  icon,
  className,
  ...props
}) {
  return (
    <div
      className={mergeClassName(
        'flex items-center justify-between gap-1 py-2 px-4 bg-white border border-gray-300 rounded-sm',
        className
      )}
    >
      <input
        type={type || 'text'}
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-full placeholder:text-gray-400 text-gray-700 text-sm"
        {...props}
      />
      {icon && icon}
    </div>
  )
}
