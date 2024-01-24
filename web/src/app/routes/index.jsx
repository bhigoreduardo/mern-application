import { createBrowserRouter } from 'react-router-dom'

import publicRoutes from './public'
import adminRoutes from './admin'

const router = createBrowserRouter(publicRoutes.concat(adminRoutes))

export default router
