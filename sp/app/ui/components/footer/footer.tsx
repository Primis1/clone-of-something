import Image from 'next/image'
import f from './footer.module.scss'

export default function Footer() {
    return (
        
        <div className={f.footer__section}>
            <div className="container">

                <footer className={`${f.footer}`}>
                        <div className='flex-collumn'>        
                        
                            <div className='flex items-center'>

                                <Image  src='/search.png' width={65} height={65} alt="logo"/>
                                <p>Job Search</p>

                            </div>

                            <h3 className={`${f.footer__title}`}>Find Your Dream Job</h3>

                            <ul>
                                <li>+437-445-3666</li>
                                <li className={`${f.footer__list}`}>blablabla@gmail.com</li>
                                <li>Canada - Ukrain</li>
                            </ul>
                        </div>

                        <div className='flex space-x-10'>
                            <div className='flex-collumn'>        
                            
                                <h3 className={`${f.footer__title}`}>Company</h3>

                                <ul>
                                    <li>About</li>
                                    <li className={`${f.footer__list}`}>blablabla@gmail.com</li>
                                    <li>Canada - Ukraine</li>
                                </ul>
                            </div>
                            
                            <div className='flex-collumn'>        
                            
                
                                <h3 className={`${f.footer__title}`}>Catalog</h3>


                                <ul>
                                    <li>blablabla@gmail.com</li>
                                    <li className={`${f.footer__list}`}>blablabla@gmail.com</li>
                                    <li>Canada - Ukrain</li>
                                </ul>
                            </div>
                
                        </div>


                    
                </footer>
            </div>
        </div>
    )

}