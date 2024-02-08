/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function Logo({ sidebar = false }) {
  return (
    <Link
      to="/"
      className={`relative font-poppins text-2xl font-extrabold ${
        sidebar ? 'text-white' : 'text-gray-900'
      }`}
    >
      <span
        className={`absolute w-10 h-10 rounded-full bg-gray-100 before:absolute before:content-[''] before:w-7 before:h-7 before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-purple-400 ${
          !sidebar ? '-top-4 -left-4 -z-10' : '-top-5 -left-7 z-0'
        }`}
      />
      <span>.</span>Clothes
    </Link>
  )
}
