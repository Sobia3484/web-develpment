import React from 'react'
import image from '/portfolio-imag.jpeg'
import {motion} from "framer-motion"

const HERO ={
  description: 'Im a dedicated Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy building end-to-end web applications that are fast, responsive, and user-friendly. With a strong foundation in both front-end and back-end development, I focus on writing clean code, solving real-world problems, and continuously learning new technologies to stay ahead in the ever-evolving web landscape.'
}

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0,
    transition: { duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const Hero = () => {
  return (
    <div className='pb-4 lg:mb-6'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-centre lg:p-8'>
                <motion.img src={image} alt="network error" 
                className='border border-stone-900 rounded-3xl w-3/4 lg:1/4'
                variants={imageVariants}
                initial= {{x:100, opacity:0}}
                animate={{ x:0, opacity:1}}
                transition={{duration: 1, delay:1.5}}
                />
            </div>
        </div>
        <div className='w-full lg:w-1/2'>
            <motion.div 
                variants={textVariants}
                initial="hidden"
                animate="visible"
            className='flex flex-col item-centre lg:item-start mt-10'>
                <motion.h2 
                variants={textVariants}
                className='pb-2 text-4xl tracking-tighter lg:text-4xl text-center'
                >Sobia Bibi
               </motion.h2>
                <motion.span className='bg-clip-text text-3xl text-center'
                variants={textVariants}
                >Full Stack Developer</motion.span>
                <motion.p className='my-2 max-w-lg py-6 text-xl leading-relaxed ml-20'
                variants={textVariants}>
                {HERO.description}
                </motion.p>
                <motion.a href="english course.pdf" target='blank' className='bg-[white] rounded-full p-4 text-sm text-stone-900 mb-10 w-40 ml-60'
                variants={textVariants}>Download Resume</motion.a>
            </motion.div>
        </div>
      </div>
   </div>
  )
}

export default Hero
