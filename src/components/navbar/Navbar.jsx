import React from 'react'
import NavbarList from '../navbarList/NavbarList'
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LanguageChanger from '../languageChanger/LanguageChanger';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className="drawer top-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer" className="btn bg-black border border-white border-l-0 drawer-button rounded-none transition-all duration-300">
                    <i className="bi bi-list text-xl md:text-2xl text-white mix-blend-difference" />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="flex flex-col gap-4 justify-center bg-black border border-white border-y-0 border-l-0 text-white min-h-full w-60 md:w-80 p-4">
                    <label
                        htmlFor="my-drawer"
                        className="btn bg-black border border-white border-l-black drawer-button rounded-none hover:bg-white transition-all duration-300 absolute top-10 left-[238px] md:left-[318px]"
                    >
                        <i className="bi bi-list text-xl md:text-2xl text-white mix-blend-difference" />
                    </label>
                    <div>
                        <NavbarList href="#home">{t('home')}</NavbarList>
                        <NavbarList href="#aboutme">{t('aboutme')}</NavbarList>
                        <NavbarList href="#projects">{t('projects')}</NavbarList>
                        <NavbarList href="#technologies">{t('technologies')}</NavbarList>
                    </div>
                    <div className='flex w-full bg-white h-[1px]' />
                    <div className='flex w-full'>
                        <LanguageChanger />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
