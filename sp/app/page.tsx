import Button from './ui/components/btn/button'
import Fetch from '@/app/lib/fetch'
// import {useState } from 'react'

export default function Home() {
  // const resp = <Fetch />

  return (
    <main>
        <section className='header__section'>
          <div className="container">
            <div className="pt-218 pb-67">
              <h1 className="text-lg">7457+ Job Listed</h1>
              <p className="text-xl py-32">Find Your Dream Job</p>
              <p className="text-sm">We provide online instant cash loans with quick approval that suit your term length</p>
            </div>
            <button className='btn'>Browse Job</button>
          </div>
        </section>

        <div className="container">
          { res && res.foEach((prof, index) => <Button key={index} t={prof}/>) }
        </div>
    </main>
  );
}
