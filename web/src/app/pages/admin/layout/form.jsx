/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom'

import { contact } from '../../../../utils/mock'
import Home from '../../../components/form/admin/layout/home'
import About from '../../../components/form/admin/layout/about'
import Contact from '../../../components/form/admin/layout/contact'

const SwitchForm = ({ path }) => {
  switch (path) {
    case 'pagina-inicial':
      return <Home />
    case 'sobre':
      return <About />
    case 'contato':
      return <Contact data={contact} />
    default:
      return null
  }
}

export default function Form() {
  const { pathname } = useLocation()
  const path = pathname.split('/')[4]

  return (
    <section className="flex-grow flex flex-col w-full">
      <SwitchForm path={path} />
    </section>
  )
}
