import React, { useState, DragEvent, useRef } from 'react'
import { Reorder } from 'framer-motion'

import Item from './Item'
import CreateMenu from './CreateMenu'

export interface MenuItem {
  id: string
  icon: string
  link: string
}

const Menu = () => {
  // 是否被拖拽中
  const [isDragging, setIsDragging] = useState<boolean>(false)
  // 是否被拖拽到删除区域
  const isDelete = useRef<boolean>(false)
  const [menuList, setMenuList] = useState<Array<MenuItem>>([
    {
      id: '1',
      link: 'https://translate.google.com/',
      icon: 'https://github.githubassets.com/assets/yolo-default-be0bbff04951.png'
    },
    {
      id: '2',
      link: 'https://mail.google.com/',
      icon: 'https://github.githubassets.com/assets/public-sponsor-default-9fa68986b057.png'
    },
    {
      id: '3',
      link: 'https://github.com/',
      icon: 'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png'
    },
    {
      id: '4',
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

  return (
    <div
      className="fixed top-5 right-5"
      onDragEnter={enterContext}
      onDragLeave={leaveContext}
    >
      <div className="bg-white/20 shadow-sm p-3 rounded-sm">
        <Reorder.Group axis="x" onReorder={setMenuList} values={menuList}>
          <div
            className={`grid grid-cols-[repeat(4,2rem)] gap-2 p-2 rounded shadow-sm border border-transparent bg-white/30 ${
              isDragging ? 'border-dashed !border-red-300' : undefined
            }`}
          >
            {menuList.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </Reorder.Group>
        <CreateMenu onCreate={addMenu} />
      </div>
    </div>
  )
}

export default Menu
