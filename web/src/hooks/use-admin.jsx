import { useContext } from 'react'

import { AdminContext } from '../contexts/admin-context'

export default function useAdmin() {
  return useContext(AdminContext)
}
