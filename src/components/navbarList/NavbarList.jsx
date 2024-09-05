import React, { useRef } from 'react'

const NavbarList = ({ href, children }) => {
    const ref = useRef(null)

    return (
        <a href={href}>
            <li
                ref={ref}
                className='z-10 block cursor-pointer p-3 text-lg uppercase text-white md:text-xl hover:bg-white hover:text-black transition-all duration-75 font-robotoCon'>
                <p>{children}</p>
            </li>
        </a>
    )
}

export default NavbarList