/* eslint-disable react/prop-types */
import AppContextProvider from '../contexts/app-context'
import FilterContextProvider from '../contexts/filter-context'

export default function DefaultProvider({ children }) {
  return (
    <AppContextProvider>
      <FilterContextProvider>{children}</FilterContextProvider>
    </AppContextProvider>
  )
}
