'use client'
import { useState, useEffect } from 'react'

export default function useFetching() {
    type props ={ 
    bal: { id: number, title: string}
    data: any;
    item: string;
    }


    const [info, setInfo] = useState<props>([]);
    const [error, setError] = useState('');

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch('./prof.json', {headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json',
        }});
         const data = await response.json(); // add parentheses here
            setInfo(data);
        } catch (error) {
            setError(`Error ${error}`);
        }
    };

    fetchData();
    }, []);


     useEffect(() => {
        console.log(info)
        console.log(error)
    }, [info, error])

    return {info, error}
}
