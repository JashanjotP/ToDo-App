import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, intialValue) => {
    const[value, setValue] = useState(() => {
        try{
            const localValue = window.localStorage.getItem(key);
            return localValue ? JSON.parse(localValue) : intialValue
        } catch(error){
            console.log(error);
            return intialValue;
        }
    });


    useEffect(()=> {
        window.localStorage.setItem(key,JSON.stringify(value))
    }, [key,value]);

    return [value, setValue];
}
 
export default useLocalStorage;