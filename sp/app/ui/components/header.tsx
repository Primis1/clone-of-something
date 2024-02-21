import Image from 'next/image'
import h from './header.module.scss';

export default function Header() {
      
    return (
    <div className='absolute right-0 left-0'>
        <div className="container">
            <header className='header'>

                <div className={h.header__inner}>
                
                    <div className='flex items-center'>

                        <Image  src='/search.png' width={65} height={65} alt="logo"/>
                        <p>Job Search</p>
                    
                    </div>

                    <div className={h.items}>

                        <ul className='flex w-460px space-x-10'>
                            <li>Home</li>
                            <li>Browse Job</li>
                            <li>Candidats</li>
                            <li>About</li>
                        </ul>
                        
                        <div className={`${h.btn__inner} w-300 space-x-10 pl-10`}>
                            <button className='btn '>Sing In</button>
                            <button className='btn bg-black text-white'>Post a Job</button>
                        </div>
                        
                    </div>

                </div>
            </header>
            {/* 
            <>
                <h1 className='text-3xl'></h1>
                <p className='text-4xl'></p>
            </> */}
            
         </div>
    </div>

    )
  }