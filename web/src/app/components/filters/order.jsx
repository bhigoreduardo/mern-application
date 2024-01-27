import { ArrowsClockwise } from 'phosphor-react'

import {
  orderStatus as statusType,
  perPage as perPageType,
} from '../../../types/filter-type'
import useFilter from '../../../hooks/use-filter'
import Button from '../ui/buttons/button'
import Text from '../ui/inputs/text'
import Select from '../ui/inputs/select'
import DatePickerLabel from '../ui/inputs/datepicker/label'

export default function Order() {
  const {
    search,
    setSearch,
    orderStatus,
    setOrderStatus,
    perPage,
    setPerPage,
    handleClear,
    startDate,
    endDate,
    setDateRange,
  } = useFilter()

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
          className="text-orange-500 border !border-orange-500 !p-2 hover:bg-orange-500 hover:text-white "
        >
          <ArrowsClockwise size={18} />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Select
          id="status"
          name="status"
          placeholder="Status"
          data={statusType}
          value={orderStatus}
          onChange={(e) => setOrderStatus(e.target.value)}
        />
        <DatePickerLabel
          id="rangeDate"
          name="rangeDate"
          placeholder="Selecione a data"
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update)}
        />
        <Select
          id="show"
          name="show"
          placeholder="Exibir"
          data={perPageType}
          value={perPage}
          onChange={(e) => setPerPage(e.target.value)}
        />
      </div>
    </div>
  )
}
