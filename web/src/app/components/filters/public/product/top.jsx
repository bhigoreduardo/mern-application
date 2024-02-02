import { useNavigate } from 'react-router-dom'
import { Funnel } from 'phosphor-react'

import {
  colors as colorsData,
  brands as dataBrands,
  categories as dataCategories,
} from '../../../../../utils/mock'
import {
  perPage as perPageType,
  priority as priorityType,
} from '../../../../../types/filter-type'
import {
  parsedSelectData,
  updateSearchParams,
} from '../../../../../utils/format'
import useApp from '../../../../../hooks/use-app'
import useFilter from '../../../../../hooks/use-filter'
import SelectLabel from '../../../ui/inputs/select/label'
import Tag from '../../../ui/buttons/tag'
import Button from '../../../ui/buttons/button'

export default function Top() {
  const navigate = useNavigate()
  const { setIsFilterSidebar } = useApp()
  const {
    perPage,
    setPerPage,
    priority,
    setPriority,
    categories,
    setCategories,
    brands,
    setBrands,
    colors,
    setColors,
    handleClear,
  } = useFilter()
  const parsedCategories = parsedSelectData(
    dataCategories?.filter((item) => categories.includes(item.slug)) ?? [],
    'slug',
    'name'
  )
  const parsedBrands = parsedSelectData(
    dataBrands?.filter((item) => brands.includes(item.slug)) ?? [],
    'slug',
    'name'
  )
  const parsedColors = parsedSelectData(
    colorsData?.filter((item) => colors.includes(item.slug)) ?? [],
    'slug',
    'name'
  )
  const orderParams = (type, value) => {
    const newPathname = updateSearchParams(type, [value])
    navigate(newPathname)
    return value
  }
  const clearSearchParams = (prevState, item, type) => {
    const data = prevState.filter((value) => value !== item.value)
    const newPathname = updateSearchParams(type, data)
    navigate(newPathname)
    return data
  }
  const clearAllParams = () => {
    handleClear()
    navigate('/loja')
  }

  return (
    <nav className="flex flex-col gap-4">
      {/* FILTER */}
      <div className="flex sm:items-center items-start justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-6">
          <Button
            type="button"
            onClick={() => setIsFilterSidebar((prevState) => !prevState)}
            className="md:hidden text-gray-900 bg-gray-50 hover:bg-orange-500 hover:text-white"
          >
            <Funnel size={20} />
          </Button>
          <SelectLabel
            id="show"
            label="Exibir"
            name="show"
            placeholder="Selecione"
            data={perPageType}
            value={perPage}
            onChange={(e) =>
              setPerPage(() => orderParams('limit', e.target.value))
            }
            className="!flex-row items-center"
          />
        </div>
        <SelectLabel
          id="priority"
          label="Ordernar por"
          name="priority"
          placeholder="Selecione"
          data={priorityType}
          value={priority}
          onChange={(e) =>
            setPriority(() => orderParams('ordem', e.target.value))
          }
          className="!flex-row items-center"
        />
      </div>
      {/* FILTER HISTORY */}
      {(parsedCategories?.length > 0 ||
        parsedBrands?.length > 0 ||
        parsedColors?.length > 0) && (
        <div className="flex items-center gap-4 bg-gray-100 px-6 py-3">
          <span className="text-sm">Filtros:</span>
          {/* CATEGORY */}
          {parsedCategories?.map((item) => (
            <Tag
              key={item.value}
              content={item.label}
              handleRemove={() =>
                setCategories((prevState) => {
                  const data = prevState.filter((value) => value !== item.value)
                  const newPathname = updateSearchParams('categoria', data)
                  navigate(newPathname)
                  return data
                })
              }
            />
          ))}
          {/* COLOR */}
          {parsedBrands?.map((item) => (
            <Tag
              key={item.value}
              content={item.label}
              handleRemove={() =>
                setBrands((prevState) =>
                  clearSearchParams(prevState, item, 'marca')
                )
              }
            />
          ))}
          {/* PRICE */}
          {parsedColors?.map((item) => (
            <Tag
              key={item.value}
              content={item.label}
              handleRemove={() =>
                setColors((prevState) =>
                  clearSearchParams(prevState, item, 'cor')
                )
              }
            />
          ))}
          <Tag
            content="Limpar"
            handleRemove={clearAllParams}
            className="ml-auto"
          />
        </div>
      )}
    </nav>
  )
}
