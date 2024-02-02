import { useNavigate } from 'react-router-dom'
import { Gear, SignOut } from 'phosphor-react'

import { store } from '../../../../utils/mock'
import { UserEnum } from '../../../../types/enum-type'
import Button from '../buttons/button'

export default function UserCard() {
  const navigate = useNavigate()
  const user = store
  const settingEndpoint =
    user._type === UserEnum.Store ? 'configuracao' : 'perfil'

  return (
    <article className="absolute sm:right-0 right-2 top-[calc(100%+10px)] z-30 w-[300px] flex flex-col gap-6 p-4 bg-white rounded-sm border border-gray-100 shadow-md">
      <div className="flex flex-col gap-1 border-b border-gray-100 p-1">
        <span className="font-semibold capitalize text-base text-gray-900 text-center">
          {user.name}
        </span>
        <span className="font-thin text-sm text-gray-600 text-center">
          {user?.address?.street}, {user?.address?.neighborhood} -{' '}
          {user?.address?.number}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <Button
          onClick={() => navigate(settingEndpoint)}
          className="flex-row-reverse !justify-end text-gray-500 !border-gray-200 hover:bg-orange-600 hover:text-white uppercase"
        >
          Configuração
          <Gear size={16} weight="duotone" />
        </Button>
        <Button className="flex-row-reverse !justify-end text-gray-500 !border-gray-200 hover:bg-orange-600 hover:text-white uppercase">
          Sair
          <SignOut size={16} weight="duotone" />
        </Button>
      </div>
    </article>
  )
}
