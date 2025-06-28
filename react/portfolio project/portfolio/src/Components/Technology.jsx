import React from 'react'
import {motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: reverse
    },
  },
});
const Technology = () => {
  return (
    <div className='pb-10'>
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className='my-10 text-4xl text-center'>Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className='flex justify-evenly item-centre' >
            <i class="fa-brands fa-react text-7xl text-cyan-500"></i>
            <i class="fa-brands fa-node-js text-7xl text-green-500"></i>
            <i class="fa-solid fa-database text-7xl text-sky-500"></i>
        
      </motion.div>
    </div>
  )
}

export default Technology
