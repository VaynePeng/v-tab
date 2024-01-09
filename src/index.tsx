import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/base.css'

const App = () => {
  return <div className="w-screen h-screen text-gray-900 bg-red-50 select-none">Hello World!</div>
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
