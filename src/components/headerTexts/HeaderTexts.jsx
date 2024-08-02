import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeaderTexts = ({ children }) => {
  const DURATION = 0.15;
  const STAGGER = 0.025;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(prevAnimate => !prevAnimate);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      initial="initial"
      animate={animate ? "end" : "initial"}
      className="relative block overflow-hidden text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              end: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              end: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.p>
  );
}

export default HeaderTexts;
