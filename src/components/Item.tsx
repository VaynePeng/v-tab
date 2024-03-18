import React from 'react'

interface Props {
  icon: string
  link: string
  onClick?: (url: string) => void
}

const Item = (props: Props) => {
  return (
    <div
      className="rounded shadow-sm bg-white/30 w-8 h-8 cursor-pointer hover:shadow transition ease-in-out"
      onClick={() => props.onClick?.(props.link)}
    >
      <img className="w-full h-full object-cover" src={props.icon} />
    </div>
  )
}

export default Item
