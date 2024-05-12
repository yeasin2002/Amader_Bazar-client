Feature Notes: 
 - PWA  
 - captcha while login, sing up 
 - mightymeld
 - React Helmet async 
 - Robot.txt and sitemap.xml




 
/*
? Need to  Study  about this 
```

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

```