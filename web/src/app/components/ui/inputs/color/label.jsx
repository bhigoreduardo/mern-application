/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../../utils/format'
import Color from '.'
import HintIcon from '../../icons/hint-icon'

export default function Label({
  id,
  label,
  name,
  error,
  hint,
  className,
  ...props
}) {
  return (
    <div className={mergeClassName('flex flex-col gap-2', className)}>
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
      <Color
        id={id}
        name={name}
        className={`${error && 'border-red-500'}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
