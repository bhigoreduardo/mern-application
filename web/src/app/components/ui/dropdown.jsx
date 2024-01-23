import { CaretRight } from 'phosphor-react'

import { categories } from '../../../utils/mocks/public'
import NavItem from './common/nav-item'
import BannerCard from './cards/banner-card'
import RelatedCard from './cards/related-card'

const Categories = ({ isNonCategories = false }) =>
  categories?.map((item, i) => (
    <NavItem
      key={i}
      title={item.name}
      href={item.slug}
      rigthIcon={
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
    <aside className="absolute left-2 lg:left-6 top-[calc(100%+10px)] flex gap-3 duration-300 ease-in-out z-20">
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
              <RelatedCard key={i} className="max-w-[300px]" />
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
