import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import type { MenuItem } from './Menu'

import Update from './Update'

interface Props {
  onCreate?: (menuItem: MenuItem) => void
}

const CreateMenu = (props: Props) => {
  const [urlError, setUrlError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [menuItem, setMenuItem] = useState<MenuItem>({
    id: new Date().getTime(),
    icon: '',
    link: ''
  })

  const updateImage = (icon: string): void => {
    if (urlError) {
      setUrlError(false)
    }
    if (!icon) return
    setMenuItem((prev) => ({
      ...prev,
      icon
    }))
  }

  const verifyUrl = (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const inputUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    const link = e.target.value

    if (link && !verifyUrl(link)) {
      setErrorMessage('Invalid URL')
      setUrlError(true)
    } else {
      setUrlError(false)
    }
    setMenuItem((prev) => ({
      ...prev,
      link
    }))
  }

  const submit = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== 'Enter' || urlError) return
    if (!menuItem.icon || !menuItem.link) {
      setErrorMessage('Please fill out both fields')
      setUrlError(true)
      return
    }
    props.onCreate?.(menuItem)
    setMenuItem({
      id: new Date().getTime(),
      icon: '',
      link: ''
    })
  }

  return (
    <div className="mt-2">
      <div className="flex">
        <Update onUpdate={updateImage} cover={menuItem.icon} />
        <input
          className="flex-1 w-28 bg-white/30 shadow-sm p-2 h-8 outline-none rounded hover:shadow transition ease-in-out"
          value={menuItem.link}
          onInput={inputUrl}
          onKeyDown={submit}
        ></input>
      </div>
      {urlError && <p className="text-red-400 text-xs mt-2">{errorMessage}</p>}
    </div>
  )
}

export default CreateMenu
