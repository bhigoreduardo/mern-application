import { ArrowsClockwise } from 'phosphor-react'

import { sanitizeSelectData } from '../../../../utils/format'
import {
  priority as priorityType,
  chatStatus as chatStatusType,
  actived as activedType,
  perPage as perPageType,
} from '../../../../types/filter-type'
import useFilter from '../../../../hooks/use-filter'
import Button from '../../ui/buttons/button'
import Text from '../../ui/inputs/text'
import Select from '../../ui/inputs/select'

export default function Customer() {
  const {
    search,
    setSearch,
    priority,
    setPriority,
    chatStatus,
    setChatStatus,
    actived,
    setActived,
    perPage,
    setPerPage,
    handleClear,
  } = useFilter()
  const order = sanitizeSelectData(priorityType, [
    'sold',
    'popularity',
    'minor-price',
    'biggest-price',
  ])

  return (
    <div className="flex justify-between flex-wrap gap-2">
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
          className="text-orange-500 bg-white border !border-orange-500 !p-2 hover:bg-orange-500 hover:text-white transition-all duration-0"
        >
          <ArrowsClockwise size={18} />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Select
          id="order"
          name="order"
          placeholder="Ordem"
          data={order}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <Select
          id="chatStatus"
          name="chatStatus"
          placeholder="Online"
          data={chatStatusType}
          value={chatStatus}
          onChange={(e) => setChatStatus(e.target.value)}
        />
        <Select
          id="actived"
          name="actived"
          placeholder="Ativo"
          data={activedType}
          value={actived}
          onChange={(e) => setActived(e.target.value)}
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
