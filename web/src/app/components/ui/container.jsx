/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../utils/format'

export default function Container({ children, className }) {
  return (
    <section
      className={mergeClassName('max-w-7xl mx-auto 2md:px-8 px-1', className)}
    >
      {children}
    </section>
  )
}
