import useMediaQuery from '../../../../../hooks/use-mediaQueries'
import useApp from '../../../../../hooks/use-app'
import MiddleNav from './middle-nav'
import BottomNav, { CategoriesLinks } from './bottom-nav'
import TopNav from './top-nav'
import Logo from '../../../ui/logo'
import Tab from './tab'

export const CLASSNAME =
  'hover:text-purple-600 text-sm text-gray-600 transition-all duration-300 ease-in-out'

export default function Header() {
  const matches = useMediaQuery('(min-width: 992px)')
  const { openSidebar, setOpenSidebar } = useApp()

  return (
    <header className="relative 2md:static">
      {!matches && openSidebar && (
        <>
          <div className="fixed w-full h-full left-0 bottom-0 right-0 top-0 bg-black bg-opacity-40 z-20" />
          <div className="2md:hidden absolute top-0 left-0 w-[300px] min-h-[100vh] h-full z-20 bg-white overflow-y-auto">
            <div className="flex items-center justify-between bg-slate-700 px-8 py-6 rounded-br-full">
              <Logo sidebar />
              <button
                type="button"
                className="text-white"
                onClick={() => setOpenSidebar(false)}
              >
                <i className="ri-close-line text-lg" />
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-2 px-2">
              <button
                type="button"
                className="capitalize text-gray-700 bg-gray-100 rounded-sm px-4 py-2"
              >
                Todos departamentos
              </button>
              <div className="py-2 border-b border-gray-100">
                <CategoriesLinks />
              </div>
              <TopNav />
            </div>
          </div>
        </>
      )}
      {!matches && <Tab />}
      {matches && <TopNav />}
      <MiddleNav />
      <BottomNav />
    </header>
  )
}
