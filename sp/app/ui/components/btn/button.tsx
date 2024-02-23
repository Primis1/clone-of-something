import b from './button.module.scss'

export default function Button(props: {t:string}) {
    return( 
        <button className='btn'>{props.t}</button>
    )
}

//  CAN i put props inside of class