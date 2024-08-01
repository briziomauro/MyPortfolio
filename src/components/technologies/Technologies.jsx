import React from 'react'
import Html5 from '../../assets/icons/Html5'
import NetCore from '../../assets/icons/NetCore'
import Css from '../../assets/icons/Css'
import ReactJS from '../../assets/icons/ReactJS'
import FramerM from '../../assets/icons/FramerM'
import Tailwind from '../../assets/icons/Tailwind'
import Figma from '../../assets/icons/Figma'
import { useTranslation } from 'react-i18next'

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <section className='text-start mb-40' id="technologies">
      <h2 className='text-[#8491A8] font-bold text-xl'>Stack -</h2>
      <p className='text-white mt-1'>{t('stack-text')}</p>
      <div className='flex flex-wrap mt-4 gap-6'>
        <div className='flex justify-between items-center w-60 border-solid  border-b-4 border border-white p-3 filter grayscale transition duration-300 ease-in-out hover:filter-none'>
          <Html5 />
          <p className='text-white'>HTML5</p>
        </div>
        <div className='flex justify-between items-center w-60 border-solid border-b-4 border border-white p-3 filter grayscale transition duration-300 ease-in-out hover:filter-none'>
          <Css />
          <p className='text-white'>CSS</p>
        </div>
        <div className='flex justify-between items-center w-60 border-solid border-b-4 border border-white p-3 filter grayscale transition duration-300 ease-in-out hover:filter-none'>
          <ReactJS />
          <p className='text-white'>React</p>
        </div>
        <div className='flex justify-between items-center w-60 border-solid border-b-4 border border-white p-3 filter grayscale transition duration-300 ease-in-out hover:filter-none'>
          <Tailwind />
          <p className='text-white'>Tailwind</p>
        </div>
        <div className='flex justify-between items-center w-60 border-solid border-b-4 border border-white p-3 filter grayscale transition duration-300 ease-in-out hover:filter-none'>
          <FramerM />
          <p className='text-white'>Framer Motion</p>
        </div>
        <div className='flex justify-between items-center w-60 border-solid border-b-4 border border-white p-3 filter grayscale transition duration-300 ease-in-out hover:filter-none'>
          <NetCore />
          <p className='text-white'>Net Core</p>
        </div>
        <div className='flex justify-between items-center w-60 border-solid border-b-4 border border-white p-3 filter grayscale transition duration-300 ease-in-out hover:filter-none'>
          <Figma />
          <p className='text-white'>Figma</p>
        </div>
      </div>
    </section>
  )
}

export default Technologies