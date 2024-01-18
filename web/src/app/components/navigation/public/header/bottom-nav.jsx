import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CaretUp, CaretDown, PhoneCall, List } from 'phosphor-react'

import { comparePathname } from '../../../../../utils/format'
import { phoneMask } from '../../../../../utils/mask'
import Container from '../../../ui/common/container'
import Button from '../../../ui/buttons/button'
import { pages } from '../../../../../utils/contants/public'

export default function BottomNav() {
  const [activeButton, setActiveButton] = useState(false)
  const { pathname } = useLocation()
  const getClassName = (curr) =>
    `flex items-center gap-1 text-sm ${
      comparePathname(pathname, curr) ? 'text-orange-500' : 'text-gray-600'
    } hover:text-orange-600 duration-300 ease-in-out`

  return (
    <div className="bg-white border border-gray-300">
      <Container className="flex flex-col sm:flex-row gap-2 items-center justify-between py-2">
        <nav className="flex items-center gap-6">
          <Button
            type="button"
            className="lg:hidden text-gray-900 bg-gray-50 hover:bg-orange-500 hover:text-white"
          >
            <List size={20} />
          </Button>

          <button
            type="button"
            className="group flex items-center justify-between gap-2 font-semibold text-gray-900 text-sm px-6 py-3 bg-gray-50 rounded-sm hover:bg-orange-500 hover:text-white"
            onClick={() => setActiveButton((prevState) => !prevState)}
          >
            Todos produtos
            {activeButton ? <CaretUp size={16} /> : <CaretDown size={16} />}
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {pages.map((item, i) => (
              <Link key={i} to={item.slug} className={getClassName(item.slug)}>
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
