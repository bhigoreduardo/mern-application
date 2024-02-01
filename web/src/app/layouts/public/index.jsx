import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from '../../components/navigation/public/header'
import Footer from '../../components/navigation/public/footer'
import Copyright from '../../components/ui/common/copyright'

export default function Public() {
  const location = useLocation()
  const onWindowScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    onWindowScroll()
  }, [location])

  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </section>
  )
}
