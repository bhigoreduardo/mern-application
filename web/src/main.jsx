import React from 'react'
import ReactDOM from 'react-dom/client'

import DefaultProvider from './providers/default'
import App from './app'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DefaultProvider>
      <App />
    </DefaultProvider>
  </React.StrictMode>
)
