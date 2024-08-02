import React from 'react'
import HeaderTexts from '../headerTexts/HeaderTexts'

const Header = () => {
  return (
    <div
      className='flex md:h-[600px] h-[500px] mb-40 my-5 md:m-0 justify-center items-center bg-headerImage bg-cover lg:bg-none' id='home'
    >
      <section
        className='grid h-fit text-center lg:bg-headerImage bg-cover text-[#F5F1ED] w-full'
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