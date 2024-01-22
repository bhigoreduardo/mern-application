/* eslint-disable react/prop-types */
import { createMarkup } from '../../../../utils/format'

export default function OverviewCard({ title, description, otherInfos }) {
  return (
    <section className="flex items-start md:flex-row flex-col border-t-0 border border-gray-100">
      {title !== null && description !== null && (
        <div className="flex-auto self-stretch md:w-1/2 flex flex-col gap-2 md:border-r md:border-gray-200 p-5 my-5">
          <span className="font-semibold text-sm text-gray-900">{title}</span>
          <div dangerouslySetInnerHTML={createMarkup(description)} />
        </div>
      )}

      {otherInfos?.map((item, i) => (
        <div
          key={i}
          className={`flex-auto self-stretch md:w-1/2 flex flex-col gap-2 p-5 my-5 ${
            i !== otherInfos?.length - 1 && 'md:border-r md:border-gray-200'
          }`}
        >
          <span className="font-semibold text-sm text-gray-900">
            {item.title}
          </span>
          <div dangerouslySetInnerHTML={createMarkup(item.description)} />
        </div>
      ))}
    </section>
  )
}
