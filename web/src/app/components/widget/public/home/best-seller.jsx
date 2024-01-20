import { ArrowRight } from 'phosphor-react'

import { product } from '../../../../../utils/mocks/public'
import { BadgeEnum } from '../../../../../types/public/enum-type'
import Button from '../../../ui/buttons/button'
import Container from '../../../ui/common/container'
import Heading from '../../../ui/common/heading'
import ProductCard from '../../../ui/cards/product-card'

export default function BestSeller() {
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-6">
        {/* HEADING */}
        <Heading title="Mais vendidos" expiresIn="16d : 21h : 57m : 23s">
          <Button className="text-blue-500 hover:bg-blue-500 hover:text-white !p-2 !gap-1">
            Vê todos
            <ArrowRight size={16} />
          </Button>
        </Heading>
        {/* PRODUCTS */}
        <div className="flex lg:flex-row border flex-col border-gray-200 rounded-sm overflow-hidden">
          {/* BANNER */}
          <div className="lg:w-[320px]">
            <ProductCard
              isBanner
              badge={BadgeEnum.Hot}
              cover={product?.productData?.media?.cover}
              backCover={product?.productData?.media?.backCover}
              name={product.name}
              rangePrice={product.rangePrice}
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            />
          </div>
          {/* PRODUCTS GRID */}
          <div className="flex-grow grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCard
                key={i}
                badge={BadgeEnum.Offer}
                badgeValue="18"
                cover={product?.productData?.media?.cover}
                backCover={product?.productData?.media?.backCover}
                name={product.name}
                rangePrice={product.rangePrice}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
