import { useLocalStorageUtils } from "$utils"
import { useState } from "react"
const { setStorage, getStorage, clearStorageItem, clearStorage } = useLocalStorageUtils

/* eslint-disable @typescript-eslint/no-explicit-any */
export type StorageKey = "token" | "usersToken" | "isLoggedIn" | "sidebar-item" | "userInfo"

export const useLocalStorage = (key: StorageKey, defaultValue?: any) => {
  const [value, setValue] = useState(() => {
    const item = getStorage(key)
    return item ? JSON.parse(item) : ""
  })

  const setLocalStorage = (value: any) => {
    setStorage(key, value || defaultValue)
    setValue(value)
  }
  const removeLocalStorage = () => {
    clearStorageItem(key)
    setValue("")
  }
  const getLocalStorage = () => {
    return getStorage(key) || defaultValue
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
