import BottomNav from './bottom-nav'
import TopNav from './top-nav'

export const CLASSNAME =
  'hover:text-purple-600 text-sm text-gray-600 transition-all duration-300 ease-in-out'

export default function Header() {
  return (
    <header className="relative">
      <TopNav />
      <BottomNav />
    </header>
  )
}
