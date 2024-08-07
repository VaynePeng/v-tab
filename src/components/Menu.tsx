import React from 'react'

import ToDo from './Todo'

export interface MenuItem {
  id: string
  icon: string
  link: string
}

const Menu = () => {
  return (
    <div className="fixed top-5 right-5">
      <div className="bg-white/20 shadow-sm p-3 rounded-sm">
        <div className='font-bold'>笔记</div>
        <ToDo />
      </div>
    </div>
  )
}
export default Menu
