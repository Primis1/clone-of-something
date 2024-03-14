import c from './card.module.scss'
import Image from 'next/image'

type props = {
    im: string;
    h4: string;
    bg: string;
    tx?: string;
}

export default function Card({im, h4, bg, tx}: props) {
    return (
        <div className={`${c.card} ${bg}`}>
            <Image src={im}
                width={52}
                height={52}
                alt="Logos" 
            />
            <h4 className={tx}>{h4}</h4>
            <p className={tx}>50+ Availible positions</p>
        </div>
    )
}