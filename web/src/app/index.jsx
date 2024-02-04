import { RouterProvider } from 'react-router-dom'

import { products } from '../utils/mock'
import useApp from '../hooks/use-app'
import useMediaQuery from '../hooks/use-mediaQuery'
import router from './routes'
import Loading from './components/ui/loading'
import Modal from './components/ui/modal'
import PreviewCard from './components/ui/cards/preview-card'

export default function App() {
  const { isLoading, isModal, setIsModal, modalData } = useApp()
  const matches = useMediaQuery('(max-width: 1024px)')
  const product = products.find((item) => item._id === modalData?._id)

  return (
    <>
      {isLoading && <Loading />}
      {isModal && modalData && product && (
        <Modal
          isOpen={isModal}
          inside={matches}
          onClose={setIsModal}
          className="xl:max-w-[1000px] md:max-w-[800px] max-w-[600px] lg:mt-0 lg:h-fit h-[calc(100%-32px)] lg:overflow-visible overflow-y-auto overflow-x-hidden"
        >
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
            className="!mb-0 lg:grid-cols-2"
          />
        </Modal>
      )}
      <RouterProvider router={router} />
    </>
  )
}
