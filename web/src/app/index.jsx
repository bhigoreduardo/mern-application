import { RouterProvider } from 'react-router-dom'

import { product } from '../utils/mocks/public'
import useApp from '../hooks/use-app'
import router from './routes'
import Loading from './components/ui/loading'
import Modal from './components/ui/modal'
import PreviewCard from './components/ui/cards/preview-card'

export default function App() {
  const { isLoading, isModal } = useApp()

  return (
    <>
      {isLoading && <Loading />}
      {isModal && (
        <Modal open={isModal}>
          <PreviewCard
            name={product.name}
            sku={product.sku}
            productStatus={product.status}
            brand={product.brand?.name}
            category={product.category}
            rangePrice={product.rangePrice}
          />
        </Modal>
      )}
      <RouterProvider router={router} />
    </>
  )
}
