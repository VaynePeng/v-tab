import React from 'react'
import { Reorder } from 'framer-motion'
import { MenuItem } from './Menu'

interface Props {
  item: MenuItem
}

const Item = (props: Props) => {
  const { item } = props

  return (
    <Reorder.Item drag value={item} id={item.id}>
      <div className="rounded shadow-sm bg-white/30 w-8 h-8 cursor-pointer hover:shadow transition ease-in-out">
        <img
          className="w-full h-full object-cover"
          draggable="false"
          src={item.icon}
        />
      </div>
    </Reorder.Item>
  )
}

export default Item
