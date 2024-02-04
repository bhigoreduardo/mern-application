import { RouterProvider } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

import router from './routes'

export default function App() {
  return <RouterProvider router={router} />
}
