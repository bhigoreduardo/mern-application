import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CaretUp, CaretDown, PhoneCall, List } from 'phosphor-react'

import { comparePathname } from '../../../../../utils/format'
import { phoneMask } from '../../../../../utils/mask'
import { pages } from '../../../../../utils/contants/public'
import useMediaQuery from '../../../../../hooks/use-mediaQuery'
import Container from '../../../ui/common/container'
import Button from '../../../ui/buttons/button'
import Dropdown from '../../../ui/dropdown'

const CategoriesButton = () => {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="group flex items-center justify-between gap-2 font-semibold text-gray-900 text-sm px-6 py-3 bg-gray-50 rounded-sm hover:bg-orange-500 hover:text-white"
        onClick={() => setOpenDropdown((prevState) => !prevState)}
      >
        Todos produtos
        {openDropdown ? <CaretUp size={16} /> : <CaretDown size={16} />}
      </button>
      {openDropdown && <Dropdown setOpenDropdown={setOpenDropdown} />}
    </div>
  )
}

export default function BottomNav() {
  const [openMenu, setOpenMenu] = useState(false)
  const { pathname } = useLocation()
  const matches = useMediaQuery('(max-width: 1024px)')
  const getClassName = (curr) =>
    `flex items-center gap-1 text-sm ${
      comparePathname(pathname, curr) ? 'text-orange-500' : 'text-gray-600'
    } hover:text-orange-600 duration-300 ease-in-out`

  return (
    <div className="bg-white border border-gray-300">
      <Container className="relative flex flex-col sm:flex-row gap-2 items-center justify-between py-2">
        <nav className="flex items-center gap-6">
          <Button
            type="button"
            onClick={() => setOpenMenu((prevState) => !prevState)}
            className="lg:hidden text-gray-900 bg-gray-50 hover:bg-orange-500 hover:text-white"
          >
            <List size={20} />
          </Button>

          <CategoriesButton />

          <div
            className={`flex flex-col lg:flex-row lg:static absolute left-2 lg:left-6 top-[calc(100%+10px)] lg:items-center gap-6 z-40 lg:border-none border border-gray-100 bg-white lg:rounded-none rounded-sm lg:shadow-none shadow-md lg:p-0 p-6 min-w-[250px] ${
              matches && !openMenu && 'hidden'
            }`}
          >
            {pages.map((item, i) => (
              <Link
                key={i}
                to={item.slug}
                className={getClassName(item.slug)}
                onClick={() => setOpenMenu(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <a
          href={`tel:(11) 9 9753-3598`}
          className="flex items-center gap-2 text-gray-900 text-sm"
        >
          <PhoneCall size={18} />
          {phoneMask('11997533598')}
        </a>
      </Container>
    </div>
  )
}
