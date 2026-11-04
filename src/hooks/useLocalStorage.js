import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      return JSON.parse(savedValue);
    }
    try {
      return savedValue !== null ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
