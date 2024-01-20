/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import { mergeClassName } from '../../../../utils/format'

export default function NavItem({
  title,
  href,
  rigthIcon,
  leftIcon,
  isSidebar,
  label,
  className,
  ...props
}) {
  return (
    <Link
      title={title}
      to={href}
      className={mergeClassName(
        `flex items-center justify-between gap-4 text-sm text-gray-600 bg-white px-4 py-2 active:text-gray-900 active:bg-gray-50`,
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        {rigthIcon && rigthIcon}
        {isSidebar && <span>{label}</span>}
      </div>
      {leftIcon && leftIcon}
    </Link>
  )
}
