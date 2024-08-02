import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Proyects from './components/proyects/Proyects'
import Technologies from './components/technologies/Technologies'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;


  return (
    <>
      <div className='flex flex-wrap justify-center gap-5'>
        <Navbar />
        <div className='text-white flex'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='h-full items-center justify-center flex gap-2'
          >
            <img
              src={currentLanguage === 'es' ? "./svg/spain-svg.svg" : "./svg/united-states-svg.svg"}
              alt=""
              className='h-8 w-8'
            />
            <p className='text-center'>{currentLanguage === 'es' ? 'ES' : 'EN'}</p>
            <i className={isOpen ? "bi bi-chevron-up" : "bi bi-chevron-down"} />
          </button>
          <div
            className={`flex flex-col absolute top-32 md:top-20 text-start transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}
          >
            <div className='w-full h-[1px] bg-white mt-2'></div>
            <button className='flex gap-2 items-center pt-2' onClick={() => changeLanguage('es')}>
              <p className='text-center'>Español - ES</p>
            </button>
            <button className='flex items-center gap-2' onClick={() => changeLanguage('en')}>
              <p className='text-center'>English - EN</p>
            </button>
          </div>
        </div>
      </div>
      <Header />
      <AboutMe />
      <Proyects />
      <Technologies />
    </>
  )
}

export default App
