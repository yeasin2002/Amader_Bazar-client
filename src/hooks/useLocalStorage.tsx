import { useLocalStorageUtils } from "$utils"
import { useEffect, useState } from "react"
const { setStorage, getStorage, clearStorageItem, clearStorage } = useLocalStorageUtils

/* eslint-disable @typescript-eslint/no-explicit-any */
export type StorageKey = "token" | "usersToken" | "isLoggedIn"

export const useLocalStorage = (key: StorageKey) => {
  const [value, setValue] = useState(() => {
    const item = getStorage(key)
    return item ? JSON.parse(item) : ""
  })
  useEffect(() => {
    const item = getStorage(key)
    if (item) {
      setValue(JSON.parse(item))
    }
  }, [key])

  window.addEventListener("storage", () => {
    const item = getStorage(key)
    if (item) {
      setValue(JSON.parse(item))
    }
  })

  const setLocalStorage = (value: any) => {
    setStorage(key, value)
    setValue(value)
  }
  const removeLocalStorage = () => {
    clearStorageItem(key)
    setValue("")
  }
  const getLocalStorage = () => {
    return getStorage(key)
  }
  const clearAllLocalStorage = () => {
    clearStorage()
    setValue("")
  }

  return {
    value,
    setCustomValue: setValue,
    setLocalStorage,
    removeLocalStorage,
    getLocalStorage,
    clearAllLocalStorage,
  }
}
