import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion"

const HeaderTexts = ({ children }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(prevAnimate => !prevAnimate);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <motion.h1
      initial="start"
      animate={animate ? 'end' : 'start'} 
      className='relative block overflow-hidden whitespace-wrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl'
    >
      <motion.div
        variants={{
          start: { y: 0 },
          end: { y: "-100%" }
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className='absolute inset-0'
        variants={{
          start: { y: "100%" },
          end: { y: 0 }
        }}
      >
        {children}
      </motion.div>
    </motion.h1>
  );
}
export default HeaderTexts