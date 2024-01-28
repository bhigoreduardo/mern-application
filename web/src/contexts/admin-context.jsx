/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const AdminContext = createContext({
  isAdminSidebar: false,
})

export default function AdminContextProvider({ children }) {
  const [isAdminSidebar, setIsAdminSidebar] = useState(false)

  return (
    <AdminContext.Provider
      value={{
        isAdminSidebar,
        setIsAdminSidebar,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}
