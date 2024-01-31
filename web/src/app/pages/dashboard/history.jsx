import { history } from '../../../utils/mock'
import WidgetHistory from '../../components/widget/history'

export default function History() {
  return (
    <section className="flex-grow flex flex-col gap-6 w-full">
      <WidgetHistory history={history} />
    </section>
  )
}
