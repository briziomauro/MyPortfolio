import React, { useState } from 'react'
import NavbarList from '../navbarList/NavbarList'
import { Cursor } from '../cursor/Cursor'

const Navbar = () => {
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
                <NavbarList setPosition={setPosition}>Inicio</NavbarList>
                <NavbarList setPosition={setPosition}>Sobre Mi</NavbarList>
                <NavbarList setPosition={setPosition}>Proyectos</NavbarList>
                <NavbarList setPosition={setPosition}>Tecnologias</NavbarList>
                <Cursor position={position} />
            </ul>
        </nav>
    )
}

export default Navbar