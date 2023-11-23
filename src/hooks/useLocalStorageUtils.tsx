/* eslint-disable @typescript-eslint/no-explicit-any */

import { StorageKey } from "./useLocalStorage"

const setStorage = (key: StorageKey, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: StorageKey) => {
  return localStorage.getItem(key)
}

const clearStorageItem = (key: StorageKey) => {
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
