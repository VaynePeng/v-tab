import React from 'react'

interface Props {
  slogan: string
}

const Slogan = (props: Props) => {
  return (
    <div className="text-5xl font-mono text-purple-300 backdrop-blur-md absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      {props.slogan}
    </div>
  )
}

export default Slogan
