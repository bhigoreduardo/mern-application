import { useLocation } from 'react-router-dom'

import { accountPagesItems } from '../../../../../utils/contants/public'
import { comparePathname } from '../../../../../utils/format'
import NavItem from '../../../ui/common/nav-item'
import useMediaQuery from '../../../../../hooks/use-mediaQuery'

export default function Sidebar() {
  const { pathname } = useLocation()
  const matches = useMediaQuery('(min-width: 1024px)')
  const path = pathname.split('/')[2]
  const getClassName = (curr) =>
    comparePathname(path, curr) && 'text-white !bg-orange-500'

  return (
    <aside className="flex md:flex-col w-fit lg:w-full md:max-w-[270px] lg:min-w-[270px] border border-gray-100 bg-white rounded-sm shadow-md md:py-2 md:px-0 px-2 flex-wrap justify-center">
      {accountPagesItems.map((item, i) => (
        <NavItem
          key={i}
          title={item.name}
          href={item.slug}
          leftIcon={item.icon}
          isSidebar={matches}
          label={item.name}
          className={`${
            i + 1 === accountPagesItems.length && 'text-red-500'
          } ${getClassName(i === 0 ? undefined : item.slug)}`}
        />
      ))}
    </aside>
  )
}
