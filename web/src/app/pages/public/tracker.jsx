import Container from '../../components/ui/common/container'
import FormTracker from '../../components/form/public/tracker'

export default function Tracker() {
  return (
    <Container className={`flex items-center py-16`}>
      <FormTracker />
    </Container>
  )
}
