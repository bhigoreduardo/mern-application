/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'

import useUser from '../../../hooks/use-user'
import { UserEnum } from '../../../types/public/enum-type'

export default function Guard({ children }) {
  const { user, token } = useUser()

  if (!user || !token || user?._type !== UserEnum.Customer)
    return <Navigate to="/entrar" />
  return children
}
