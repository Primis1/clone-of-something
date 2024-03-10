import a from './article.module.scss'

type Art = {
    hea: string;
    desc: string;
}

export default function Acticle({hea, desc}: Art){
    
    return(
        <>
            <h4>{hea}</h4>
            <p>{desc}</p>
        </>
    )   
}