import { useNavigate, useParams } from 'react-router-dom'
import { Trash, ArrowLeft } from 'phosphor-react'

import { colors } from '../../../../utils/mock'
import useApp from '../../../../hooks/use-app'
import Button from '../../../components/ui/buttons/button'
import Heading from '../../../components/ui/common/heading'
import Alert from '../../../components/ui/modal/alert'
import FormColor from '../../../components/form/admin/color'

export default function Form() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isModal, setIsModal } = useApp()
  const data = colors.find((item) => item._id === id)

  return (
    <section className="flex-grow flex flex-col">
      <Alert isOpen={isModal} onClose={() => setIsModal(false)} />
      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading
          title="Informações"
          btn={
            <div className="flex gap-2">
              {id && (
                <Button
                  className="bg-red-500 text-white hover:bg-red-600 !py-2 uppercase"
                  onClick={() => setIsModal(true)}
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
        <FormColor data={id && data} />
      </div>
    </section>
  )
}
