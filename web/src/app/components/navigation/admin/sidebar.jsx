import { useLocation } from 'react-router-dom'

import { pages } from '../../../../utils/contants/admin'
import { comparePathname } from '../../../../utils/format'
import NavItem from '../../ui/common/nav-item'

export default function Sidebar() {
  const { pathname } = useLocation()
  const path = pathname.split('/')[3]
  const isSidebar = true

  const isStore = true
  const isAdmin = true
  const isEmployee = true
  const renderPages = pages(isStore, isAdmin, isEmployee)
  const getClassName = (curr) =>
    comparePathname(path, curr) && 'text-white !bg-orange-500'

  return (
    <aside
      className={`w-full ${
        isSidebar ? 'max-w-[270px]' : 'max-w-[50px]'
      } border border-gray-100 bg-white rounded-sm shadow-md py-2 duration-300 ease-in-out`}
    >
      {renderPages.map((item, i) => (
        <NavItem
          key={i}
          title={item.name}
          href={item.slug}
          leftIcon={item.icon}
          // isSidebar={matches}
          label={item.name}
          className={`${
            i + 1 === renderPages.length && 'text-red-500'
          } ${getClassName(i === 0 ? undefined : item.slug)}`}
        />
      ))}
    </aside>
  )
}
