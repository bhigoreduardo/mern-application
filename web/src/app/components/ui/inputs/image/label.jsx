/* eslint-disable react/prop-types */
import Image from '.'
import HintIcon from '../../icons/hint-icon'

export default function Label({
  id,
  label,
  name,
  info,
  error,
  hint,
  value,
  onClear,
  className,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {(label || hint) && (
        <div className="flex items-center gap-1 relative">
          {label && (
            <label htmlFor={id} className="text-sm text-gray-900">
              {label}
            </label>
          )}
          {hint && <HintIcon>{hint}</HintIcon>}
        </div>
      )}
      <Image
        id={id}
        name={name}
        info={info}
        value={value}
        onClear={onClear}
        className={className}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
