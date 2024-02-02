/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  List,
  GlobeSimple,
  ChatTeardropDots,
  BellSimpleRinging,
  User,
} from 'phosphor-react'

import useAdmin from '../../../../hooks/use-admin'
import useMediaQuery from '../../../../hooks/use-mediaQuery'
import Button from '../../ui/buttons/button'
import Container from '../../ui/common/container'
import Logo from '../../ui/common/logo'
import Badge from '../../ui/common/badge'
import OrdersCard from '../../ui/cards/orders-card'
import ChatsCard from '../../ui/cards/chats-card'
import UserCard from '../../ui/cards/user-card'

const LeftContent = ({ setIsAdminSidebar }) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setIsAdminSidebar((prevState) => !prevState)}
        className="xl:inline-block md:hidden inline-block"
      >
        <List size={20} className="text-white" />
      </button>
      <Button
        onClick={() => navigate('/')}
        className="flex-row-reverse bg-orange-600 hover:bg-orange-500 text-white !py-1 !px-2 uppercase"
      >
        <span className="md:inline-block hidden">Acessar loja</span>
        <GlobeSimple size={20} weight="duotone" />
      </Button>
    </div>
  )
}

const RightContent = () => {
  const location = useLocation()
  const [openChatsCard, setOpenChatsCard] = useState(false)
  const [openOrderCard, setOpenOrderCard] = useState(false)
  const [openUserCard, setOpenUserCard] = useState(false)
  useEffect(() => {
    setOpenChatsCard(false)
    setOpenOrderCard(false)
    setOpenUserCard(false)
  }, [location])

  return (
    <div className="flex items-center gap-8">
      {/* CHATS */}
      <div className="sm:relative">
        <button
          type="button"
          className="relative"
          onClick={() => setOpenChatsCard((prevState) => !prevState)}
        >
          <Badge className="absolute -top-4 left-3 bg-red-500 text-white">
            4
          </Badge>
          <ChatTeardropDots size={24} weight="duotone" className="text-white" />
        </button>
        {openChatsCard && <ChatsCard />}
      </div>
      {/* ORDERS */}
      <div className="sm:relative">
        <button
          type="button"
          onClick={() => setOpenOrderCard((prevState) => !prevState)}
          className="relative"
        >
          <Badge className="absolute -top-4 left-3 bg-red-500 text-white">
            +99
          </Badge>
          <BellSimpleRinging
            size={24}
            weight="duotone"
            className="text-white"
          />
        </button>
        {openOrderCard && <OrdersCard />}
      </div>
      <div className="sm:relative">
        <button
          type="button"
          onClick={() => setOpenUserCard((prevState) => !prevState)}
        >
          <User size={20} weight="duotone" className="text-white" />
        </button>
        {openUserCard && <UserCard />}
      </div>
    </div>
  )
}

export default function Header() {
  const { isAdminSidebar, setIsAdminSidebar } = useAdmin()
  const matches = useMediaQuery('(min-width: 1280px)')

  return (
    <header className="relative bg-blue-900 text-white border-b border-gray-600">
      <Container className="flex items-center justify-start gap-6 py-3">
        <Logo
          isAdmin
          className={`w-full ${
            isAdminSidebar || !matches ? 'max-w-[50px]' : 'max-w-[270px]'
          }`}
        />
        <div className="flex-grow flex items-center md:justify-between justify-end gap-6">
          <LeftContent setIsAdminSidebar={setIsAdminSidebar} />
          <RightContent />
        </div>
      </Container>
    </header>
  )
}
