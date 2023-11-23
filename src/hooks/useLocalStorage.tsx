import { useEffect, useState } from "react"
import { useLocalStorageUtils } from "./useLocalStorageUtils"
const { setStorage, getStorage, clearStorageItem, clearStorage } = useLocalStorageUtils

/* eslint-disable @typescript-eslint/no-explicit-any */
export type StorageKey = "token" | "user"

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

/*
? Need to  Study  about this 
useEffect(() => {
  const handleStorageChange = (e) => {
    if (e.storageArea === localStorage && e.key === key) {
      const item = getStorage(key);
      if (item) {
        setValue(JSON.parse(item));
      } else {
        // Handle case when item is removed from localStorage
        setValue(null);
      }
    }
  };

  window.addEventListener('storage', handleStorageChange);

  // Cleanup function to remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, [key, setValue, getStorage]); // Re-run effect when `key`, `setValue`, or `getStorage` changes
*/
