import React from 'react'
import { motion } from 'framer-motion'

const EXPERIENCE = [
       {
        duration: "2025-Present",
        role: "Full Stack developer -",
        company: "Facebook",
        description: "NO experience",
        technologies: ["HTML","CSS","Javascript"],
    },
       {
        duration: "2024-2025",
        role: "Full Stack developer -",
        company: "Facebook",
        description: "NO experience",
        technologies: ["HTML","CSS","Javascript"],
    },
    //    {
    //     duration: "2023-2024",
    //     role: "Full Stack developer -",
    //     company: "Facebook",
    //     description: "NO experience",
    //     technologies: ["HTML","CSS","Javascript"],
    // },
    // {
    //     duration: "2022-2023",
    //     role: "Full Stack developer -",
    //     company: "Facebook",
    //     description: "NO experience",
    //     technologies: ["HTML","CSS","Javascript"],
    // },
]
const Experience = () => {
  return (
        <div className="pb-4">
      <motion.h2 
       whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      
      className="my-20 text-center text-4xl">Experience</motion.h2>

      <div>
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <h3>{experience.duration}</h3>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{experience.role}
              {/* <span className='text-sm text-stone-500 ml-2'>{experience.company}</span> */}
              </h3>

              <p className="mb-4 text-stone-400">{experience.description}</p>

              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
