import { Paperclip, PaperPlaneTilt } from 'phosphor-react'

import Button from '../buttons/button'
import Text from '../inputs/text'

export default function Input() {
  return (
    <div className="flex items-center gap-6">
      <Button className="text-gray-500 hover:bg-orange-500 hover:text-white !p-2">
        <Paperclip size={20} />
      </Button>
      <Text
        id="input"
        placeholder="Insira sua mensagem..."
        name="input"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        icon={<PaperPlaneTilt className="text-blue-600" weight="duotone" />}
        className="flex-grow"
      />
    </div>
  )
}
