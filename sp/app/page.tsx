'use client'
import { useState, useEffect } from 'react'
import Button from './ui/components/btn/button';
export default function Home() {

type props ={ 
  item: { id: number, title: string}
  data: any;
}

const [info, setInfo] = useState<props | null | string[] >([]);
const [error, setError] = useState('');

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('./prof.json', {headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }});
      const data = await response.json(); // add parentheses here
      setInfo(data);
    } catch (error) {
      setError(`Error ${error}`);
    }
  };

  fetchData();
}, []);


useEffect(() => {
  console.log(info)
  console.log(error)
}, [info, error])


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
          {info && info.item && info.item.map((bal: {id: number, title: string}) => (
            <Button key={bal.id} s={'bg-black'} t={bal.title} />
          ))}
        </div>

    </main>
  );
}