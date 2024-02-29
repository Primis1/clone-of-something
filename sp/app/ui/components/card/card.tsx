import c from './card.module.scss'
import Image from 'next/image'
export default function Card({im, h4} : {im: string, h4: string}) {
    return (
        <div >
            <Image src={im}
      width={52}
      height={52}
      alt="Logos" />
            <h4>{h4}</h4>
        </div>
    )
}