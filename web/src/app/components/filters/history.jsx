import { useState } from 'react'
import { ArrowsClockwise, Funnel, X } from 'phosphor-react'

import useFilter from '../../../hooks/use-filter'
import Button from '../ui/buttons/button'
import Text from '../ui/inputs/text'
import DatePickerLabel from '../ui/inputs/datepicker/label'

export default function History() {
  const [openFilter, setOpenFilter] = useState(false)
  const { search, setSearch, startDate, endDate, setDateRange, handleClear } =
    useFilter()

  return (
    <div className="flex justify-between gap-2 relative w-full">
      <div className="flex flex-grow items-center gap-2">
        <Text
          id="search"
          placeholder="Pesquisar..."
          name="search"
          title="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-[500px]"
        />
        <Button
          type="button"
          title="Limpar"
          onClick={handleClear}
          className="text-orange-500 bg-white border !border-orange-500 !p-2 hover:bg-orange-500 hover:text-white"
        >
          <ArrowsClockwise size={18} />
        </Button>
        <Button
          type="button"
          onClick={() => setOpenFilter(true)}
          className="xl:hidden text-orange-500 bg-white border !border-orange-500 !p-2 hover:bg-orange-500 hover:text-white"
        >
          <Funnel size={18} />
        </Button>
      </div>
      <div
        className={`flex items-center gap-2 xl:flex-row flex-col absolute xl:static -right-[calc(100%+30px)] top-0 max-w-[350px] xl:max-w-fit w-full p-8 px-4 xl:p-0 xl:border-none xl:shadow-none border border-gray-100 bg-white z-20 shadow-md ${
          openFilter && '!right-0'
        }`}
      >
        {/* CLOSE FILTER MOBILE */}
        <button
          type="button"
          onClick={() => setOpenFilter(false)}
          className="xl:hidden absolute right-1 top-1 flex items-center justify-center bg-gray-300 text-white rounded-full w-6 h-6"
        >
          <X size={12} />
        </button>
        <DatePickerLabel
          id="rangeDate"
          name="rangeDate"
          placeholder="Selecione a data"
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update)}
        />
      </div>
    </div>
  )
}
