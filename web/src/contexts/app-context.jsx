/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

import useLocalStorage from '../hooks/use-localStorage'

export const AppContext = createContext({
  isLoading: false,
  isModal: false,
  isFilterSidebar: false,
  cartItems: [],
})

export default function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [isFilterSidebar, setIsFilterSidebar] = useState(false)
  const { value: cartItems, handleUpdate: handleCartItems } = useLocalStorage(
    'cart-items',
    []
  )

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isModal,
        setIsModal,
        isFilterSidebar,
        setIsFilterSidebar,
        cartItems,
        handleCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
