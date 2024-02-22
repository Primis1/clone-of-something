import { useState, useEffect } from 'react';

export default function Fetch() {
    const [res, setRes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./prof.json');
            const data = await response.json();
            setRes(data);
        };

        fetchData();
    }, []);

    return res;
}
