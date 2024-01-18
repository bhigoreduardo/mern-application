/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function FooterLink({ href, label }) {
  return (
    <Link
      to={href}
      className="group relative flex items-center hover:pl-8 text-sm text-gray-400 hover:font-semibold hover:text-white overflow-hidden duration-300 ease-in-out"
    >
      <span className="w-6 h-[3px] bg-yellow-500 rounded-sm inline-block absolute -left-[100%] group-hover:left-0 duration-300 ease-in-out" />
      {label}
    </Link>
  )
}
