/* eslint-disable react/prop-types */
import { mergeClassName } from '../../../../utils/format'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog'

export default function Modal({
  title,
  description,
  isOpen,
  onClose,
  inside= false,
  children,
  className,
}) {
  const onChange = (open) => {
    if (!open) onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent inside={inside} className={mergeClassName('max-w-[1400px]', className)}>
        {(title || description) && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        )}

        <div>{children}</div>
      </DialogContent>
    </Dialog>
  )
}
