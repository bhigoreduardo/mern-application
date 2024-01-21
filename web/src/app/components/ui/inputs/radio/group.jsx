/* eslint-disable react/prop-types */
import Radio from '.'

export default function Group({
  label,
  name,
  data,
  error,
  border = 1,
  selectedValue,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-900">{label}</label>
      <div className="flex gap-1">
        {data?.map((item, i) => (
          <Radio
            key={i}
            name={name}
            value={item.value}
            border={border}
            backgroundColor={item.color}
            title={item.label}
            checked={item.value === selectedValue}
            {...props}
          />
        ))}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
