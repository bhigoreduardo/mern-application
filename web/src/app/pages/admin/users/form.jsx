import { customer } from '../../../../utils/mocks/public'
import FormUser from '../../../components/form/admin/user'

export default function Form() {
  const user = customer

  return (
    <section className="flex-grow flex flex-col">
      <FormUser user={user} isAdmin _type={user._type} />
    </section>
  )
}
