import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Password, UserGear } from 'phosphor-react'

import { store } from '../../../utils/mock'
import Button from '../../components/ui/buttons/button'
import Heading from '../../components/ui/table/heading'
import FormAddress from '../../components/form/address'
import FormPassword from '../../components/form/password'
import FormSetting from '../../components/form/admin/setting'
import FormPayment from '../../components/form/admin/setting/payment'
import FormSocial from '../../components/form/admin/setting/social'

const ACTIVE_ITEM = '!bg-orange-500 text-white'
const INACTIVE_ITEM = 'text-orange-500 !border-orange-200 hover:text-white'

export default function Setting() {
  const navigate = useNavigate()
  const [isNonAccount, setIsNonAccount] = useState(false)
  const user = store
  const getClassName = (status) => (!status ? ACTIVE_ITEM : INACTIVE_ITEM)

  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <div className="flex gap-3 sm:flex-row flex-col">
        <Button
          onClick={() => setIsNonAccount(false)}
          className={`bg-white hover:bg-orange-600 !py-2 uppercase ${getClassName(
            isNonAccount
          )}`}
        >
          Editar conta
          <UserGear size={20} weight="duotone" />
        </Button>
        <Button
          onClick={() => setIsNonAccount(true)}
          className={`bg-white hover:bg-orange-600 !py-2 uppercase ${getClassName(
            !isNonAccount
          )}`}
        >
          Editar senha
          <Password size={20} weight="duotone" />
        </Button>
      </div>
      {!isNonAccount ? (
        <>
          <div className="flex flex-col gap-6 rounded-sm shadow-md border border-gray-100 pb-2 bg-white">
            <Heading
              title="Informações"
              btn={
                <Button
                  className="bg-orange-500 text-white hover:bg-orange-600 !py-2 flex-row-reverse uppercase"
                  onClick={() => navigate(-1)}
                >
                  Voltar
                  <ArrowLeft size={16} />
                </Button>
              }
            />
            <FormSetting user={user} />
          </div>
          <div className="flex flex-col gap-6 rounded-sm shadow-md border border-gray-100 pb-2 bg-white">
            <Heading title="Endereço" />
            <FormAddress user={user} _type={user?._type} />
          </div>
          <div className="flex flex-col gap-6 rounded-sm shadow-md border border-gray-100 pb-2 bg-white">
            <Heading title="Formas de pagamento" />
            <FormPayment />
          </div>

          <div className="flex flex-col gap-6 rounded-sm shadow-md border border-gray-100 pb-2 bg-white">
            <Heading title="Redes sociais" />
            <FormSocial user={user} />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-6 rounded-sm shadow-md border border-gray-100 pb-2 bg-white">
          <Heading title="Segurança" />
          <FormPassword />
        </div>
      )}
    </section>
  )
}
