import { order } from '../../../utils/mocks/public'
import Container from '../../components/ui/common/container'
import FormTracker from '../../components/form/public/tracker'
import FormOrder from '../../components/form/order'

export default function Tracker() {
  const data = order
  const className = `flex items-center py-16 ${data && 'justify-center'}`

  return (
    <section>
      <Container className={className}>
        {!data ? (
          <FormTracker />
        ) : (
          <FormOrder data={data} className="lg:w-[1000px]" />
        )}
      </Container>
    </section>
  )
}
