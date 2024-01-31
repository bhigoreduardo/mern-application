import { Outlet } from 'react-router-dom'

import AdminProvider from '../../providers/admin'
import Header from '../components/navigation/admin/header'
import Sidebar from '../components/navigation/admin/sidebar'
import Container from '../components/ui/common/container'
import Copyright from '../components/ui/common/copyright'

export default function Admin() {
  return (
    <AdminProvider>
      <main className="flex flex-col min-h-[100vh] md:gap-10 gap-6 bg-gray-50">
        <Header />
        <Container className="flex flex-grow items-start gap-6">
          <Sidebar />
          <Outlet />
        </Container>
        <Copyright />
      </main>
    </AdminProvider>
  )
}
