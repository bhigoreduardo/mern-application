/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import { mergeClassName } from '../../../../utils/format'
import useAdmin from '../../../../hooks/use-admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'

export default function Logo({ href, isAdmin = false, className }) {
  const { isAdminSidebar } = useAdmin()
  const matches = useMediaQuery('(min-width: 1280px)')
  const isIconSidebar = isAdmin ? !isAdminSidebar && matches : true

  return (
    <Link
      className={mergeClassName(
        'flex items-center gap-2 duration-300 ease-in-out',
        className
      )}
      to={href}
    >
      <img src="/icons/logo.svg" alt="Furniture" className="w-12 h-12" />
      {isIconSidebar && (
        <span className="font-bold text-3xl text-white uppercase">
          Furniture
        </span>
      )}
    </Link>
  )
}
