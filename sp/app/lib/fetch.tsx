'use client';

import { useState, useEffect, ReactNode } from 'react';

type ProfType = any; 

interface FetchProps {
  children: (data: ProfType[]) => ReactNode;
}

export default function Fetch({ children }: FetchProps) {
    const [res, setRes] = useState<ProfType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./prof.json');
            const data: ProfType[] = await response.json();
            setRes(data);
        };

        fetchData();
    }, []);

    return children(res);
}
