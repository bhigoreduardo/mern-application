/* eslint-disable react/prop-types */
import AppContextProvider from '../contexts/app-context'
import FilterContextProvider from '../contexts/filter-context'
import UserContextProvider from '../contexts/user-context'

export default function DefaultProvider({ children }) {
  return (
    <AppContextProvider>
      <UserContextProvider>
        <FilterContextProvider>{children}</FilterContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  )
}
