import { useNavigate, useParams } from 'react-router-dom'
import { Trash, ArrowLeft } from 'phosphor-react'

import { categories } from '../../../../utils/mocks/public'
import useApp from '../../../../hooks/use-app'
import Button from '../../../components/ui/buttons/button'
import Heading from '../../../components/ui/common/heading'
import Alert from '../../../components/ui/modal/alert'
import FormCategories from '../../../components/form/admin/category'

export default function Form() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isModal, setIsModal } = useApp()
  const data = categories[0]

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
                  className="bg-red-500 text-white hover:bg-red-600 !py-2"
                  onClick={() => setIsModal(true)}
                >
                  Excluir
                  <Trash size={16} className="text-white" />
                </Button>
              )}
              <Button
                className="bg-orange-500 text-white hover:bg-orange-600 !py-2 flex-row-reverse"
                onClick={() => navigate(-1)}
              >
                Voltar
                <ArrowLeft size={16} className="text-white" />
              </Button>
            </div>
          }
        />
        <FormCategories data={data} />
      </div>
    </section>
  )
}
