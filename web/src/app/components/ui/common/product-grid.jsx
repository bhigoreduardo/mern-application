/* eslint-disable react/prop-types */
import { BadgeEnum } from '../../../../types/public/enum-type'
import { mergeClassName } from '../../../../utils/format'
import ProductCard from '../cards/product-card'

export default function ProductGrid({ products, className }) {
  return (
    <div
      className={mergeClassName(
        'flex-grow grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1',
        className
      )}
    >
      {products.map((item, i) => (
        <ProductCard
          key={i}
          _id={item._id}
          badge={BadgeEnum.Offer}
          badgeValue="18"
          cover={item?.productData?.media?.cover}
          backCover={item?.productData?.media?.backCover}
          name={item.name}
          rangePrice={item.rangePrice}
          reviewsAvg={item.reviewsAvg}
          reviews={item.reviews}
        />
      ))}
    </div>
  )
}
