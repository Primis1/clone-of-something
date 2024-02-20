import Image from 'next/image'
import f from './footer.module.scss'

export default function Footer() {
    <footer space-x-10>
        <div flex-collumn>        
        
            <div className='flex items-center'>

                <Image  src='/search.png' width={65} height={65} alt="logo"/>
                <p>Job Search</p>

            </div>

            <h2>Find Your Dream Job</h2>

            <ul>
                <li>blablabla@gmail.com</li>
                <li>+437-445-3666</li>
                <li>Canada - Ukrain</li>
            </ul>
        </div>

        <div>
            <div flex-collumn>        
            
                <h3>Company</h3>

                <ul>
                    <li>About</li>
                    <li>FAQ</li>
                    <li>Canada - Ukrain</li>
                </ul>
            </div>
            
            <div flex-collumn>        
            
  
                <h3>Catalog</h3>


                <ul>
                    <li>blablabla@gmail.com</li>
                    <li>+437-445-3666</li>
                    <li>Canada - Ukrain</li>
                </ul>
            </div>
   
        </div>



    </footer>
}