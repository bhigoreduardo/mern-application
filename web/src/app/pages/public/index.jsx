import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

import config from '../../../config'
import CardHero from '../../components/ui/cards/hero'
import Container from '../../components/ui/container'
import Slider from '../../components/ui/slider'
import CardProduct from '../../components/ui/cards/product'
import Heading from '../../components/ui/heading'
import CardBanner from '../../components/ui/cards/banner'
import CardOffer from '../../components/ui/cards/offer'

const SERVER_PUBLIC_IMAGES = config.SERVER_PUBLIC_IMAGES

export default function Home() {
  return (
    <main>
      <Container className="2md:pt-10">
        {/* HERO */}
        <Slider>
          {Array.from({ length: 4 }).map((_, i) => (
            <SwiperSlide key={i}>
              <CardHero
                name="Produto"
                image="/product/product-2.2.jpg"
                badge="Sapatos da moda"
                subTitle="Venha e obtenha agora"
                title="Novas marcas"
                href="/"
              />
            </SwiperSlide>
          ))}
        </Slider>
      </Container>
      <Container className="flex flex-col gap-4">
        {/* BRANDS */}
        <div className="flex items-center justify-around flex-wrap gap-4 py-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Link key={i}>
              <img
                src={`${SERVER_PUBLIC_IMAGES}/brand/brand-${i + 1}.png`}
                alt=""
                className="opacity-25 transition-all duration-300 ease-in-out hover:opacity-100"
              />
            </Link>
          ))}
        </div>
        {/* TRENDGINS */}
        <div className="flex flex-col gap-4">
          <Heading title="Produtos populares" />
          <div className="flex sm:flex-row flex-col gap-4">
            <div className="2md:w-[30%] sm:w-[50%]">
              <CardProduct
                image="/product/product-1.1.jpg"
                name="Produto"
                biggest
              />
            </div>
            <div className="2md:w-[70%] sm:w-[50%] grid 2md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-2 grid-cols-1 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <CardProduct
                  key={i}
                  image="/product/product-1.2.jpg"
                  name="Produto"
                  smaller
                />
              ))}
              {Array.from({ length: 4 }).map((_, i) => (
                <CardProduct
                  key={i}
                  image="/product/product-1.3.jpg"
                  name="Produto"
                  smaller
                />
              ))}
            </div>
          </div>
        </div>
        {/* PRODUCTS */}
        <div className="flex flex-col gap-4">
          <Heading title="Produtos populares">
            <Link className="text-sm text-gray-600">
              Vê todos <i className="ri-arrow-right-line" />
            </Link>
          </Heading>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 xxs:grid-cols-2 grid-cols-1 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <CardProduct
                key={i}
                image="/product/product-1.3.jpg"
                name="Produto"
                details={false}
                description
              />
            ))}
          </div>
        </div>
        {/* BANNER */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <CardBanner
            image="/banner/banner-1.jpg"
            title="Queima de estoque"
            subTitle="Faça seu negócio"
            description="Cadeira para salas"
            href="/"
          />
          <CardBanner
            image="/banner/banner-2.jpg"
            title="Queima de estoque"
            subTitle="Descontos todos dias"
            description="Roupas para escritórios"
            href="/"
          />
        </div>
        {/* OFFER */}
        <div className="flex flex-wrap gap-4">
          <CardOffer
            image="/banner/banner-3.jpg"
            title="Beleza"
            categories={[
              'Maquiagem',
              'Skin Care',
              'Hair Care',
              'Frangrância',
              'Cuidados com pé',
            ]}
          />
          <CardOffer
            image="/banner/banner-4.jpg"
            title="Beleza"
            categories={[
              'Maquiagem',
              'Skin Care',
              'Hair Care',
              'Frangrância',
              'Cuidados com pé',
            ]}
          />
          <CardOffer
            image="/banner/banner-5.jpg"
            title="Beleza"
            categories={[
              'Maquiagem',
              'Skin Care',
              'Hair Care',
              'Frangrância',
              'Cuidados com pé',
            ]}
          />
        </div>
      </Container>
    </main>
  )
}
