/* eslint-disable react/prop-types */
import Circle from './circle'

export default function Heading({ title, children }) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
      <h2 className="relative font-semibold sm:text-2xl text-base flex items-center sm:gap-6 gap-2">
        <Circle className="relative" />
        {title}
      </h2>
      {children}
    </div>
  )
}
