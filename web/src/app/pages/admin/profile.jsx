import { store } from '../../../utils/mocks/admin'
import FormProfile from '../../components/form/admin/profile'

export default function Profile() {
  const user = store

  return (
    <section className="flex-grow flex flex-col">
      <FormProfile user={user} />
    </section>
  )
}
