/* eslint-disable react/prop-types */
import AppContextProvider from '../contexts/app-context'

export default function DefaultProvider({ children }) {
  return <AppContextProvider>{children}</AppContextProvider>
}
