import React from 'react'
import Github from '../../assets/icons/Github'
import LinkedIn from '../../assets/icons/LinkedIn'
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className='text-start mb-40' id='aboutme' >
      <h2 className='text-[#8491A8] font-bold text-xl'>{t('aboutme')} -</h2>
      <p className='text-white mt-1'>{t('aboutme-text')}</p>
      <section className='flex text-white gap-4 mt-4'>
        <a href="https://github.com/briziomauro" target='_blank'>
          <div className='flex justify-between items-center w-60 border-solid border-b-4 border border-white p-4 hover:bg-white transition-all duration-300 ease-in-out '>
            <p className='mix-blend-difference'>
              <Github />
            </p>
            <p className='mix-blend-difference'>Github</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mauro-brizio-a74076264/" target='_blank'>
          <div className='flex justify-between items-center w-60 border-solid border-b-4 border border-white p-4 hover:bg-white transition-all duration-300 ease-in-out '>
            <p className='mix-blend-difference'>
              <LinkedIn />
            </p>
            <p className='mix-blend-difference'>LinkedIn</p>
          </div>
        </a>
      </section>
    </div>
  )
}

export default AboutMe