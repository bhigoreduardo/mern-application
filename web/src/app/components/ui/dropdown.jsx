import { Link } from 'react-router-dom'
import { CaretRight } from 'phosphor-react'

import { categories } from '../../../utils/mocks/public'
import { currencyPrice } from '../../../utils/format'
import NavItem from './common/nav-item'
import BannerCard from './cards/banner-card'

const Categories = ({ isNonCategories = false }) =>
  categories?.map((item, i) => (
    <NavItem
      key={i}
      title={item.name}
      href={item.slug}
      leftIcon={
        !isNonCategories && (
          <CaretRight
            size={12}
            className="hidden group-hover:block text-gray-900"
          />
        )
      }
      isSidebar
      label={item.name}
      className="group hover:bg-gray-50 xl:w-[240px] sm:w-[200px]"
    />
  ))

export default function Dropdown() {
  return (
    <aside className="absolute left-2 lg:left-6 top-[calc(100%+10px)] flex gap-3 duration-300 ease-in-out z-10">
      {/* CATEGORIES */}
      <nav className="flex flex-col border border-gray-100 bg-white rounded-sm shadow-md py-2 h-fit">
        <Categories />
      </nav>
      {/* SUB CATEGORIES */}
      <nav className="hidden sm:flex md:flex-row flex-col gap-5 justify-between border border-gray-100 bg-white rounded-sm shadow-md p-2">
        <div className="flex flex-col">
          <Categories isNonCategories />
        </div>
        <div className="flex gap-5 lg:flex-row flex-col">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-gray-900 text-base uppercase mb-5">
              Lorem Ipsum is simply
            </h4>
            {Array.from({ length: 3 }).map((_, i) => (
              <Link
                key={i}
                className="flex gap-3 p-3 border border-gray-200 rounded-sm max-w-[300px]"
              >
                <img
                  src={`${
                    import.meta.env.VITE_SERVER_PUBLIC_IMAGES
                  }/products/cover.png`}
                  alt=""
                  className="inline-block h-[80px] w-[80px]"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm text-gray-900 line-clamp-2">
                    It is a long established fact that a reader will be
                    distracted
                  </h3>
                  <span className="font-semibold text-sm text-blue-500">
                    {currencyPrice.format(199.99)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="max-w-[300px]">
            <BannerCard
              title="Sofá Reclinável Minas"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              offer={299.99}
              image="products/cover.png"
              smallBanner
            />
          </div>
        </div>
      </nav>
    </aside>
  )
}
