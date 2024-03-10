import Acticle from '../ui/components/article/article';
import BtnG from '../ui/components/btn/btn-group/btn-group';
import CardG from '../ui/components/card/card-group/card-group';

export default function Home() {

  
  return (
      <main>
        <section className='header__section'>
          <div className="container">
            <div className="pt-[218px] pb-[67px]">
              <h1 className="text-[48px]">7457+ Job Listed</h1>
              <p className="text-[58px] py-[42px]">Find Your Dream Job</p>
              <p className="text-[24px]">We provide online instant cash loans with quick <br /> approval that suit your term length</p>
            </div>
            <button className='btn bg-black text-white'>Browse Job</button>
          </div>
        </section>

        <div className="container">
          <div className='flex flex-wrap align-center	'> 
              <div>
                <p className='text-black pt-[30px] pl-[20px]'>Popular Search:</p>
              </div>
              <BtnG />
          </div>
        </div>

        <section className='section'>
          <div className="container">
            <div className="card-group__wrapper">
              <CardG />
              <Acticle hea={''} desc={''} />
            </div>
          </div>
        </section>
    </main>
  );
}