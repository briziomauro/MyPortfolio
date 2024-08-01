import React from 'react'
import Github from '../../assets/icons/Github'
import { useTranslation } from 'react-i18next';

const Proyects = () => {
  const { t } = useTranslation();

  const proyects = [
    { id: 1, name: "Games E-Commerce", technologies: ["React", "CSS"], github: "https://github.com/ValentinCura/GamesHub", background: 'bg-gradient-to-br to-[#004F3B] via-[#FFEDDF] from-[#8491A8] bg-size-200 bg-pos-0 hover:bg-pos-100' },
    { id: 2, name: "API E-Commerce", technologies: ["NET"], github: "https://github.com/ValentinCura/GamesHubApi", background: 'bg-gradient-to-tl to-[#947B57] via-[#FFEDDF] from-[#8491A8] bg-size-200 bg-pos-0 hover:bg-pos-100' },
  ]

  return (
    <div className='text-start mb-40' id='proyects'>
      <h2 className='text-[#8491A8] font-bold text-xl'>{t('proyects')} -</h2>
      <div className='flex gap-5 mt-2 '>
        {proyects.map((singleProyect) => (
          <div key={singleProyect.id} className={`flex flex-col justify-between w-80 h-80  transition-all duration-500 ${singleProyect.background}`}>
            <a href={singleProyect.github} target='_blank' className='flex justify-end p-3'> 
              <Github/>
            </a>
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