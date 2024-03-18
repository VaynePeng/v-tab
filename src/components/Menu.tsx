import React, { useState } from 'react'

import Item from './Item'
import CreateMenu from './CreateMenu'

export interface MenuItem {
  icon: string
  link: string
}

const Menu = () => {
  const [menuList, setMenuList] = useState<Array<MenuItem>>([
    {
      link: 'https://translate.google.com/',
      icon: 'https://github.githubassets.com/assets/yolo-default-be0bbff04951.png'
    },
    {
      link: 'https://mail.google.com/',
      icon: 'https://github.githubassets.com/assets/public-sponsor-default-9fa68986b057.png'
    },
    {
      link: 'https://github.com/',
      icon: 'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png'
    },
    {
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

  return (
    <div className="fixed top-5 right-5">
      <div className="bg-white/20 shadow-sm p-3 rounded-sm ">
        <div className="grid grid-cols-4 gap-2">
          {menuList.map((item, index) => (
            <Item
              key={index}
              icon={item.icon}
              link={item.link}
              onClick={navigateToLink}
            />
          ))}
        </div>
        <CreateMenu onCreate={addMenu} />
      </div>
    </div>
  )
}

export default Menu
