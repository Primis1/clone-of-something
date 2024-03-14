import Acticle from '../ui/components/article/article';
import BtnG from '../ui/components/btn/btn-group/btn-group';
import CardG from '../ui/components/card/card-group/card-group';
import Card from '../ui/components/card/card';
import Btn from '../ui/components/btn/button';

export default function Home() {

  
  return (
      <main>
            {/* <Image
      src="/comp 1 (1).png"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
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
              <div className='pr-[75px]'>
                 <CardG />
              </div>
              <article>
                 <Acticle hea={'Popural Category'} desc={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.`} />
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="card-group__wrapper">
              <article className='pr-[75px]'>
                <Acticle hea={'Top Companies'} desc={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.`} cl='text-black'/>
              </article>
              <div className='flex flex-col flex-wrap justify-between h-[475px] w-[675px] '>
                <Card im={'/comp 1 (1).png'} h4={'Webtton'} bg={'bg-blue-700 '} />
                <Card tx='text-black' im={'/comp 1 (2).png'} h4={'Shoppy'} bg={'bg-white'} />
                <Card tx='text-black' im={'/comp 1 (3).png'} h4={'Dribbble'} bg={'bg-white mb-[10px]'} />
                <Card tx='text-black' im={'/comp 1 (4).png'} h4={'Tokopedia'} bg={'bg-white'} />
              </div>
            </div>
          </div>
        </section>

        <section className='section-2'>
          <div className="container">
            <div className="h-[1000px] flex items-center justify-between">
            <div className='flex flex-wrap w-[560]'>
                <Acticle hea={'Looking for a Expert?'} desc={`We provide online instant cash loans with quick approval`} cl='text-[32px] pb-[20px]'/>
                <Btn t={'Browser Job'} />
              </div>

              <div className='flex flex-wrap w-[560] justify-start'>
                <Acticle hea={'Looking for a Job?'} desc={`We provide online instant cash loans with quick approval`} cl='text-[32px] pb-[20px]'/>
                <Btn t={'Post A Job'} />
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}