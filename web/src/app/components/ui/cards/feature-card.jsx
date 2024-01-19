/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'

export default function FeatureCard({ icon, title, description, className }) {
  return (
    <article className={mergeClassName('flex items-center gap-4', className)}>
      {icon}
      <div className="flex flex-col gap-1">
        <h6 className="font-semibold text-sm text-gray-900 uppercase">
          {title}
        </h6>
        <p className="font-this text-sm text-gray-600">{description}</p>
      </div>
    </article>
  )
}
