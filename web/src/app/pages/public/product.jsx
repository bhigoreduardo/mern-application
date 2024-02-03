/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { products } from '../../../utils/mock'
import {
  productInformationItems,
  productRelatedItems,
} from '../../../utils/contants/public'
import Breadcrumb from '../../components/ui/breadcrumb'
import PreviewCard from '../../components/ui/cards/preview-card'
import Container from '../../components/ui/common/container'
import Tab from '../../components/ui/buttons/tab'
import OverviewCard from '../../components/ui/cards/overview-card'
import Reviews from '../../components/ui/reviews'
import RelatedCard from '../../components/ui/cards/related-card'

const Overview = ({ product, tabInformation }) => {
  switch (tabInformation) {
    case 'description':
      return (
        <OverviewCard
          title="Descrição"
          description={product?.description?.overview}
          otherInfos={product?.description?.otherInfos}
        />
      )
    case 'additional':
      return (
        <OverviewCard
          title="Detalhes"
          description={product?.additional?.detail}
          otherInfos={product?.additional?.otherInfos}
        />
      )
    case 'specification':
      return (
        <OverviewCard
          title={null}
          description={null}
          otherInfos={product?.specification}
        />
      )
    case 'reviews':
      return (
        <Reviews reviews={product.reviews} reviewsAvg={product.reviewsAvg} />
      )
    default:
      return null
  }
}

export default function Product() {
  const { id } = useParams()
  const [tabInformation, setTabInformation] = useState('description')
  const getActiveTab = (tab) => tab === tabInformation
  const product = products.find((item) => item._id === id)

  return (
    <section>
      <Breadcrumb product={product} />
      <PreviewCard
        _id={product._id}
        media={product.productData.media}
        reviewsAvg={product.reviewsAvg}
        reviews={product.reviews}
        name={product.name}
        sku={product.sku}
        status={product.status}
        brand={product.brand?.name}
        category={product.category}
        rangePrice={product.rangePrice}
        inventoryInfo={product.productData.inventory.info}
        shippingInfo={product.productData.shippingInfo}
      />
      <Container className="flex flex-col">
        {/* OVERVIEW */}
        <div className="flex flex-wrap items-center justify-center border border-gray-100">
          {productInformationItems.map((item, i) => (
            <Tab
              key={i}
              className="uppercase !px-6"
              active={getActiveTab(item.value)}
              onClick={() => setTabInformation(item.value)}
            >
              {item.label}
            </Tab>
          ))}
        </div>
        <Overview product={product} tabInformation={tabInformation} />
        {/* RELATED */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 py-16">
          {productRelatedItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h6 className="font-semibold text-base text-gray-900 uppercase">
                {item.label}
              </h6>
              <RelatedCard />
              <RelatedCard />
              <RelatedCard />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
