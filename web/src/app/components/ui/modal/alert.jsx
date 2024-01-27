/* eslint-disable react/prop-types */
import Modal from '.'
import Button from '../buttons/button'

export default function Alert({ isOpen, onClose, onConfirm, message }) {
  return (
    <Modal
      title="Tem certeza?"
      description={message || 'Está ação não pode ser revertida'}
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[400px]"
    >
      <div className="px-6 space-x-2 flex items-center justify-end w-full">
        <Button onClick={onClose} className="bg-slate-700 text-white uppercase">
          Cancelar
        </Button>
        <Button onClick={onConfirm} className="text-white bg-red-500 uppercase">
          Confirmar
        </Button>
      </div>
    </Modal>
  )
}
