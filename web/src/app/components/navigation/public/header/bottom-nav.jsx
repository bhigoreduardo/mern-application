/* eslint-disable react/prop-types */
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import { categories } from '../../../../../utils/mock'
import { makeArrTree } from '../../../../../utils/format'
import config from '../../../../../config'
import Container from '../../../ui/container'
import useMediaQuery from '../../../../../hooks/use-mediaQueries'

const SERVER_PUBLIC_IMAGES = config.SERVER_PUBLIC_IMAGES

const CategoriesChildren = ({ setCurrent, item }) => (
  <div
    onMouseLeave={() => setCurrent(null)}
    className="2md:absolute 2md:top-0 2md:left-[300px] 2md:right-0 2md:bottom-0 p-4 2md:border 2md:border-gray-100 2md:rounded-b-sm 2md:grid 2md:grid-cols-3 2md:gap-8 2md:h-full 2md:overflow-hidden flex flex-col gap-2"
  >
    <div className="2md:block hidden absolute w-full min-h-full bg-gradient-to-br from-[rgba(255,255,255,0.6)] from-50% to-[rgba(0,0,0,0.45)] -z-10" />
    <img
      src={`${SERVER_PUBLIC_IMAGES}/${item.background}`}
      className="absolute -z-20 2md:inline-block hidden"
    />
    {item.children.map((value, key) => (
      <div key={key} className="flex flex-col gap-3">
        <h4 className="text-gray-900">{value.name}</h4>
        <div className="flex-1 flex flex-col gap-2 pl-2 2md:pl-0">
          {value.children.map((v, k) => (
            <Link key={k} to={value.slug} className="text-sm">
              {v.name}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export const CategoriesLinks = () => {
  const [current, setCurrent] = useState(null)
  const matches = useMediaQuery('(min-width: 992px)')
  const categoriesTree = makeArrTree(categories, null)

  return categoriesTree.map((item, i) => (
    <Fragment key={i}>
      <li onMouseEnter={() => setCurrent(i)} className="list-none">
        <Link className="flex items-center justify-between w-full py-2 px-1 [&:not(:last-of-type)]:border-b border-gray-100 text-sm hover:bg-gray-100 transition-all duration-300 ease-in-out">
          <span className="flex items-center gap-2 text-base">
            <i className={`${item.icon} text-xl`} />
            {item.name}
          </span>
          {item.children?.length > 0 && (
            <i className="ri-arrow-right-s-line text-sm" />
          )}
        </Link>
        {item.children?.length > 0 && current === i && !matches && (
          <CategoriesChildren setCurrent={setCurrent} item={item} />
        )}
      </li>
      {item.children?.length > 0 && current === i && matches && (
        <CategoriesChildren setCurrent={setCurrent} item={item} />
      )}
    </Fragment>
  ))
}

export default function BottomNav() {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <section className="bg-slate-700">
      <Container className="flex items-center gap-5 py-5 relative">
        {/* DEPARTMENTS */}
        <div className="relative 2md:flex hidden flex-col gap-1 py-3 px-6 rounded-t-md -mb-8 bg-red-400 w-[300px]">
          <h5 className="font-semibold text-white text-base">
            Todos departamentos
          </h5>
          <span className="text-sm text-white">Total 1298 produtos</span>
          <button
            type="button"
            className="absolute top-5 right-5 text-white"
            onClick={() => setOpenDropdown((prevState) => !prevState)}
          >
            <i className="ri-menu-3-line text-xl" />
          </button>
        </div>

        {openDropdown && (
          <ul className="2md:block hidden absolute top-[calc(100%+12px)] w-[calc(100%-64px)] z-20">
            <div className="flex flex-col gap-1 p-2 border border-gray-100 shadow-md rounded-b-sm bg-white w-[300px]">
              <CategoriesLinks />
            </div>
          </ul>
        )}

        {/* SEARCH */}
        <form className="relative flex-1">
          <i className="hidden ri-search-line absolute top-0 left-0 h-full px-6 rounded-l-md text-gray-600 bg-gray-200 sm:flex items-center" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Pesquisar produtos"
            className="w-full font-normal pr-28 sm:pl-20 pl-2 text-sm py-2 rounded-md"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full px-6 bg-red-400 rounded-r-md text-sm hover:bg-gray-900 text-white duration-300 ease-in-out transition-all"
          >
            Pesquisar
          </button>
        </form>
      </Container>
    </section>
  )
}
