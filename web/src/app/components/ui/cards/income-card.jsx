/* eslint-disable react/prop-types */
import { IncomeEnum } from '../../../../types/enum-type'
import { currencyPrice } from '../../../../utils/format'

export default function IncomeCard({ _type, amount, title, icon }) {
  return (
    <article className="flex items-center justify-between p-3 shadow-sm bg-white border-t border-t-orange-500 border border-gray-100 rounded-sm">
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-base text-gray-600">
          {_type === IncomeEnum.Cash ? currencyPrice.format(amount) : amount}
        </span>
        <span className="font-thin text-xs text-gray-400">{title}</span>
      </div>
      {icon}
    </article>
  )
}
