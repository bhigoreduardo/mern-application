/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../utils/format'

export default function Circle({ className }) {
  return (
    <span
      className={mergeClassName(
        "absolute w-10 h-10 rounded-full bg-gray-100 before:absolute before:content-[''] before:w-7 before:h-7 before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-purple-400",
        className
      )}
    />
  )
}
