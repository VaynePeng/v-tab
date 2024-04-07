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
    <div className="w-8 h-8 flex-none mr-2 flex justify-center items-center bg-white/20 shadow-sm font-bold cursor-pointer rounded hover:shadow transition ease-in-out text-gray-500">
      +
    </div>
  )
}

const Menu = () => {
  const timer = useRef<number | null>(null)
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
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      open(link, '_blank')
    }, 200)
  }

  const deleteItem = (id: string): void => {
    timer.current && clearTimeout(timer.current)
    setMenuList(menuList.filter((item) => item.id !== id))
  }

  return (
    <div className="fixed top-5 right-5">
      <div className="bg-white/20 shadow-sm p-3 rounded-sm">
        <Reorder.Group axis="x" values={menuList} onReorder={setMenuList}>
          <div
            className={
              'grid grid-cols-[repeat(4,2rem)] gap-2 p-2 rounded shadow-sm border border-transparent bg-white/20'
            }
          >
            <AnimatePresence>
              {menuList.map((item) => (
                <Reorder.Item
                  drag
                  key={item.id}
                  value={item}
                  id={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Item
                    item={item}
                    onClick={navigateToLink}
                    onDoubleClick={deleteItem}
                  />
                </Reorder.Item>
              ))}
              {menuList.length < 4 && (
                <Reorder.Item
                  drag={false}
                  value={null}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <AddMenu />
                </Reorder.Item>
              )}
            </AnimatePresence>
          </div>
        </Reorder.Group>
        <ToDo />
      </div>
    </div>
  )
}
export default Menu
