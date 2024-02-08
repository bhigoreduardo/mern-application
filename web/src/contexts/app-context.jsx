/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const AppContext = createContext({
  openSidebar: false,
})

export default function AppContextProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <AppContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </AppContext.Provider>
  )
}
