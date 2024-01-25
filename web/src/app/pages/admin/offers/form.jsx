import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Trash } from 'phosphor-react'

import Heading from '../../../components/ui/common/heading'
import Button from '../../../components/ui/buttons/button'
import FormOffer from '../../../components/form/admin/offer'

export default function Form() {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <section className="flex-grow flex flex-col gap-6">
      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading
          title="Informações"
          btn={
            <div className="flex gap-2">
              {id && (
                <Button
                  className="bg-red-500 text-white hover:bg-red-600 !py-2"
                  // onClick={handleDelete}
                >
                  Excluir
                  <Trash size={16} />
                </Button>
              )}
              <Button
                className="bg-orange-500 text-white hover:bg-orange-600 !py-2 flex-row-reverse uppercase"
                onClick={() => navigate(-1)}
              >
                Voltar
                <ArrowLeft size={16} />
              </Button>
            </div>
          }
        />
        <FormOffer />
      </div>
    </section>
  )
}
