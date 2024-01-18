import { RouterProvider } from 'react-router-dom'

import useApp from '../hooks/use-app'
import router from './routes'
import Loading from './components/ui/loading'

export default function App() {
  const { isLoading } = useApp()
  
  return (
    <>
      {isLoading && <Loading />}
      <RouterProvider router={router} />
    </>
  )
}
