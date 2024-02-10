/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Circle from './circle'

export default function Logo({ sidebar = false }) {
  return (
    <Link
      to="/"
      className={`relative font-poppins text-2xl font-extrabold ${
        sidebar ? 'text-white' : 'text-gray-900'
      }`}
    >
      <Circle
        className={!sidebar ? '-top-4 -left-4 -z-10' : '-top-5 -left-7 z-0'}
      />
      <span>.</span>Clothes
    </Link>
  )
}
