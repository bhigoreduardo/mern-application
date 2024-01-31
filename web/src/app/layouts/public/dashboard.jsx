/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom'

import Container from '../../components/ui/common/container'
import Sidebar from '../../components/navigation/public/dashboard/sidebar'

export default function Dashboard() {
  return (
    <section className="py-[40px]">
      <Container className="flex items-start md:flex-row flex-col gap-6">
        <Sidebar />
        <Outlet />
      </Container>
    </section>
  )
}
