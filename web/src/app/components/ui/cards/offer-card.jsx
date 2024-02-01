/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

import Button from '../buttons/button'
import Badge from '../common/badge'

export default function OfferCard({ badge, title, category, slug }) {
  const navigate = useNavigate()

  return (
    <article className="flex flex-col gap-6 px-6 py-10 rounded-sm bg-sky-950">
      <div className="flex flex-col items-center justify-center gap-3">
        <Badge className="font-semibold text-white uppercase bg-white bg-opacity-10">
          {badge}
        </Badge>
        <h6 className="font-semibold text-3xl text-white uppercase">{title}</h6>
        <p className="font-thin text-base text-white">
          Oferta para os <span className="text-yellow-300">{category}</span>
        </p>
      </div>
      <Button
        onClick={() => navigate(`/loja?categoria=${slug}`)}
        className="bg-blue-500 text-white hover:bg-blue-600 uppercase"
      >
        Comprar
        <ArrowRight size={20} className="text-white" />
      </Button>
    </article>
  )
}
