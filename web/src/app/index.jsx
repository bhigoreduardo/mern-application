import { RouterProvider } from 'react-router-dom'

import { products } from '../utils/mock'
import useApp from '../hooks/use-app'
import useMediaQuery from '../hooks/use-mediaQuery'
import router from './routes'
import Loading from './components/ui/loading'
import Modal from './components/ui/modal'
import PreviewCard from './components/ui/cards/preview-card'

export default function App() {
  const { isLoading, isModal } = useApp()
  const matches = useMediaQuery('(max-width: 1024px)')
  const product = products[0]

  return (
    <>
      {isLoading && <Loading />}
      {isModal && (
        <Modal
          isOpen={isModal}
          inside={matches}
          className="xl:max-w-[1000px] md:max-w-[800px] max-w-[600px] !py-0 lg:mt-0 lg:h-fit h-[calc(100%-32px)] lg:overflow-visible overflow-y-auto overflow-x-hidden"
        >
          <PreviewCard
            name={product.name}
            sku={product.sku}
            productStatus={product.status}
            brand={product.brand?.name}
            category={product.category}
            rangePrice={product.rangePrice}
            className="!mb-0 lg:grid-cols-2"
          />
        </Modal>
      )}
      <RouterProvider router={router} />
    </>
  )
}
