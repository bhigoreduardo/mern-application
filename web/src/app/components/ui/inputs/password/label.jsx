/* eslint-disable react/prop-types */
import Password from '.'
import { mergeClassName } from '../../../../../utils/format'

export default function Label({
  name,
  id,
  placeholder,
  label,
  btn,
  error,
  className,
  inputClassName,
  ...props
}) {
  return (
    <div className={mergeClassName('flex flex-col gap-2', className)}>
      {(label || btn) && (
        <div className="flex items-center justify-between">
          {label && (
            <label htmlFor={id} className="text-sm text-gray-900">
              {label}
            </label>
          )}
          {btn && btn}
        </div>
      )}
      <Password
        name={name}
        id={id}
        placeholder={placeholder}
        className={`${inputClassName} ${error && 'border-red-500'}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
