import React from 'react'
import Github from '../../assets/icons/Github'
import LinkedIn from '../../assets/icons/LinkedIn'
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col justify-center items-center mt-8 md:mt-0 h-[700px] font-robotoCon' id='aboutme' >
      <div className='w-auto md:w-[600px]'>

        <div className='relative text-center mb-10'>
          <div className='absolute inset-0 top-[-80px] z-10 flex justify-center items-center md:w-auto whitespace-nowrap'>
            <h2 className='text-7xl md:text-[150px] font-playfair text-zinc-800 overflow-hidden md:overflow-visible uppercase'>
              {t('aboutme')}
            </h2>
          </div>
          <h2 className='relative z-20 text-3xl font-robotoCon text-white uppercase'>
            {t('aboutme')}
          </h2>
        </div>

        <p className='text-white mt-1 text-center'>{t('aboutme-text')}</p>
        <p className='text-zinc-200 mt-10 font-robotoCon text-center text-lg uppercase'>{t('findme')}</p>

        <section className='flex flex-wrap text-white mt-3 w-full'>
          <a href="https://github.com/briziomauro" target='_blank' rel="noopener noreferrer" className='flex-1 border-solid border-b-4 border border-white p-4 transition-all duration-300 ease-in-out hover:flex-[2] hover:bg-[#FF073A]'>
            <div className='flex items-center justify-between'>
              <span className='flex items-center'>
                <Github />
              </span>
              <p className='ml-2'>Github</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mauro-brizio-a74076264/" target='_blank' rel="noopener noreferrer" className='flex-1 border-solid border-b-4 border border-white p-4 transition-all duration-300 ease-in-out hover:flex-[2] hover:bg-[#FF073A]'>
            <div className='flex items-center justify-between'>
              <span className='flex items-center'>
                <LinkedIn />
              </span>
              <p className=' ml-2'>LinkedIn</p>
            </div>
          </a>
        </section>

      </div>
    </div>
  )
}

export default AboutMe