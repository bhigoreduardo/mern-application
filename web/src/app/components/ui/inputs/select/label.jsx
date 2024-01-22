/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../../utils/format'
import Select from '.'

export default function Label({
  name,
  id,
  label,
  placeholder,
  data,
  error,
  className,
  ...props
}) {
  return (
    <div className={mergeClassName('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-sm text-gray-900">
        {label}
      </label>
      <Select
        id={id}
        placeholder={placeholder}
        name={name}
        data={data}
        className={`${error && 'border-red-500'}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
