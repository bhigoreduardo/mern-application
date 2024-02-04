/* eslint-disable react/prop-types */
import { useState } from 'react'
import { CaretRight } from 'phosphor-react'

import { categories, products } from '../../../utils/mock'
import { makeArrTree } from '../../../utils/format'
import NavItem from './common/nav-item'
import BannerCard from './cards/banner-card'
import RelatedCard from './cards/related-card'

const Categories = ({
  categories,
  setOpenDropdown,
  setOpenChildren,
  isNonCategories = false,
}) =>
  categories?.map((item, i) => (
    <NavItem
      key={i}
      title={item.name}
      onClick={() => setOpenDropdown(false)}
      href={`/loja?categoria=${item.slug}`}
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
      onMouseOver={() => setOpenChildren && setOpenChildren(i)}
      className="group hover:bg-gray-50 xl:w-[240px] sm:w-[200px]"
    />
  ))

export default function Dropdown({ setOpenDropdown }) {
  const [openChildren, setOpenChildren] = useState(null)
  const categoriesTree = categories ? makeArrTree(categories, null) : []

  return (
    <aside className="absolute left-2 lg:left-6 top-[calc(100%+10px)] flex gap-3 duration-300 ease-in-out z-40">
      {/* CATEGORIES */}
      <nav className="flex flex-col border border-gray-100 bg-white rounded-sm shadow-md py-2 h-fit max-w-[300px] sm:w-auto w-[250px]">
        <Categories
          categories={categoriesTree}
          setOpenDropdown={setOpenDropdown}
          setOpenChildren={setOpenChildren}
        />
      </nav>
      {/* SUB CATEGORIES */}
      {categoriesTree.map(
        (item, i) =>
          item.children?.length > 0 &&
          openChildren === i && (
            <nav
              key={i}
              className="hidden sm:flex md:flex-row flex-col gap-5 justify-between border border-gray-100 bg-white rounded-sm shadow-md p-2"
            >
              <div className="flex flex-col">
                <Categories
                  categories={item.children.map((value) => ({
                    ...value,
                    slug: `${item.slug},${value.slug}`,
                  }))}
                  isNonCategories
                  setOpenDropdown={setOpenDropdown}
                />
              </div>
              <div className="flex gap-5 lg:flex-row flex-col">
                <div className="flex flex-col gap-4">
                  <h4 className="font-semibold text-gray-900 text-base uppercase mb-5">
                    Lorem Ipsum is simply
                  </h4>
                  {products.slice(0, 3).map((item, i) => (
                    <RelatedCard
                      key={i}
                      _id={item._id}
                      name={item.name}
                      image={item.productData.media.cover}
                      brand={item.brand?.name}
                      rangePrice={item.rangePrice}
                      className="xl:w-[300px] max-w-[300px]"
                    />
                  ))}
                </div>
                <div className="max-w-[300px]">
                  <BannerCard
                    _id="65b587e2808ac5bf6c58ba7a"
                    title="Sofá Reclinável Minas"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    offer={299.99}
                    image="product/product-1-cover.png"
                    smallBanner
                  />
                </div>
              </div>
            </nav>
          )
      )}
    </aside>
  )
}
