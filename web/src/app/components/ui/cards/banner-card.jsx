/* eslint-disable react/prop-types */
import { ArrowRight } from 'phosphor-react'

import Button from '../buttons/button'
import Badge from '../common/badge'

export default function BannerCard({
  category,
  title,
  description,
  badge,
  image,
}) {
  return (
    <article className="flex flex-col justify-around gap-8 rounded-sm py-8 bg-yellow-300 h-full">
      <div className="flex flex-col items-center justify-center gap-2 px-8">
        <span className="font-semibold text-sm text-red-700">{category}</span>
        <span className="font-semibold text-2xl text-gray-900">{title}</span>
        <p className="font-thin text-base text-gray-600 line-clamp-1">
          {description}
        </p>
        <Badge className="font-semibold bg-white uppercase mb-8">{badge}</Badge>
        <Button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-600 uppercase"
        >
          Comprar
          <ArrowRight size={20} className="text-white" />
        </Button>
      </div>
      <img
        src={`${import.meta.env.VITE_SERVER_PUBLIC_IMAGES}/${image}`}
        alt={category}
      />
    </article>
  )
}
