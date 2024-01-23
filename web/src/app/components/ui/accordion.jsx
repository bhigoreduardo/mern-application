/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Plus, Minus } from 'phosphor-react'

import { createMarkup } from '../../../utils/format'

export default function Accordion({ data }) {
  const [active, setActive] = useState('')
  const titleClassName =
    'group flex items-center justify-between sm:gap-9 gap-2 border rounded-sm border-gray-100 p-5 cursor-pointer hover:bg-orange-500 hover:border-orange-500 duration-300 transition-all ease-in-out'
  const getClassName = (index) =>
    active === index && 'bg-orange-500 text-white border-orange-500'
  const handleActive = (index) =>
    setActive((prevState) => (prevState === index ? '' : index))

  return (
    <div className="flex flex-col gap-6">
      {data.map((item, i) => (
        <article
          key={i}
          className="relative shadow-md rounded-sm overflow-hidden"
        >
          <div
            className={`${titleClassName} ${getClassName(i)}`}
            onClick={() => handleActive(i)}
          >
            <span
              className={`font-medium sm:text-lg text-base text-gray-900 group-hover:text-white ${
                active === i && 'text-white'
              }`}
            >
              {item.title}
            </span>
            {active === i ? (
              <Minus size={20} className="text-white" />
            ) : (
              <Plus
                size={20}
                className="text-gray-500 group-hover:text-white"
              />
            )}
          </div>
          <div
            dangerouslySetInnerHTML={createMarkup(item.description)}
            className={`sm:text-base text-sm text-gray-800 p-5 border border-gray-100 bg-white duration-300 ease-out transition-all ${
              active === i ? 'flex flex-col gap-2' : 'hidden'
            }`}
          />
        </article>
      ))}
    </div>
  )
}
