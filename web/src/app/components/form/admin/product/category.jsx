/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { categories } from '../../../../../utils/mock'
import {
  makeArrTree,
  mergeClassName,
  regexCaseIgnore,
} from '../../../../../utils/format'
import TextLabel from '../../../ui/inputs/text/label'
import CheckboxFamily from '../../../ui/inputs/check/family'
import Wrapper from '../../../ui/common/wrapper'

export default function Category(props) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])
  const categoriesTree = categories ? makeArrTree(categories, null) : []
  const handleFilter = () =>
    setFilter(() =>
      search !== ''
        ? categoriesTree.filter((item) => regexCaseIgnore(search, item.name))
        : categoriesTree
    )
  useEffect(() => {
    handleFilter()
  }, [search, categories]) // eslint-disable-line react-hooks/exhaustive-deps

  const Form = () => (
    <div className={mergeClassName('flex flex-col gap-4', props.className)}>
      <div className="flex flex-col gap-2">
        <TextLabel
          label={props.label}
          id="searchCategory"
          placeholder="Pesquisar"
          name="searchCategory"
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
          icon={<MagnifyingGlass className="text-gray-400" weight="duotone" />}
          autoFocus
          className="flex-grow"
        />
        {props.formik.touched.category && props.formik.errors.category && (
          <span className="text-xs text-red-500">
            {props.formik.errors.category}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        {filter?.length > 0 ? (
          filter.map((item) => (
            <CheckboxFamily
              key={item._id}
              familyTree={item}
              formik={props.formik}
            />
          ))
        ) : (
          <span className="text-sm text-gray-600">Sem resultados</span>
        )}
      </div>
    </div>
  )

  return props?.wrapper ? (
    <Wrapper title="Categoria">
      <Form />
    </Wrapper>
  ) : (
    <Form />
  )
}
