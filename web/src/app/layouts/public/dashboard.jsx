/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom'

import Container from '../../components/ui/common/container'
import Sidebar from '../../components/navigation/public/dashboard/sidebar'

export default function Dashboard() {
  return (
    <Container className="flex items-start gap-6 py-[40px]">
      <Sidebar />
      <Outlet />
    </Container>
  )
}
