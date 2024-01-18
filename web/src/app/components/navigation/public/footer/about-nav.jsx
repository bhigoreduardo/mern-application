import { Link } from 'react-router-dom'

import { mobileMask, phoneMask } from '../../../../../utils/mask'
import Logo from '../../../ui/common/logo'

export default function AboutNav() {
  return (
    <div className="flex flex-col gap-6">
      <Logo href="/" />

      <div className="flex flex-col gap-3">
        <div className="flex gap-6">
          <span className="flex flex-col gap-1 text-sm text-gray-400">
            Telefone para contato:
            <a href={`tel:(11) 9 9753-3598`} className="text-base text-white">
              {phoneMask('11997533598')}
            </a>
          </span>
          <span className="flex flex-col gap-1 text-sm text-gray-400">
            WhatsApp para contato:
            <Link className="text-base text-white">
              {mobileMask('11997533598')}
            </Link>
          </span>
        </div>

        <span className="text-sm text-gray-400">
          R. Afonso de Freitas, 778 - Paraíso, São Paulo - SP, 04006-052
        </span>
        <a
          href={`mailto:furniture@contact.com`}
          className="text-base text-white"
        >
          furniture@contact.com
        </a>
      </div>
    </div>
  )
}
