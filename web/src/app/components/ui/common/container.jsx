/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'

export default function Container({ className, children }) {
  return (
    <section className={mergeClassName('w-full mx-auto lg:px-6 px-2', className)}>
      {children}
    </section>
  )
}
