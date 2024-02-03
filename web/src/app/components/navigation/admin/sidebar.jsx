import { useLocation } from 'react-router-dom'

import { pages } from '../../../../utils/contants/admin'
import { comparePathname } from '../../../../utils/format'
import { UserEnum } from '../../../../types/enum-type'
import useAdmin from '../../../../hooks/use-admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import NavItem from '../../ui/common/nav-item'

export default function Sidebar() {
  const { pathname } = useLocation()
  const { isAdminSidebar, setIsAdminSidebar } = useAdmin()
  const matches = useMediaQuery('(min-width: 1280px)')
  const mobileMatches = useMediaQuery('(max-width: 769px)')
  const isIconSidebar = matches && !isAdminSidebar
  const path = pathname.split('/')[3]

  const renderPages = pages(UserEnum.Store)
  const getClassName = (curr) =>
    comparePathname(path, curr) && 'text-white !bg-orange-500'
  const handleSidebar = () =>
    mobileMatches && setIsAdminSidebar((prevState) => !prevState)

  return (
    <aside
      className={`w-[270px] min-w-[270px] absolute -left-[100%] md:static border border-gray-100 bg-white rounded-sm shadow-md py-2 duration-300 ease-in-out z-50 ${
        mobileMatches
          ? isAdminSidebar && '!left-2'
          : !isIconSidebar && 'max-w-[50px] min-w-[50px]'
      }`}
    >
      {renderPages.map((item, i) => (
        <NavItem
          key={i}
          title={item.name}
          href={item.slug}
          leftIcon={item.icon}
          isSidebar={mobileMatches ? isAdminSidebar : isIconSidebar}
          label={item.name}
          onClick={handleSidebar}
          className={`${
            i + 1 === renderPages.length && 'text-red-500'
          } ${getClassName(i === 0 ? undefined : item.slug)}`}
        />
      ))}
    </aside>
  )
}
