/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'
import Badge from './badge'

export default function Heading({ title, expiresIn, className, children }) {
  return (
    <div
      className={mergeClassName('flex items-center justify-between', className)}
    >
      <div className="flex sm:items-center sm:flex-row flex-col sm:gap-6 gap-2">
        <h4 className="font-semibold text-gray-900 text-2xl">{title}</h4>
        {expiresIn && (
          <div className="flex items-center gap-3">
            <span className="text-black text-sm">Oferta expira em:</span>
            <Badge className="font-semibold text-black bg-yellow-300">
              {expiresIn}
            </Badge>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}
