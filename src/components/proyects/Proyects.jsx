import React from 'react'
import Github from '../../assets/icons/Github'
import { useTranslation } from 'react-i18next';

const Proyects = () => {
  const { t } = useTranslation();

  const proyects = [
    { id: 1, name: "Games E-Commerce", technologies: ["React", "CSS"], github: "https://github.com/ValentinCura/GamesHub", background: 'bg-gradient-to-br from-[#8491A8] to-[#FFEDDF]' },
    // { id: 2, name: "Spotify Clone", technologies: ["React", "Tailwind"], github: "https://github.com/briziomauro/SpotifyClone", background: 'bg-gradient-to-tr from-[#004F3B] to-[#E8D8CC]' },
    { id: 3, name: "API E-Commerce", technologies: ["NET"], github: "https://github.com/ValentinCura/GamesHubApi", background: 'bg-gradient-to-br from-[#947B57] to-[#FFEDDF]' },
  ]

  return (
    <div className='text-start mb-40'>
      <h2 className='text-[#8491A8] font-bold text-xl'>{t('proyects')} -</h2>
      <div className='flex gap-5 mt-2 '>
        {proyects.map((singleProyect) => (
          <div key={singleProyect.id} className={`flex flex-col justify-between w-80 h-80 ${singleProyect.background} `}>
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