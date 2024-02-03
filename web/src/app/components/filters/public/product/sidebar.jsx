/* eslint-disable no-unsafe-optional-chaining */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { X } from 'phosphor-react'

import {
  brands as dataBrands,
  categories,
  colors as dataColors,
} from '../../../../../utils/mock'
import { prices } from '../../../../../types/filter-type'
import { makeArrTree, updateSearchParams } from '../../../../../utils/format'
import useApp from '../../../../../hooks/use-app'
import useFilter from '../../../../../hooks/use-filter'
import useQueries from '../../../../../hooks/use-queries'
import RadioLabel from '../../../ui/inputs/radio/label'
import CheckLabel from '../../../ui/inputs/check/label'
import Text from '../../../ui/inputs/text'
import SliderPrice from '../../../ui/slider-price'
import AdvertisingCard from '../../../ui/cards/advertising-card'
// import CheckboxFamily from '../../../ui/inputs/check/family'
import RadioFamily from '../../../ui/inputs/radio/family'

export default function Sidebar() {
  const navigate = useNavigate()
  const queries = useQueries()
  const { isFilterSidebar, setIsFilterSidebar } = useApp()
  const {
    brands,
    setBrands,
    colors,
    setColors,
    priceRange,
    setPriceRange,
    setPriority,
    setPerPage,
    page,
    setPage,
  } = useFilter()

  const categoriesTree = categories ? makeArrTree(categories, null) : []
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { category: [] },
  })

  const contextSearchParams = (prevState, value, type) => {
    const data =
      prevState?.length > 0 && prevState !== undefined
        ? prevState?.includes(value)
          ? [...prevState?.filter((val) => val !== value)]
          : [...prevState, value]
        : [value]

    const newPathname = updateSearchParams(type, data)
    navigate(newPathname)
    return data
  }
  const searchParams = (value, type) => {
    const newPathname = updateSearchParams(type, [value])
    navigate(newPathname)
    return value
  }
  const loadQueryParams = () => {
    if (queries.has('marca')) setBrands(queries.get('marca')?.split(','))
    if (queries.has('cor')) setColors(queries.get('cor')?.split(','))
    if (queries.has('ordem')) setPriority(queries.get('ordem'))
    if (queries.has('limit')) setPerPage(queries.get('limit'))
    if (queries.has('preco')) setPriceRange(queries.get('preco'))
    if (queries.has('page')) setPage(Number(queries.get('page')))
  }
  useEffect(() => {
    window.addEventListener('load', loadQueryParams)
    return () => window.removeEventListener('load', loadQueryParams)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    searchParams(page, 'page')
  }, [page]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <aside
      className={`flex flex-col gap-6 lg:w-[300px] md:w-[200px] w-full max-w-[350px] md:static absolute bg-white transition-all duration-300 ease-in-out md:p-0 p-4 overflow-y-auto md:max-h-full max-h-[500px] z-20 border md:shadow-none md:border-none shadow-md border-gray-100 ${
        isFilterSidebar ? 'left-0 z-30' : '-left-full'
      }`}
    >
      {/* CLOSE FILTER MOBILE */}
      <button
        type="button"
        onClick={() => setIsFilterSidebar((prevState) => !prevState)}
        className="md:hidden absolute right-1 top-1 flex items-center justify-center bg-gray-300 text-white rounded-full w-10 h-10"
      >
        <X size={20} />
      </button>
      {/* CATEGORY */}
      <div className="flex flex-col gap-4 pb-6 border-b border-gray-200">
        <span className="font-semibold text-base text-gray-900 uppercase">
          Categoria
        </span>
        <div className="flex flex-col gap-3">
          {categoriesTree?.map((item) => (
            <RadioFamily
              key={item._id}
              name="category"
              familyTree={item}
              formik={formik}
            />
          ))}
        </div>
      </div>
      {/* PRICE */}
      <div className="flex flex-col gap-4 pb-6 border-b border-gray-200">
        <span className="font-semibold text-base text-gray-900 uppercase">
          Preço
        </span>
        <SliderPrice min={0} max={100} />
        <div className="flex items-center justify-between gap-3">
          <Text
            id="min"
            placeholder="Minimo"
            name="min"
            title="Preço mínimo"
            value={priceRange?.split('-')[0]}
            onChange={(e) =>
              setPriceRange(() =>
                searchParams(
                  `${e.target.value}-${priceRange?.split('-')[1] ?? ''}`,
                  'preco'
                )
              )
            }
          />
          <Text
            id="max"
            placeholder="Máximo"
            name="max"
            title="Preço máximo"
            value={priceRange?.split('-')[1]}
            onChange={(e) =>
              setPriceRange(() =>
                searchParams(
                  `${priceRange?.split('-')[0] ?? ''}-${e.target.value}`,
                  'preco'
                )
              )
            }
          />
        </div>
        {prices.map((item, i) => (
          <RadioLabel
            key={i}
            name="price"
            value={item.value}
            label={item.label}
            onChange={(e) =>
              setPriceRange(() => searchParams(e.target.value, 'preco'))
            }
            checked={priceRange === item.value}
          />
        ))}
      </div>
      {/* BRAND */}
      <div className="flex flex-col gap-4 pb-6 border-b border-gray-200">
        <span className="font-semibold text-base text-gray-900 uppercase">
          Marca
        </span>
        <div className="grid grid-cols-2 gap-3">
          {dataBrands?.map((item) => (
            <CheckLabel
              key={item._id}
              name={item.name}
              label={item.name}
              value={item.slug}
              onChange={({ target: { value } }) =>
                setBrands((prevState) =>
                  contextSearchParams(prevState, value, 'marca')
                )
              }
              checked={brands?.includes(item.slug)}
            />
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-4 pb-6 border-b border-gray-200">
        <span className="font-semibold text-base text-gray-900 uppercase">
          Cor
        </span>
        <div className="grid grid-cols-2 gap-3">
          {dataColors?.map((item) => (
            <CheckLabel
              key={item._id}
              name={item.name}
              label={item.name}
              value={item.slug}
              onChange={({ target: { value } }) =>
                setColors((prevState) =>
                  contextSearchParams(prevState, value, 'cor')
                )
              }
              checked={colors.includes(item.slug)}
            />
          ))}
        </div>
      </div>
      {/* BANNER ADVERTISING */}
      <AdvertisingCard
        _id="659edb43f26a45ceed256d3b"
        name="Lorem Ipsum is simply dummy text"
        image="product/product-1-cover.png"
        brandName="Castor"
        imageBrand="brand/brand-1.webp"
        offer={299}
      />
    </aside>
  )
}
