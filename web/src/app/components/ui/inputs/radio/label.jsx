/* eslint-disable react/prop-types */
import Radio from '.'

export default function Label({ name, id, label, error, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Radio smallRadio id={id} name={name} {...props} />
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
