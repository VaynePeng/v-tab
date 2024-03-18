import React, { useState, DragEvent, useRef } from 'react'

import Item from './Item'
import CreateMenu from './CreateMenu'

export interface MenuItem {
  id: number
  icon: string
  link: string
}

const Menu = () => {
  // 是否被拖拽到删除区域
  const isDelete = useRef<boolean>(false)
  const [menuList, setMenuList] = useState<Array<MenuItem>>([
    {
      id: 1,
      link: 'https://translate.google.com/',
      icon: 'https://github.githubassets.com/assets/yolo-default-be0bbff04951.png'
    },
    {
      id: 2,
      link: 'https://mail.google.com/',
      icon: 'https://github.githubassets.com/assets/public-sponsor-default-9fa68986b057.png'
    },
    {
      id: 3,
      link: 'https://github.com/',
      icon: 'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png'
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/',
      icon: 'https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png'
    }
  ])

  const navigateToLink = (link: string): void => {
    window.open(link, '_blank')
  }

  const addMenu = (menuItem: MenuItem): void => {
    setMenuList((prev) => [...prev, menuItem])
  }

  const enterContext = (e: DragEvent<HTMLDivElement>): void => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) return
    e.preventDefault()
    isDelete.current = false
  }

  const leaveContext = (e: DragEvent<HTMLDivElement>): void => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return
    e.preventDefault()
    isDelete.current = true
  }

  const menuDragEnd = (e: DragEvent<HTMLDivElement>, id: number): void => {
    if (isDelete.current) {
      setMenuList((prev) => prev.filter((item) => item.id !== id))
    }
  }

  return (
    <div
      className="fixed top-5 right-5"
      onDragEnter={enterContext}
      onDragLeave={leaveContext}
    >
      <div className="bg-white/20 shadow-sm p-3 rounded-sm">
        <div
          className="grid grid-cols-4 gap-2"
          onDragOver={(e) => e.preventDefault()}
        >
          {menuList.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              icon={item.icon}
              link={item.link}
              onClick={navigateToLink}
              onDragEnd={menuDragEnd}
            />
          ))}
        </div>
        <CreateMenu onCreate={addMenu} />
      </div>
    </div>
  )
}

export default Menu
