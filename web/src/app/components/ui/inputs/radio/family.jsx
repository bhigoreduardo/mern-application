/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { MinusCircle, PlusCircle } from 'phosphor-react'

import RadioLabel from './label'

export default function Family({ name, familyTree, formik }) {
  const [isVisible, setIsVisible] = useState(
    formik.values?.category?.includes(familyTree._id)
  )
  const setCategories = (e) =>
    formik.values?.category?.length > 0
      ? formik.values?.category?.includes(e.target.value)
        ? [
            ...formik.values?.category?.filter(
              (item) => item !== e.target.value
            ),
          ]
        : [...formik.values?.category, e.target.value]
      : [e.target.value]

  return (
    <div>
      <RadioLabel
        name={name}
        label={familyTree.name}
        value={familyTree._id}
        onChange={(e) => {
          console.log(e.target)
          console.log(formik.values)
          setIsVisible(e.target.checked)
          formik.setFieldValue('category', setCategories(e))
        }}
        icon={
          familyTree?.children?.length > 0 &&
          (isVisible ? (
            <MinusCircle weight="duotone" className="text-orange-500" />
          ) : (
            <PlusCircle weight="duotone" className="text-gray-700" />
          ))
        }
        checked={formik.values?.category?.includes(familyTree._id)}
      />
      {isVisible &&
        familyTree?.children?.map((item) => (
          <div key={item._id} className="pl-4">
            <Family
              name={`category-${item.parent}`}
              familyTree={item}
              formik={formik}
            />
          </div>
        ))}
    </div>
  )
}
