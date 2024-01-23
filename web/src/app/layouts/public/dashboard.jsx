/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom'
import { List } from 'phosphor-react'

import Container from '../../components/ui/common/container'
import Sidebar from '../../components/navigation/public/dashboard/sidebar'
import Button from '../../components/ui/buttons/button'

export default function Dashboard() {
  return (
    <section className="py-[40px]">
      <Button
        type="button"
        // onClick={() => setIsDashboardSidebar((prevState) => !prevState)}
        className="sm:hidden text-gray-900 bg-gray-50 hover:bg-orange-500 hover:text-white mx-2 mb-2"
      >
        <List size={20} />
      </Button>
      <Container className="flex items-start gap-6">
        <Sidebar />
        <Outlet />
      </Container>
    </section>
  )
}
