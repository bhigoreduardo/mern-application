import { useParams, useLocation } from 'react-router-dom'

import { admins, employees } from '../../../../utils/mock'
import FormUser from '../../../components/form/admin/user'

export default function Form() {
  const { id } = useParams()
  const { pathname } = useLocation()
  const user = pathname.split('/')[3] === 'administradores' ? admins : employees

  return (
    <section className="flex-grow flex flex-col">
      <FormUser
        user={user.find((item) => item._id === id)}
        isAdmin
        _type={user._type}
      />
    </section>
  )
}
