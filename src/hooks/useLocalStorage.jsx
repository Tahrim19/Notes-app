import { useEffect, useState } from "react"

export function useLocalStorage(key,initialData) {
    const [storedValue, setStoredValue] = useState(initialData);
    useEffect(()=>{
        const existingData = JSON.parse(localStorage.getItem(key));
        if(existingData){
            setStoredValue(existingData);
        }
        else{
            localStorage.setItem(key,JSON.stringify(initialData));
        }
    },[]);

    const updateLocalStorage = (newValue) => {
        if(typeof newValue === 'function'){
            localStorage.setItem(key,JSON.stringify(newValue(storedValue)));
        }
        else{
            localStorage.setItem(key,JSON.stringify(newValue));
        }
        setStoredValue(newValue);
    }
  return [storedValue , updateLocalStorage]
}
