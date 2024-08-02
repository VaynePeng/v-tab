import { useState } from 'react'

const useStorage = <T>(
  key: string,
  defaultValue: T
): [T, (params: T) => void] => {
  const [value, setValue] = useState<T>(defaultValue)

  const storageValue = localStorage.getItem(key)
  if (typeof defaultValue === 'object' && storageValue) {
    setValue(JSON.parse(storageValue) as T)
  } else {
    setValue(storageValue as T)
  }

  const setStorage = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [value, setStorage]
}
