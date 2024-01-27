import { ArrowsClockwise } from 'phosphor-react'

import useFilter from '../../../hooks/use-filter'
import Button from '../ui/buttons/button'
import Text from '../ui/inputs/text'
import DatePickerLabel from '../ui/inputs/datepicker/label'

export default function History() {
  const { search, setSearch, startDate, endDate, setDateRange, handleClear } =
    useFilter()

  return (
    <div className="flex justify-between gap-2">
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
          title="Limpar"
          onClick={handleClear}
          className="text-orange-500 border !border-orange-500 !p-2 hover:bg-orange-500 hover:text-white transition-all duration-0"
        >
          <ArrowsClockwise size={18} className="transition-all duration-0" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
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
