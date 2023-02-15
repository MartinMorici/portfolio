import React, { useContext } from 'react'
import { CursorContext } from '../context/CursorContext'
import {skills} from '../utils/skills'
import Container from './Container'
import IconosBackground from './IconosBackground'


const Skills = () => {
    const {mouseEnterTitle, mouseLeaveSectionss, mouseEnterText} = useContext(CursorContext)
  return (
        <section className='h-[1000px] relative flex items-center '>
            <Container className='z-[1]'>
                <h2 className='leading-[0.95] text-white font-poppins font-semibold text-[75px] z-[1] w-fit' onMouseEnter={mouseEnterTitle} onMouseLeave={mouseLeaveSectionss}>
                    <span className='text-[40px]'>//</span> <span className='relative z-[1]'><span className=' before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[15px] before:bg-[#d34848]'>Skills</span></span>
                </h2>
                <div className='grid-cols-[repeat(4,280px)] grid gap-3 mt-7 place-content-center'  onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
                    {skills.map((skill,index) => {
                        return(
                            <div key={index} className='flex items-center pl-4 bg-[#40404000] bg-[#444446] h-[80px] w-full rounded-[4px] z-20 font-poppins text-white hover:bg-[#1f1f21] hover:border-amarillo border-transparent border transform hover:translate-y-[-5px] transition-all'>
                                <img src={skill.img} alt="" />
                                <span className='ml-3 font-semibold'>{skill.nombre}</span>
                            </div>
                        )
                    })}
                </div>
            </Container>
            <IconosBackground/>
        </section>
  )
}

export default Skills