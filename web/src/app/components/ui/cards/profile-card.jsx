/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { IdentificationBadge } from 'phosphor-react'

import { cpfMask, mobileMask } from '../../../../utils/mask'
import { optionsFullLocaleDate } from '../../../../utils/format'
import Heading from '../common/heading'
import Button from '../buttons/button'

export default function ProfileCard({ user, href }) {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col gap-6 border border-100 rounded-sm shadow-md py-2">
      <Heading title="Informações pessoais" />
      <div className="flex flex-col justify-between gap-6 h-full">
        <div className="flex flex-col gap-6 px-6">
          <div className="flex items-center gap-4">
            {user.image ? (
              <img
                src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${
                  user.image
                }`}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <IdentificationBadge size={32} weight="duotone" />
            )}

            <div className="flex flex-col">
              <span className="font-semibold text-base-text-gray-900">
                {user?.name}
              </span>
              <p className="text-sm text-gray-600">{cpfMask(user?.cpf)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Email: </span>
              {user?.email}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">WhatsApp: </span>
              {mobileMask(user?.whatsApp)}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                Membro desde:{' '}
              </span>

              {new Date(user?.createdAt).toLocaleDateString(
                'pt-BR',
                optionsFullLocaleDate(false)
              )}
            </p>
          </div>
        </div>
        <Button
          className="text-blue-500 !border-blue-500 hover:bg-blue-500 hover:text-white uppercase mx-6"
          onClick={() => navigate(href)}
        >
          Editar conta
        </Button>
      </div>
    </div>
  )
}
