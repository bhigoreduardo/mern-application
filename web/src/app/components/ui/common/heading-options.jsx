/* eslint-disable react/prop-types */
import Tab from '../buttons/tab'

export default function HeadingOptions({ options, max }) {
  return (
    <div className="flex items-center justify-center flex-wrap">
      <Tab active className="!p-2">
        Todos
      </Tab>
      {options?.map((item, i) => i < max && <Tab key={i}>{item.name}</Tab>)}
    </div>
  )
}
