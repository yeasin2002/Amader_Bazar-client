"use client"

const setStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") return localStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
  if (typeof window !== "undefined") return localStorage.getItem(key)
}

const clearStorageItem = (key: string) => {
  if (typeof window !== "undefined") localStorage.removeItem(key)
}
const clearStorage = () => {
  if (typeof window !== "undefined") localStorage.clear()
}

const shakeStorage = (cb: EventListener) => {
  if (typeof window !== "undefined") return window.addEventListener("storage", cb)
}

export const useLocalStorageUtils = {
  setStorage,
  getStorage,
  clearStorageItem,
  clearStorage,
  shakeStorage,
}
