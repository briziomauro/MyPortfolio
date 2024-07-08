import React from 'react'
import { motion } from "framer-motion"

const HeaderTexts = ({ children }) => {
  return (
    <motion.h1
      initial="start"
      whileHover="hover"
      className='relative block overflow-hidden whitespace-wrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl'
    >
      <motion.div
        variants={{
          start: { y: 0 },
          hover: { y: "-100%" }
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className='absolute inset-0'
        variants={{
          start: { y: "100%" },
          hover: { y: 0 }
        }}
      >
        {children}
      </motion.div>
    </motion.h1>
  )
}

export default HeaderTexts