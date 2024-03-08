'use client'

import { useEffect, useState } from "react"
import {fetchSomething} from './functions/function'

type Props = {
    test: string;
}

export default function FetchF<T extends Record<string, unknown>>(url: string){
    const [info, setInfo] = useState<Props>()
    const [error, setError] = useState('') 

    useEffect(() => {
        fetchSomething("./prof.json")
        .then((data) => {
            setInfo(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          })
    }, [])    

    return{info, error}
}