import React from 'react'
import Github from '../../assets/icons/Github'
import { useTranslation } from 'react-i18next';

const Proyects = () => {
  const { t } = useTranslation();

  const proyects = [
    { id: 1, name: "Games E-Commerce", technologies: ["React", "CSS"], github: "https://github.com/ValentinCura/GamesHub", background: 'bg-gradient-to-br to-[#DD1E52] via-[#E8D8CC] from-[#004F3B] bg-size-200 bg-pos-0 hover:bg-pos-100' },
    { id: 2, name: "API E-Commerce", technologies: ["NET"], github: "https://github.com/ValentinCura/GamesHubApi", background: 'bg-gradient-to-tl to-[#947B57] via-[#FFEDDF] from-[#8491A8] bg-size-200 bg-pos-0 hover:bg-pos-100' },
  ]

  return (
    <div className='text-start mb-20' id='proyects'>
      <h2 className='text-[#8491A8] font-bold text-xl'>{t('proyects')} -</h2>
      <div className='flex flex-wrap gap-5 mt-2 '>
        {proyects.map((singleProyect) => (
          <div key={singleProyect.id} className={`flex flex-col justify-between w-80 h-80  transition-all duration-500 ${singleProyect.background}`}>
            <div className='flex items-center justify-end'>
              <div className='flex items-center gap-2 animate-bounceRight'>
                <p className='text-sm'>{t('findCode')}</p>
                <i className="bi bi-arrow-right-short text-xl" />
              </div>
              <a href={singleProyect.github} target='_blank' className='flex justify-end p-3'>
                <Github />
              </a>
            </div>
            <h2 className='flex justify-center text-2xl font-bold'>{singleProyect.name}</h2>
            <div className='flex justify-center gap-3 pb-3'>
              {singleProyect.technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyects