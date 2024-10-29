import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import Slogan from '@/components/Slogan'

import './global.css'

const App = () => {
  return (
    <div className="w-screen h-screen bg-red-50 relative select-none">
      <Slogan slogan="Welcome." />
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
    <ToastContainer hideProgressBar autoClose={2000} />
  </React.StrictMode>
)
