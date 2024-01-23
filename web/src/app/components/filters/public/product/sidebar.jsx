import { X } from 'phosphor-react'

import { brands, categories } from '../../../../../utils/mocks/public'
import { prices } from '../../../../../types/filter-type'
import useApp from '../../../../../hooks/use-app'
import RadioLabel from '../../../ui/inputs/radio/label'
import CheckLabel from '../../../ui/inputs/check/label'
import Text from '../../../ui/inputs/text'
import SliderPrice from '../../../ui/slider-price'
import AdvertisingCard from '../../../ui/cards/advertising-card'

export default function Sidebar() {
  const { isFilterSidebar, setIsFilterSidebar } = useApp()

  return (
    <aside
      className={`flex flex-col gap-6 lg:w-[300px] md:w-[200px] w-full max-w-[350px] md:static absolute bg-white transition-all duration-300 ease-in-out md:p-0 p-4 ${
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
          {categories?.map((item) => (
            <RadioLabel
              key={item._id}
              name="category"
              value={item._id}
              label={item.name}
              // onChange={(e) => setCategory(e.target.value)}
              // checked={category === item._id}
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
            // value={priceRange?.split('-')[0]}
            // onChange={(e) =>
            //   setPriceRange(
            //     `${e.target.value}-${priceRange?.split('-')[1] ?? ''}`
            //   )
            // }
          />
          <Text
            id="max"
            placeholder="Máximo"
            name="max"
            title="Preço máximo"
            // value={priceRange?.split('-')[1]}
            // onChange={(e) =>
            //   setPriceRange(
            //     `${priceRange?.split('-')[0] ?? ''}-${e.target.value}`
            //   )
            // }
          />
        </div>
        {prices.map((item, i) => (
          <RadioLabel
            key={i}
            name="price"
            value={item.value}
            label={item.label}
          />
        ))}
      </div>
      {/* BRAND */}
      <div className="flex flex-col gap-4 pb-6 border-b border-gray-200">
        <span className="font-semibold text-base text-gray-900 uppercase">
          Marca
        </span>
        <div className="grid grid-cols-2 gap-3">
          {brands?.map((item) => (
            <CheckLabel
              key={item._id}
              name="brand"
              label={item.name}
              value={item._id}
              // onChange={({ target: { value } }) =>
              //   setBrand((prevState) =>
              //     prevState?.length > 0 && prevState !== undefined
              //       ? prevState?.includes(value)
              //         ? [...prevState?.filter((val) => val !== value)]
              //         : [...prevState?.push(value)]
              //       : [value]
              //   )
              // }
              // checked={brand.includes(item._id)}
            />
          ))}
        </div>
      </div>
      {/* BANNER ADVERTISING */}
      <AdvertisingCard
        name="Lorem Ipsum is simply dummy text"
        image="products/cover.png"
        brandName="Castor"
        imageBrand="brands/castor.webp"
        offer={299}
      />
    </aside>
  )
}
