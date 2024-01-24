/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import { mergeClassName } from '../../../../utils/format'

export default function NavItem({
  title,
  href,
  rigthIcon,
  leftIcon,
  isSidebar = true,
  label,
  className,
  ...props
}) {
  return (
    <Link
      title={title}
      to={href}
      className={mergeClassName(
        `flex items-center justify-between gap-4 text-sm text-gray-600 bg-white px-4 py-2 active:text-gray-900 active:bg-gray-50 hover:bg-orange-500 hover:text-white`,
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        {leftIcon && leftIcon}
        {isSidebar && <span>{label}</span>}
      </div>
      {rigthIcon && rigthIcon}
    </Link>
  )
}
