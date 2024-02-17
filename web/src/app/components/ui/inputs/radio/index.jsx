/* eslint-disable react/prop-types */
export default function Radio({ title, backgroundColor, children, ...props }) {
  return (
    <label className="relative cursor-pointer w-10 h-10">
      <input type="radio" className="peer hidden" {...props} />
      <span
        title={title}
        className="absolute inline-block border-[2px] w-10 h-10 bg-white border-gray-300 rounded-full peer-checked:border-purple-500 hover:border-purple-600  peer-disabled:bg-gray-200 p-1"
      >
        <span
          className="w-full h-full rounded-full flex items-center justify-center text-base text-gray-900"
          style={{ backgroundColor }}
        >
          {children}
        </span>
      </span>
    </label>
  )
}
