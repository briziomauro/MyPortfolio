import React from 'react'
import Html5 from '../../assets/icons/Html5'
import NetCore from '../../assets/icons/NetCore'
import Css from '../../assets/icons/Css'
import ReactJS from '../../assets/icons/ReactJS'
import FramerM from '../../assets/icons/FramerM'
import Tailwind from '../../assets/icons/Tailwind'
import Figma from '../../assets/icons/Figma'
import { useTranslation } from 'react-i18next'
import MySql from '../../assets/icons/MySql'
import JavaScript from '../../assets/icons/JavaScript'
import TechCard from '../techCard/TechCard'
import Angular from '../../assets/icons/Angular'
import Csharp from '../../assets/icons/Csharp'

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col justify-center items-center mt-8 md:mt-0 font-robotoCon' id="technologies">
      <section className='text-start mb-32 w-auto md:w-[800px]'>

        <div className='relative text-center mt-20 mb-10'>
          <div className='absolute inset-0 top-[-50px] z-10 flex justify-center items-center md:w-auto whitespace-nowrap'>
            <h2 className='text-5xl md:text-[80px] font-playfair text-zinc-800 overflow-hidden md:overflow-visible uppercase'>
              {t('using')}
            </h2>
          </div>
          <h2 className='relative z-20 text-2xl text-white uppercase'>
            {t('using')}
          </h2>
        </div>

        <div className='flex flex-wrap justify-center my-4 gap-6 font-robotoCon'>
          <TechCard Icon={Html5} label="HTML5" />
          <TechCard Icon={Css} label="CSS" />
          <TechCard Icon={JavaScript} label="JavaScript" />
          <TechCard Icon={Csharp} label="C#" />
          <TechCard Icon={ReactJS} label="React" />
          <TechCard Icon={Angular} label="Angular" />
          <TechCard Icon={Tailwind} label="Tailwind" />
          <TechCard Icon={NetCore} label="Net Core" />
          <TechCard Icon={Figma} label="Figma" />
          <TechCard Icon={MySql} label="MySQL" />
        </div>

        <div className='relative text-center mt-20 mb-10'>
          <div className='absolute inset-0 top-[-50px] z-10 flex justify-center items-center md:w-auto whitespace-nowrap'>
            <h2 className='text-5xl md:text-[80px] font-playfair text-zinc-800 overflow-hidden md:overflow-visible uppercase'>
              {t('learning')}
            </h2>
          </div>
          <h2 className='relative z-20 text-2xl text-white uppercase'>
            {t('learning')}
          </h2>
        </div>

        <div className='flex flex-wrap justify-center mt-4 gap-6'>
          <TechCard Icon={FramerM} label="Framer Motion" />
        </div>
      </section>
    </div>

  )
}

export default Technologies