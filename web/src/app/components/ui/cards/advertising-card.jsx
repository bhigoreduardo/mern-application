/* eslint-disable react/prop-types */
import { ShoppingCartSimple, ArrowRight } from 'phosphor-react'

import { currencyPrice } from '../../../../utils/format'
import Button from '../buttons/button'
import Badge from '../common/badge'

export default function AdvertisingCard({
  name,
  image,
  brandName,
  imageBrand,
  offer,
}) {
  return (
    <article className="flex flex-col gap-6 items-center justify-center border-2 border-orange-100 rounded-sm lg:p-8 p-2">
      {/* IMAGE */}
      <img
        src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${image}`}
        alt={name}
        className="w-44 h-44 object-cover"
      />
      {/* CONTENT */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <img
          src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${imageBrand}`}
          alt={brandName}
          className="max-h-16 w-auto object-cover bg-gray-400 p-2"
        />
        <h3 className="font-semibold text-2xl text-gray-900 text-center line-clamp-2">{name}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="font-thin text-sm text-gray-700">Por apenas</span>
          <Badge className="font-semibold text-gray-900 bg-yellow-300 uppercase">
            {currencyPrice.format(offer)}
          </Badge>
        </div>
      </div>
      {/* BUTTONS */}
      <div className="flex flex-col gap-3 items-center justify-center w-full">
        <Button className="bg-orange-500 text-white hover:bg-orange-600 uppercase w-full">
          Comprar
          <ShoppingCartSimple size={20} />
        </Button>
        <Button className="text-orange-500 !border-orange-200 hover:bg-orange-600 hover:text-white uppercase w-full">
          Vê detalhes
          <ArrowRight size={20} />
        </Button>
      </div>
    </article>
  )
}
