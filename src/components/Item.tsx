import React from 'react'
import { Reorder } from 'framer-motion'
import type { MenuItem } from './Menu'

interface Props {
  item: MenuItem
  onDoubleClick?: (link: string) => void
}

const Item = (props: Props) => {
  const { item } = props

  return (
    <Reorder.Item
      drag
      value={item}
      id={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="rounded shadow-sm bg-white/20 w-8 h-8 p-1 cursor-pointer hover:shadow transition ease-in-out"
        onDoubleClick={() => props.onDoubleClick?.(item.link)}
      >
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
