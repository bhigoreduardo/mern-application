import { useNavigate } from 'react-router-dom'
import {
  List,
  GlobeSimple,
  ChatTeardropDots,
  BellSimpleRinging,
  User,
} from 'phosphor-react'

import Button from '../../ui/buttons/button'
import Container from '../../ui/common/container'
import Logo from '../../ui/common/logo'
import Badge from '../../ui/common/badge'

const LeftContent = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-3">
      <button type="button">
        <List size={20} className="text-white" />
      </button>
      <Button
        onClick={() => navigate('/')}
        className="flex-row-reverse bg-orange-600 hover:bg-orange-500 text-white !py-1 !px-2 uppercase"
      >
        Acessar loja
        <GlobeSimple size={20} weight="duotone" />
      </Button>
    </div>
  )
}

const RightContent = () => (
  <div className="flex items-center gap-8">
    <button className="relative">
      <Badge className="absolute -top-4 left-3 bg-red-500 text-white">4</Badge>
      <ChatTeardropDots size={24} weight="duotone" className="text-white" />
    </button>
    <button className="relative">
      <Badge className="absolute -top-4 left-3 bg-red-500 text-white">
        +99
      </Badge>
      <BellSimpleRinging size={24} weight="duotone" className="text-white" />
    </button>
    <button>
      <User size={20} weight="duotone" className="text-white" />
    </button>
  </div>
)

export default function Header() {
  const isSidebar = true

  return (
    <header className="bg-blue-900 text-white border-b border-gray-600">
      <Container className="flex items-center justify-start gap-6 py-3">
        <Logo
          className={`w-full ${isSidebar ? 'max-w-[270px]' : 'max-w-[50px]'}`}
        />
        <div className="flex-grow flex items-center justify-between gap-6">
          <LeftContent />
          <RightContent />
        </div>
      </Container>
    </header>
  )
}
