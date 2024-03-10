'use client'
import useFetch from '@/src/lib/hooks/fetchHook';
import Button from '../../btn/button';

export default function BtnG( ) {
    const {data} = useFetch()
return(
  <>
  {data && data.item && data.item.map((item: {id: number, title: string}) => (
    <Button key={item.id} s={'text-white bg-indigo-700'} t={item.title} />
  ))}</>)
}