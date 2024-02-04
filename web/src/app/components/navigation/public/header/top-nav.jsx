/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  headerCurrency,
  headerLocalce,
  headerMainLinks,
  headerSecondLinks,
} from '../../../../../utils/contants/public'
import { CLASSNAME } from '.'
import Container from '../../../ui/container'

const Links = ({ arrLinks, className }) => (
  <ul className="flex items-center gap-8">
    {arrLinks.map((item, i) => (
      <li key={i}>
        <Link to={item.slug} className={className}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
)

const Buttons = ({ arrLinks, initialValue, className }) => {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(initialValue)
  const handleToggleOpen = () => setOpen((prevState) => !prevState)

  return (
    <li
      className="relative"
      onMouseEnter={handleToggleOpen}
      onMouseLeave={handleToggleOpen}
    >
      <button
        type="button"
        className={`${className} flex items-center gap-[1px]`}
      >
        {current}
        <i className="ri-arrow-down-s-line text-xl" />
      </button>
      {open && (
        <ul className="absolute -left-4 bg-white border border-gray-200 rounded-sm z-20">
          {arrLinks.map(
            (item, i) =>
              item !== current && (
                <li
                  key={i}
                  className="hover:bg-gray-200 transition-all duration-300 ease-in-out"
                  onClick={() => setCurrent(item)}
                >
                  <button
                    type="button"
                    className="text-sm text-gray-600 px-4 py-4"
                  >
                    {item}
                  </button>
                </li>
              )
          )}
        </ul>
      )}
    </li>
  )
}

export default function TopNav() {
  return (
    <Container className="flex items-center justify-between py-2">
      {/* MAIN LINKS */}
      <Links arrLinks={headerMainLinks} className={CLASSNAME} />
      {/* SECOND LINKS */}
      <ul className="flex items-center gap-8">
        <Links arrLinks={headerSecondLinks} className={CLASSNAME} />
        <Buttons
          arrLinks={headerCurrency}
          initialValue="R$"
          className={CLASSNAME}
        />
        <Buttons
          arrLinks={headerLocalce}
          initialValue="Português-BR"
          className={CLASSNAME}
        />
      </ul>
    </Container>
  )
}
