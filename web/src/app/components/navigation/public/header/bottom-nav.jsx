import { useState } from 'react'
import { Link } from 'react-router-dom'

import { categories } from '../../../../../utils/mock'
import { CLASSNAME } from '.'
import { currencyPrice, makeArrTree } from '../../../../../utils/format'
import config from '../../../../../config'
import Container from '../../../ui/container'
import Badge from '../../../ui/badge'

const serverPublicImages = config.SERVER_PUBLIC_IMAGES

const CategoriesLinks = ({ categories }) => {
  const [current, setCurrent] = useState(null)

  return categories.map((item, i) => (
    <li key={i} onMouseEnter={() => setCurrent(i)}>
      <Link
        to={`/loja/${item.slug}`}
        className={`${CLASSNAME} flex items-center gap-[1px] relative`}
      >
        {item.name}
        {item.children?.length > 0 && (
          <i className="ri-arrow-down-s-line text-sm" />
        )}
        {item.newsted && (
          <Badge className="bg-red-500 text-white absolute -top-3 -right-5 !p-0">
            Novos
          </Badge>
        )}
      </Link>
      {item.children?.length > 0 && current === i && (
        <div
          onMouseLeave={() => setCurrent(null)}
          className="absolute left-0 right-0 top-[calc(100%)] py-10 min-w-[180px] z-20 h-auto w-full bg-gray-50 shadow-sm"
        >
          <Container className="flex gap-6 justify-between">
            {item.children.map((value, key) => (
              <div key={key} className="flex-1 flex flex-col gap-2">
                <h4 className="uppercase text-gray-900">{value.name}</h4>
                <ul className="flex flex-col gap-1">
                  {value.children.map((v, k) => (
                    <li key={k}>
                      <Link to="" className={CLASSNAME}>
                        {v.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to=""
                  className="flex items-center justify-between text-base text-gray-900 mt-auto hover:text-purple-600 duration-300 ease-in-out"
                >
                  Vê todos
                  <i className="ri-arrow-right-line text-sm" />
                </Link>
              </div>
            ))}
            <div className="relative flex-1 flex flex-col gap-2">
              <img
                src={`${serverPublicImages}/${item?.banner?.product?.image}`}
                alt={item?.banner?.product?.name}
                className="h-[400px]"
              />
              <div className="absolute bottom-14 flex flex-col gap-2 items-center py-4 bg-white bg-opacity-80">
                <h4 className="text-xl text-gray-600 line-clamp-2 text-center uppercase">
                  {item?.banner?.product?.name}
                </h4>
                <Link
                  to=""
                  className="text-base text-white bg-red-400 hover:bg-gray-900 w-fit duration-300 ease-in-out text-center px-4 py-2 rounded-full"
                >
                  Comprar agora
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </li>
  ))
}

export default function BottomNav() {
  const categoriesTree = makeArrTree(categories, null)

  return (
    <Container className="flex items-center gap-5 py-2">
      {/* MENU */}
      <button type="button" className="2md:hidden">
        <i className="ri-menu-2-fill text-xl" />
      </button>
      {/* LOGO */}
      <Link to="/" className="relative font-poppins text-2xl font-extrabold">
        <span className="absolute w-10 h-10 rounded-full -top-4 -left-4 -z-10 bg-gray-100 before:absolute before:content-[''] before:w-7 before:h-7 before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-purple-400" />
        <span>.</span>Clothes
      </Link>
      {/* NAV */}
      <nav className="flex items-center justify-between w-full">
        {/* LEFT-CONTENT */}
        <ul className="flex items-center gap-5">
          <Link to="/" className={CLASSNAME}>
            Início
          </Link>
          <CategoriesLinks categories={categoriesTree} />
        </ul>
        {/* RIGHT-CONTENT */}
        <ul className="flex items-center gap-5">
          <button type="button" className="relative">
            <i className="ri-heart-line text-xl" />
            <span className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs">
              0
            </span>
          </button>
          <button type="button" className="relative flex items-center gap-1">
            <div className="relative">
              <i className="ri-shopping-cart-line text-xl" />
              <span className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs">
                0
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Total:</span>
              <span className="text-sm text-purple-600">
                {currencyPrice.format(0.0)}
              </span>
            </div>
          </button>
        </ul>
      </nav>
    </Container>
  )
}
