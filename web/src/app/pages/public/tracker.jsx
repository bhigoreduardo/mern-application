import { order } from '../../../utils/mocks/public'
import Container from '../../components/ui/common/container'
import FormTracker from '../../components/form/public/tracker'
import FormOrder from '../../components/form/order'

export default function Tracker() {
  const className = `flex items-center py-16 ${order && 'justify-center'}`
  
  return (
    <Container className={className}>
      {/* <FormTracker /> */}
      <FormOrder data={order} />
    </Container>
  )
}
