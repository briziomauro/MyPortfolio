import React from 'react'
import HeaderTexts from '../headerTexts/HeaderTexts'

const Header = () => {
  return (
    <div
    className='flex h-[600px] justify-center items-center'
    > 

    <section
    className='grid h-fit text-center bg-lime-300 text-black'
    >
      <HeaderTexts>Mauro Brizio</HeaderTexts>
      <HeaderTexts>Full-Stack Developer</HeaderTexts>
    </section>
    </div>
  )
}

export default Header