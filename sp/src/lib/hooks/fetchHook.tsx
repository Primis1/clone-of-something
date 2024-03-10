'use client'

import { useState, useEffect } from "react";


export default function useFetch<T extends Record<string, unknown>>() {

  const [data, setData] = useState<T>()

    useEffect(() => {
       try {
      fetch('./prof.json', {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
    
      })
      .then((data) => data.json() as Promise<T>)
      .then((data) => setData(data))
    } catch (error) {
      console.error("Error:", error);
    }
    }, [])

    return {data}
};