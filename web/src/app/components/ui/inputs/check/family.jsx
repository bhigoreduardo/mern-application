/* eslint-disable react/prop-types */
import { useState } from 'react'
import { MinusCircle, PlusCircle } from 'phosphor-react'

import CheckboxLabel from './label'

export default function Family({ familyTree, formik }) {
  const [isVisible, setIsVisible] = useState(
    formik.values?.category?.includes(familyTree._id)
  )

  return (
    <div>
      <CheckboxLabel
        label={familyTree.name}
        value={familyTree._id}
        // onChange={(e) => {
        //   setIsVisible(e.target.checked)
        //   formik.setFieldValue('category', setCategories(e))
        // }}
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
            <Family familyTree={item} formik={formik} />
          </div>
        ))}
    </div>
  )
}
