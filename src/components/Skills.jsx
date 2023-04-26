import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { CursorContext } from '../context/CursorContext'
import {skills} from '../utils/skills'
import Container from './Container'
import IconosBackground from './IconosBackground'



const Skills = () => {
    const { mouseLeaveSectionss, mouseEnterText, mouseEnterButton, reveal, revealSkills} = useContext(CursorContext)
  return (
        <section className='py-48 sm:m-0 sm:h-[800px] relative flex items-center bg-gris-oscuro ' id='skills'>
            <Container className='z-[1]'>
                <motion.h2 className='leading-[0.95] text-white font-poppins font-semibold text-[55px] sm:text-[75px] z-[1] w-fit group' {...reveal}  onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
                    <span className='text-[30px] sm:text-[40px]'>//</span> <span className='relative z-[1]'><span className=' group-hover:before:h-[45px] before:transition-all before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[12px] sm:before:h-[15px] before:bg-[#d34848]'>Skills</span></span>
                </motion.h2>
                <div className='  grid-cols-[repeat(2,1fr)] skills:grid-cols-[repeat(2,45%)] md:grid-cols-[repeat(2,280px)] lg:grid-cols-[repeat(3,280px)] xl:grid-cols-[repeat(4,280px)] grid gap-3 mt-7 place-content-center'  onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
                    {skills.map((skill,index) => {
                        return(
                            <motion.div {...revealSkills} className='group' key={index}>
                                <div className='flex flex-col text-center skills:text-left justify-center skills:justify-start skills:flex-row max-w-[280px] mx-auto sm:max-w-none items-center skills:pl-4 bg-[#40404000] bg-[#444446] h-[80px] w-full rounded-sm z-20 font-poppins text-white sm:group-hover:bg-[#1f1f21] sm:group-hover:border-amarillo border-transparent border transform sm:group-hover:translate-y-[-5px] transition-all'>
                                    <img src={skill.img} alt="" />
                                    <span className='skills:ml-3 font-semibold text-[15px]'>{skill.nombre}</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
  )
}

export default Skills