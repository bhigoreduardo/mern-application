import BottomNav from './bottom-nav'
import MiddleNav from './middle-nav'
import TopNav from './top-nav'

export default function Header() {
  return (
    <header>
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </header>
  )
}
