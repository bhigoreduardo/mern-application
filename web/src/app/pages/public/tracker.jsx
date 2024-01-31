import { orders } from '../../../utils/mock'
import Container from '../../components/ui/common/container'
import FormTracker from '../../components/form/public/tracker'
import FormOrder from '../../components/form/order'

export default function Tracker() {
  const data = null
  const className = `flex items-center py-16 ${data && 'justify-center'}`

  return (
    <section>
      <Container className={className}>
        {!data ? (
          <FormTracker />
        ) : (
          <FormOrder
            data={data}
            className="lg:w-[1000px] bg-white border border-gray-100 pt-2 shadow-md rounded-sm"
          />
        )}
      </Container>
    </section>
  )
}
