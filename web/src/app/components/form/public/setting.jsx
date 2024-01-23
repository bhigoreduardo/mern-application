import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

import { customer } from '../../../../utils/mocks/public'
import Button from '../../ui/buttons/button'
import Heading from '../../ui/common/heading'
import FormProfile from '../../form/profile'
import FormAddress from '../../form/address'
import FormPassword from '../../form/password'

export default function Setting() {
  const navigate = useNavigate()
  const user = customer

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading
          title="Dados pessoais"
          btn={
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600 !py-2 flex-row-reverse"
              onClick={() => navigate(-1)}
            >
              Voltar
              <ArrowLeft size={16} className="text-white" />
            </Button>
          }
        />
        <FormProfile user={user} _type={user?._type} />
      </div>

      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading title="Endereço" />
        <FormAddress user={user} _type={user?._type} />
      </div>

      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading title="Alterar senha" />
        <FormPassword />
      </div>
    </div>
  )
}
