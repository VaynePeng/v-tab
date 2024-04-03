import React, { useState, useRef } from 'react'
import { AnimatePresence, Reorder } from 'framer-motion'

import Item from './Item'
import ToDo from './ToDo'

export interface MenuItem {
  id: string
  icon: string
  link: string
}

const AddMenu = () => {
  return (
    <div className="w-8 h-8 flex-none mr-2 flex justify-center items-center bg-white/30 shadow-sm font-bold cursor-pointer rounded hover:shadow transition ease-in-out text-gray-500">
      +
    </div>
  )
}

const Menu = () => {
  // 是否被拖拽中
  const [isDragging, setIsDragging] = useState<boolean>(false)
  // 是否被拖拽到删除区域
  const isDelete = useRef<boolean>(false)
  const [menuList, setMenuList] = useState<Array<MenuItem>>([
    {
      id: '1',
      link: 'https://mail.google.com/',
      icon: './gmail.png'
    },
    {
      id: '2',
      link: 'https://translate.google.com/',
      icon: 'https://github.githubassets.com/assets/yolo-default-be0bbff04951.png'
    },
    {
      id: '3',
      link: 'https://github.com/',
      icon: 'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png'
    }
  ])

  const navigateToLink = (link: string): void => {
    window.open(link, '_blank')
  }

  return (
    <div className="fixed top-5 right-5">
      <div className="bg-white/20 shadow-sm p-3 rounded-sm">
        <Reorder.Group axis="x" values={menuList} onReorder={setMenuList}>
          <div
            className={`grid grid-cols-[repeat(4,2rem)] gap-2 p-2 rounded shadow-sm border border-transparent bg-white/30 ${
              isDragging ? 'border-dashed !border-red-300' : undefined
            }`}
          >
            <AnimatePresence>
              {menuList.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  onDoubleClick={navigateToLink}
                />
              ))}
              {menuList.length < 4 && <AddMenu />}
            </AnimatePresence>
          </div>
        </Reorder.Group>
        <ToDo />
      </div>
    </div>
  )
}

export default Menu
