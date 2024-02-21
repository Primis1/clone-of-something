import b from './button.module.scss'

export default function Button(props: {t:string}) {
    <button className={`${b.btn} `}>{props.t}</button>
}

// CAN i put props inside of class