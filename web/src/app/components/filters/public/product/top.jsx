import { List } from 'phosphor-react'

import {
  brands as dataBrands,
  categories as dataCategories,
} from '../../../../../utils/mocks/public'
import {
  perPage as perPageType,
  priority as priorityType,
} from '../../../../../types/filter-type'
import { parsedSelectData } from '../../../../../utils/format'
import useApp from '../../../../../hooks/use-app'
import useFilter from '../../../../../hooks/use-filter'
import SelectLabel from '../../../ui/inputs/select/label'
import Tag from '../../../ui/buttons/tag'
import Button from '../../../ui/buttons/button'

export default function Top() {
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
    handleClear,
  } = useFilter()
  const parsedCategories = parsedSelectData(
    dataCategories?.filter((item) => categories.includes(item._id)) ?? [],
    '_id',
    'name'
  )
  const parsedBrands = parsedSelectData(
    dataBrands?.filter((item) => brands.includes(item._id)) ?? [],
    '_id',
    'name'
  )

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
            <List size={20} />
          </Button>
          <SelectLabel
            id="show"
            label="Exibir"
            name="show"
            placeholder="Selecione"
            data={perPageType}
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
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
          onChange={(e) => setPriority(e.target.value)}
          className="!flex-row items-center"
        />
      </div>
      {/* FILTER HISTORY */}
      {(parsedCategories?.length > 0 || parsedBrands?.length > 0) && (
        <div className="flex items-center gap-4 bg-gray-100 px-6 py-3">
          <span className="text-sm">Filtros:</span>
          {parsedCategories?.map((item) => (
            <Tag
              key={item.value}
              content={item.label}
              handleRemove={() =>
                setCategories((prevState) =>
                  prevState.filter((value) => value !== item.value)
                )
              }
            />
          ))}
          {parsedBrands?.map((item) => (
            <Tag
              key={item.value}
              content={item.label}
              handleRemove={() =>
                setBrands((prevState) =>
                  prevState.filter((value) => value !== item.value)
                )
              }
            />
          ))}
          <Tag
            content="Limpar"
            handleRemove={handleClear}
            className="ml-auto"
          />
        </div>
      )}
    </nav>
  )
}
