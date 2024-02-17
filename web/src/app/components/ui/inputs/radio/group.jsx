/* eslint-disable react/prop-types */
import Radio from '.'
import { mergeClassName } from '../../../../../utils/format'

export default function Group({
  label,
  data,
  selectedValue,
  error,
  isChildren,
  className,
  ...props
}) {
  return (
    <div className={mergeClassName('flex flex-col gap-2', className)}>
      <label className="text-sm text-gray-900">{label}</label>
      <div className="flex gap-1">
        {data?.map((item, i) => (
          <Radio
            key={i}
            title={item.label}
            backgroundColor={item?.color || '#fff'}
            value={item.value}
            checked={item.value === selectedValue}
            {...props}
          >
            {isChildren && item.label}
          </Radio>
        ))}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
