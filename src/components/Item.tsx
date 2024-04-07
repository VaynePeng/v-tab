import React from 'react'
import type { MenuItem } from './Menu'

interface Props {
  item: MenuItem
  onClick?: (link: string) => void
  onDoubleClick?: (id: string) => void
}

const Item = (props: Props) => {
  const { item } = props

  return (
    <div
      className="rounded shadow-sm bg-white/20 w-8 h-8 p-1 cursor-pointer hover:shadow transition ease-in-out"
      onClick={() => props.onClick?.(item.link)}
      onDoubleClick={() => props.onDoubleClick?.(item.id)}
    >
      <img
        className="w-full h-full object-cover"
        draggable="false"
        src={item.icon}
      />
    </div>
  )
}

export default Item
