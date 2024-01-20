import { ArrowRight } from 'phosphor-react'

import { categories, product } from '../../../../../utils/mocks/public'
import Button from '../../../ui/buttons/button'
import Container from '../../../ui/common/container'
import Heading from '../../../ui/common/heading'
import HeadingOptions from '../../../ui/common/heading-options'
import ProductGrid from '../../../ui/common/product-grid'
import BannerCard from '../../../ui/cards/banner-card'

export default function News() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex lg:flex-row flex-col gap-6">
          {/* BANNER */}
          <div className="lg:w-[400px]">
            <BannerCard
              category="Armários"
              title="32% Desconto"
              description="Toda linha Cella Carvalho"
              badge="Últimas peças"
              image="products/cover.png"
            />
          </div>
          <div className="flex flex-col gap-6 w-full">
            {/* HEADING */}
            <Heading title="Lançamentos" className="md:flex-row flex-col">
              <div className="flex items-center justify-center flex-wrap gap-4">
                <HeadingOptions options={categories} max={5} />
                <Button className="text-orange-500 hover:bg-orange-500 hover:text-white !p-2 !gap-1">
                  Vê todos
                  <ArrowRight size={16} />
                </Button>
              </div>
            </Heading>
            {/* PRODUCTS GRID */}
            <ProductGrid
              products={new Array(8).fill(product)}
              className="gap-4"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
