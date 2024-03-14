import a from './article.module.scss'

type Art = {
    hea: string;
    desc: string;
    cl?: string;
}

export default function Acticle({hea, desc, cl}: Art){
    
    return(
        <div className='w-[570px]'>
            <h3 className={`${cl} text-[48px]`}>{hea}</h3>
            <p className={`${cl} text=[24px] pt-[60px] leading-normal`}>{desc}</p>
        </div>
    )   
}