/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const FilterContext = createContext({
  perPage: 10,
  priority: '',
  categories: [],
  brands: [],
})

export default function FilterContextProvider({ children }) {
  const [perPage, setPerPage] = useState(10)
  const [priority, setPriority] = useState('')
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])

  const handleClear = () => {
    setPerPage(10)
    setPriority('')
    setCategories([])
    setBrands([])
  }

  return (
    <FilterContext.Provider
      value={{
        perPage,
        setPerPage,
        priority,
        setPriority,
        categories,
        setCategories,
        brands,
        setBrands,
        // CLEAR
        handleClear,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
