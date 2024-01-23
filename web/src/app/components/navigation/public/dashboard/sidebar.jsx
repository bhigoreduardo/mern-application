import { useLocation } from 'react-router-dom'

import { accountPagesItems } from '../../../../../utils/contants/public'
import { comparePathname } from '../../../../../utils/format'
import NavItem from '../../../ui/common/nav-item'

export default function Sidebar() {
  const { pathname } = useLocation()
  const path = pathname.split('/')[2]
  const getClassName = (curr) =>
    comparePathname(path, curr) && 'text-white !bg-orange-500'

  return (
    <aside className="w-full max-w-[270px] border border-gray-100 bg-white rounded-sm shadow-md py-2">
      {accountPagesItems.map((item, i) => (
        <NavItem
          key={i}
          title={item.name}
          href={item.slug}
          leftIcon={item.icon}
          isSidebar
          label={item.name}
          className={`${
            i + 1 === accountPagesItems.length && 'text-red-500'
          } ${getClassName(i === 0 ? undefined : item.slug)}`}
        />
      ))}
    </aside>
  )
}
