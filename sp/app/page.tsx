'use client'
import { useState, useEffect } from 'react'
import Button from './ui/components/btn/button';
export default function Home() {
  

  const [info, setInfo] = useState<string[]>([]);

      fetch('@/public/lib/prof.json') 
      .then(response => response.json())
      .then(data => setInfo(data))
      .catch(error => console.error('Error:', error)); 

  console.log(info)

  return (
      <main>
        <section className='header__section'>
          <div className="container">
            <div className="pt-[218px] pb-[67px]">
              <h1 className="text-[48px]">7457+ Job Listed</h1>
              <p className="text-[58px] py-[42px]">Find Your Dream Job</p>
              <p className="text-[24px]">We provide online instant cash loans with quick <br /> approval that suit your term length</p>
            </div>
            <button className='btn'>Browse Job</button>
          </div>
        </section>

        <div className="container">
          { info && info.map((item, id) => (
            <Button key={id} s={'bg-black'} t={item.title} />
          ))}
        </div>

    </main>
  );
}