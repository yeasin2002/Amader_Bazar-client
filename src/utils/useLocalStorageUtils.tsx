/* eslint-disable @typescript-eslint/no-explicit-any */

const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
  return localStorage.getItem(key)
}

const clearStorageItem = (key: string) => {
  localStorage.removeItem(key)
}
const clearStorage = () => {
  localStorage.clear()
}

const shakeStorage = (cb: EventListener) => {
  return window.addEventListener("storage", cb)
}

export const useLocalStorageUtils = {
  setStorage,
  getStorage,
  clearStorageItem,
  clearStorage,
  shakeStorage,
}
