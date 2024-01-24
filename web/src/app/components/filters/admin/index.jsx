import { ArrowsClockwise } from 'phosphor-react'

import Button from '../../ui/buttons/button'
import Text from '../../ui/inputs/text'
import Select from '../../ui/inputs/select'

export default function Filter() {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex flex-grow items-center gap-2">
        <Text
          id="search"
          placeholder="Pesquisar..."
          name="search"
          title="Pesquisar"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-[500px]"
        />
        <Button
          title="Limpar"
          // onClick={handleClear}
          className="text-orange-500 border !border-orange-500 !p-2 hover:bg-orange-500 hover:text-white transition-all duration-0"
        >
          <ArrowsClockwise size={18} />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Select
          id="order"
          name="order"
          placeholder="Ordem"
          // data={order}
          // value={priority}
          // onChange={(e) => setPriority(e.target.value)}
        />
        <Select
          id="show"
          name="show"
          placeholder="Exibir"
          // data={perPageType}
          // value={perPage}
          // onChange={(e) => setPerPage(e.target.value)}
        />
      </div>
    </div>
  )
}
