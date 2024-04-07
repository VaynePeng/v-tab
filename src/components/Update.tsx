import React from 'react'

interface Props {
  cover?: string
  onUpdate?: (url: string) => void
}

const Update = (props: Props) => {
  const handleUpload = (): void => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/png, image/jpeg, image/jpg, image/webp, image/svg'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement)?.files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        const data = e?.target?.result
        console.log('update success:', data)
        props.onUpdate?.(data as string)
      }
    }
    input.click()
  }

  return (
    <div
      className="w-8 h-8 flex-none mr-2 flex justify-center items-center bg-white/20 shadow-sm font-bold cursor-pointer rounded hover:shadow transition ease-in-out text-gray-500"
      onClick={handleUpload}
    >
      {Boolean(props.cover) ? (
        <img className="w-full h-full object-cover" src={props.cover} />
      ) : (
        '+'
      )}
    </div>
  )
}

export default Update
