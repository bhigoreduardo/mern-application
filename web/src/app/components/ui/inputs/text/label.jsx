/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../../utils/format'
import Text from '.'

export default function Label({
  type,
  name,
  id,
  placeholder,
  label,
  icon,
  error,
  className,
  inputClassName,
  ...props
}) {
  return (
    <div className={mergeClassName('flex flex-col gap-2', className)}>
      {label && (
        <label htmlFor={id} className="text-sm text-gray-900">
          {label}
        </label>
      )}
      <Text
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        icon={icon}
        className={`${inputClassName} ${error && 'border-red-500'}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
