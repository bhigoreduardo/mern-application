import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  MagnifyingGlass,
  Heart,
  ShoppingCartSimple,
  User,
} from 'phosphor-react'

import useApp from '../../../../../hooks/use-app'
import Container from '../../../ui/common/container'
import Logo from '../../../ui/common/logo'
import Text from '../../../ui/inputs/text'
import AuthCard from '../../../form/public/auth/card'
import CartCard from '../../../ui/cards/cart-card'

const SearchIcon = () => {
  return (
    <button
      type="button"
      className="text-gray-900 hover:text-orange-500 duration-300 ease-in-out"
    >
      <MagnifyingGlass size={20} weight="duotone" />
    </button>
  )
}

const CartButton = () => {
  const [openCard, setOpenCard] = useState(false)
  const { cartItems } = useApp()

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className="relative"
        onClick={() =>
          cartItems?.length > 0 && setOpenCard((prevState) => !prevState)
        }
      >
        {cartItems?.length > 0 && (
          <span className="absolute -top-2 left-3 flex items-center justify-center font-semibold text-blue-900 text-xs h-4 w-4 rounded-full bg-white border border-blue-900">
            {cartItems.length}
          </span>
        )}
        <ShoppingCartSimple size={20} weight="duotone" className="text-white" />
      </button>
      {openCard && cartItems?.length > 0 && (
        <CartCard cartItems={cartItems} setOpenCard={setOpenCard} />
      )}
    </div>
  )
}

const UserButton = () => {
  const location = useLocation()
  const [openCard, setOpenCard] = useState(false)
  useEffect(() => {
    setOpenCard(false)
  }, [location])

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        onClick={() => setOpenCard((prevState) => !prevState)}
      >
        <User size={20} weight="duotone" className="text-white" />
      </button>
      {openCard && <AuthCard setOpenCard={setOpenCard} />}
    </div>
  )
}

export default function MiddleNav() {
  return (
    <div className="bg-blue-900 text-white border-b border-gray-600">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6 py-5">
        <Logo href="/" />
        <Text
          name="search"
          id="search"
          placeholder="Pesquise qualquer assunto..."
          className="w-full md:w-fit flex-grow md:max-w-[600px]"
          icon={<SearchIcon />}
        />
        <div className="flex items-center justify-between gap-4">
          <CartButton />
          <Link to="/favoritos">
            <Heart size={20} weight="duotone" className="text-white" />
          </Link>
          <UserButton />
        </div>
      </Container>
    </div>
  )
}
