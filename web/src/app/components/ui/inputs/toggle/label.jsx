/* eslint-disable react/prop-types */
import Toggle from '.'
import { mergeClassName } from '../../../../../utils/format'

export default function Label({ id, name, label, error, className, ...props }) {
  return (
    <div className={mergeClassName('flex flex-col gap-2', className)}>
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-sm text-gray-900 text-center">
          {label}
        </label>
        <Toggle id={id} name={name} {...props} />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
