import React from 'react'
import HeaderTexts from '../headerTexts/HeaderTexts'
import HeaderSubTexts from '../headerTexts/headerSubTexts'

const Header = () => {
  return (
    <div
      className='flex h-[500px] mb-14 my-10 justify-center items-center bg-headerImage bg-cover ' id='home'
    >
      <section
        className='grid h-fit text-center text-[#F5F1ED] w-full'
      >
        <div className='flex gap-5 justify-center'>
          <HeaderTexts>Mauro</HeaderTexts>
          <HeaderTexts>Brizio</HeaderTexts>
        </div>
        <div className='flex justify-center gap-4'>
          <HeaderSubTexts>Full-Stack</HeaderSubTexts>
          <HeaderSubTexts>Developer</HeaderSubTexts>
        </div>
      </section>
    </div>
  )
}

export default Header