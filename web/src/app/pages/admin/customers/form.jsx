import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

import { customers } from '../../../../utils/mock'
import Button from '../../../components/ui/buttons/button'
import Heading from '../../../components/ui/table/heading'
import ToogleLabel from '../../../components/ui/inputs/toggle/label'
import FormProfile from '../../../components/form/profile'
import FormAddress from '../../../components/form/address'

export default function Form() {
  const navigate = useNavigate()
  const { id } = useParams()
  const customer = customers.find((item) => item._id === id)

  return (
    <section className="flex-grow flex flex-col gap-6">
      <ToogleLabel id="status" name="status" label="Status" />
      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading
          title="Dados pessoais"
          btn={
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600 !py-2 flex-row-reverse uppercase"
              onClick={() => navigate(-1)}
            >
              Voltar
              <ArrowLeft size={16} className="text-white" />
            </Button>
          }
        />
        <FormProfile user={customer} _type={customer?._type} />
      </div>
      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading title="Endereço" />
        <FormAddress user={customer} _type={customer?._type} />
      </div>
    </section>
  )
}
