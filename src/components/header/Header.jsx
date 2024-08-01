import React from 'react'
import HeaderTexts from '../headerTexts/HeaderTexts'

const Header = () => {
  return (
    <div
      className='flex h-[600px] justify-center items-center' id='home'
    >

      <section
        className='grid h-fit text-center bg-headerImage bg-cover text-[#F5F1ED] w-full'
      >
        <div className='flex gap-5 justify-center'>
          <HeaderTexts>Mauro</HeaderTexts>
          <HeaderTexts>Brizio</HeaderTexts>
        </div>
        <HeaderTexts>Full-Stack</HeaderTexts>
        <HeaderTexts>Developer</HeaderTexts>
      </section>
    </div>
  )
}

export default Header