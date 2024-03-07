'use client'
import Button from './ui/components/btn/button';
import Card from './ui/components/card/card';
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
              {info && info.item && info.item.map((bal: {id: number, title: string}) => (
                <Button key={bal.id} s={'text-white bg-indigo-700'} t={bal.title} />
              ))}
          </div>
        </div>

        <section className='section'>
          <div className="container">
            <Card im={''} h4={''} bg={''}  />
          </div>
        </section>
    </main>
  );
}