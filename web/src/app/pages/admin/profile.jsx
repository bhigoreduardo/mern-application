import { admins } from '../../../utils/mock'
import FormProfile from '../../components/form/admin/profile'

export default function Profile() {
  const user = admins[0]

  return (
    <section className="flex-grow flex flex-col">
      <FormProfile user={user} />
    </section>
  )
}
