/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const FilterContext = createContext({
  search: '',
  perPage: 10,
  page: 1,
  priority: '',
  chatStatus: '',
  actived: '',
  featured: '',
  orderStatus: '',
  offer: '',
  discount: '',
  category: '',
  brand: '',
  categories: [],
  brands: [],
})

export default function FilterContextProvider({ children }) {
  const [search, setSearch] = useState('')
  const [perPage, setPerPage] = useState(10)
  const [page, setPage] = useState(1)
  const [priority, setPriority] = useState('')
  const [chatStatus, setChatStatus] = useState('')
  const [actived, setActived] = useState('')
  const [featured, setFeatured] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  const [offer, setOffer] = useState('')
  const [discount, setDiscount] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])

  const handleClear = () => {
    setSearch('')
    setPerPage(10)
    setPage(1)
    setPriority('')
    setChatStatus('')
    setActived('')
    setFeatured('')
    setOrderStatus('')
    setOffer('')
    setDiscount('')
    setCategory('')
    setBrand('')
    setCategories([])
    setBrands([])
  }

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        perPage,
        setPerPage,
        page,
        setPage,
        priority,
        setPriority,
        chatStatus,
        setChatStatus,
        actived,
        setActived,
        featured,
        setFeatured,
        orderStatus,
        setOrderStatus,
        offer,
        setOffer,
        discount,
        setDiscount,
        category,
        setCategory,
        brand,
        setBrand,
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
