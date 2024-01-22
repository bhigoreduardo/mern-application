/* eslint-disable react/prop-types */
export default function Radio({
  name,
  id,
  backgroundColor,
  title,
  smallRadio = false,
  ...props
}) {
  return (
    <label
      className={`relative cursor-pointer ${
        smallRadio ? 'w-4 h-4' : 'w-10 h-10'
      }`}
    >
      <input
        type="radio"
        name={name}
        id={id}
        className="peer hidden"
        {...props}
      />
      <span
        title={title}
        className={`absolute inline-block border-[2px] bg-white border-gray-300 rounded-full peer-checked:border-orange-500 hover:border-orange-600  peer-disabled:bg-gray-200 p-1 ${
          smallRadio ? 'w-4 h-4 peer-checked:border-[5px]' : 'w-10 h-10'
        }`}
      >
        <span
          className="inline-block w-full h-full rounded-full"
          style={{ backgroundColor }}
        />
      </span>
    </label>
  )
}
