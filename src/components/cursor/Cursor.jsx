import React from 'react'
import { motion } from "framer-motion"

export const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={position}
            className='absolute z-0 h-7 rounded-full bg-white md:h-12'
        />
    )
}
