'use client'
import useFetch from '@/src/lib/hooks/fetchHook';
import Card from '../../card/card';

export default function CardG() {
    const {data} = useFetch()
return(
  <div className='flex flex-col '>
    {  data && data.card && data.card.map((card: {img: string, h4: string})=> 
    (<Card key={card} im={card.img} h4={card.h4} bg={'bg-[#17175C]'} />
    ))}
  </div>
  )
}