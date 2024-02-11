/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const AppContext = createContext({
  openSidebar: false,
  openSearch: false,
})

export default function AppContextProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <AppContext.Provider
      value={{ openSidebar, setOpenSidebar, openSearch, setOpenSearch }}
    >
      {children}
    </AppContext.Provider>
  )
}
