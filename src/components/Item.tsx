import React, { DragEvent } from 'react'

interface Props {
  id: number
  icon: string
  link: string
  onClick?: (url: string) => void
  onDragEnd?: (e: DragEvent<HTMLDivElement>, id: number) => void
}

const Item = (props: Props) => {
  return (
    <div
      draggable
      className="rounded shadow-sm bg-white/30 w-8 h-8 cursor-pointer hover:shadow transition ease-in-out"
      onClick={() => props.onClick?.(props.link)}
      onDragEnd={(e) => props.onDragEnd?.(e, props.id)}
    >
      <img className="w-full h-full object-cover" src={props.icon} />
    </div>
  )
}

export default Item
