import {
  MagnifyingGlass,
  Heart,
  ShoppingCartSimple,
  User,
} from 'phosphor-react'

import Container from '../../../ui/common/container'
import Logo from '../../../ui/common/logo'
import Text from '../../../ui/inputs/text'

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
  return (
    <button type="button" className="relative">
      <span className="absolute -top-2 left-3 flex items-center justify-center font-semibold text-blue-900 text-xs h-4 w-4 rounded-full bg-white border border-blue-900">
        2
      </span>
      <ShoppingCartSimple size={20} weight="duotone" className="text-white" />
    </button>
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
          <button type="button">
            <Heart size={20} weight="duotone" className="text-white" />
          </button>
          <button type="button">
            <User size={20} weight="duotone" className="text-white" />
          </button>
        </div>
      </Container>
    </div>
  )
}
