/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../../utils/format'

export default function Select({
  name,
  id,
  placeholder,
  data,
  className,
  ...props
}) {
  return (
    <div
      className={mergeClassName(
        'flex items-center gap-1 py-2 px-4 bg-white border border-gray-300 rounded-sm',
        className
      )}
    >
      <select
        name={name}
        id={id}
        className="w-full placeholder:text-gray-400 text-gray-700 text-sm"
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {data?.length > 0 &&
          data.map((item, i) => (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  )
}
