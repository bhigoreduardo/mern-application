/* eslint-disable react/prop-types */
import { ArrowRight } from 'phosphor-react'

import { currencyPrice } from '../../../../../utils/format'
import config from '../../../../../config'
import Badge from '../../../ui/common/badge'
import Container from '../../../ui/common/container'
import Button from '../../../ui/buttons/button'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

export default function Promotion({ bagde, title, description, image, offer }) {
  return (
    <section>
      <Container>
        <article className="flex justify-between lg:flex-row flex-col-reverse items-center lg:items-start py-16 lg:py-0 lg:px-16 px-12 bg-[#FFE7D6]">
          {/* CONTENT */}
          <div className="flex flex-col gap-5 my-auto max-w-[500px]">
            <Badge className="text-white uppercase bg-blue-500 w-fit mx-auto lg:mx-0">
              {bagde}
            </Badge>
            <h3 className="font-semibold lg:text-5xl text-3xl text-gray-900">
              {title}
            </h3>
            <p className="font-thin text-base text-gray-700 line-clamp-2">
              {description}
            </p>
            <Button className="bg-orange-500 text-white hover:bg-orange-600 uppercase w-fit mx-auto lg:mx-0">
              Comprar
              <ArrowRight size={20} className="text-white" />
            </Button>
          </div>
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute top-6 -left-10 flex items-center justify-center bg-[#FFCEAD] w-[90px] h-[90px] rounded-full border-2 border-white">
              <span className="font-semibold text-sm text-black">
                {currencyPrice.format(offer)}
              </span>
            </div>
            <img
              src={`${serverPublicImages}/${image}`}
              alt={title}
              className="max-h-[500px] w-auto"
            />
          </div>
        </article>
      </Container>
    </section>
  )
}
