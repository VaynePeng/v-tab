import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/base.css'

const App = () => {
  return <div className="w-screen h-screen bg-red-50 select-none text-5xl font-mono text-purple-300 backdrop-blur-md flex items-center justify-center">Hello,Vayne.</div>
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
