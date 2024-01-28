import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

import { order } from '../../../utils/mocks/public'
import useApp from '../../../hooks/use-app'
import Modal from '../../components/ui/modal'
import FormReview from '../../components/form/public/review'
import FormOrder from '../../components/form/order'
import Heading from '../../components/ui/table/heading'
import Button from '../../components/ui/buttons/button'

export default function Order() {
  const navigate = useNavigate()
  const { isModal, setIsModal } = useApp()
  const data = order

  return (
    <section className="flex-grow flex flex-col gap-6">
      <Modal
        title="Avaliação"
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        className="!max-w-[500px]"
      >
        <FormReview />
      </Modal>
      <div className="flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
        <Heading
          title="Detalhe do pedido"
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
        <FormOrder data={data} />
      </div>
    </section>
  )
}
