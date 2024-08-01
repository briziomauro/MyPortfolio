import React, { useState } from 'react'
import NavbarList from '../navbarList/NavbarList'
import { Cursor } from '../cursor/Cursor'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    })

    return (
        <nav>
            <ul
                onMouseLeave={() => {
                    setPosition(
                        prev => ({
                            ...prev,
                            opacity: 0,
                        })
                    )
                }}
                className='relative mx-auto flex w-fit rounded-full border-2 border-white bg-black p-1'>
                <NavbarList href="#home" setPosition={setPosition}>{t('home')}</NavbarList>
                <NavbarList href="#aboutme" setPosition={setPosition}>{t('aboutme')}</NavbarList>
                <NavbarList href="#proyects" setPosition={setPosition}>{t('proyects')}</NavbarList>
                <NavbarList href="#technologies" setPosition={setPosition}>{t('technologies')}</NavbarList>
                <Cursor position={position} />
            </ul>
        </nav>
    )
}

export default Navbar