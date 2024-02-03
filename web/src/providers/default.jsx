/* eslint-disable react/prop-types */
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppContextProvider from '../contexts/app-context'
import FilterContextProvider from '../contexts/filter-context'
import UserContextProvider from '../contexts/user-context'

export default function DefaultProvider({ children }) {
  return (
    <AppContextProvider>
      <UserContextProvider>
        <FilterContextProvider>
          <ToastContainer
            position="top-right"
            // autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          {children}
        </FilterContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  )
}
