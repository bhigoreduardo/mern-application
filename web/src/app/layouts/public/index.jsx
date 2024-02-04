import { Outlet } from 'react-router-dom'

import Footer from '../../components/navigation/public/footer'
import Header from '../../components/navigation/public/header'

export default function Layout() {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  )
}
