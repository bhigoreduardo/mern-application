import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

import { categories, products } from '../../../../../utils/mock'
import Button from '../../../ui/buttons/button'
import Container from '../../../ui/common/container'
import Heading from '../../../ui/common/heading'
import HeadingOptions from '../../../ui/common/heading-options'
import ProductGrid from '../../../ui/common/product-grid'
import BannerCard from '../../../ui/cards/banner-card'
import OfferCard from '../../../ui/cards/offer-card'

export default function Lover() {
  const navigate = useNavigate()

  return (
    <section className="py-16">
      <Container>
        <div className="flex lg:flex-row flex-col gap-6">
          <div className="flex flex-col gap-6 w-full">
            {/* HEADING */}
            <Heading title="Queridinhos" className="md:flex-row flex-col">
              <div className="flex items-center justify-center flex-wrap gap-4">
                <HeadingOptions options={categories} max={5} />
                <Button
                  onClick={() => navigate('/loja?ordem=popularity')}
                  className="text-orange-500 hover:bg-orange-500 hover:text-white !p-2 !gap-1"
                >
                  Vê todos
                  <ArrowRight size={16} />
                </Button>
              </div>
            </Heading>
            {/* PRODUCTS GRID */}
            <ProductGrid
              products={products.filter((_, i) => i < 8)}
              className="gap-4"
            />
          </div>
          {/* BANNER */}
          <div className="lg:w-[400px] flex flex-col gap-6">
            <BannerCard
              _id="659edb43f26a45ceed256d3b"
              title="Sofá Reclinável Minas"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              offer={299.99}
              image="product/product-10-cover.png"
              smallBanner
              className="h-full"
            />
            <OfferCard
              badge="Oferta relâmpago"
              title="37% desconto"
              category="Armários"
              slug="armarios"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
