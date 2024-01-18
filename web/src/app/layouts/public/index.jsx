import { Outlet } from 'react-router-dom'

import Header from '../../components/navigation/public/header'
import Footer from '../../components/navigation/public/footer'
import Copyright from '../../components/ui/common/copyright'

export default function Public() {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </section>
  )
}
