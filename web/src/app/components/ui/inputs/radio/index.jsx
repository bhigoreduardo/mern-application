/* eslint-disable react/prop-types */
export default function Radio({
  name,
  id,
  border = 5,
  backgroundColor,
  title,
  ...props
}) {
  return (
    <label className="relative cursor-pointer w-10 h-10">
      <input
        type="radio"
        name={name}
        id={id}
        className="peer hidden"
        {...props}
      />
      <span
        title={title}
        className={`absolute inline-block w-10 h-10 border-[2px] bg-white border-gray-300 rounded-full peer-checked:border-orange-500 hover:border-orange-600 peer-checked:border-[${border}px] peer-disabled:bg-gray-200 p-1`}
      >
        <span
          className="inline-block w-full h-full rounded-full"
          style={{ backgroundColor }}
        />
      </span>
    </label>
  )
}
