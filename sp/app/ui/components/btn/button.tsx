import b from './button.module.scss'

export default function Button({s, t}:  {s: string, t: string}) {
    return( 
        <button className={`${b.btn} ${s}`}>{t}</button>
    )
}

//  CAN i put props inside of class