import React from 'react'
import { createRoot } from 'react-dom/client'
import Slogan from '@/components/Slogan'
import Menu from '@/components/Menu'
import './global.css'

const App = () => {
  return (
    <div className="w-screen h-screen bg-red-50 relative select-none">
      <Slogan slogan=" Hello,Vayne." />
      <Menu />
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
