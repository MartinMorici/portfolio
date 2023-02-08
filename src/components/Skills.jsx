import React from 'react'
import {skills} from '../utils/skills'
import Container from './Container'


const Skills = () => {
  return (
    <section className='h-screen bg-gris-oscuro -z-20'>
        <Container>
            <h2 className='leading-[0.95] text-white font-poppins font-semibold text-[75px]'>
            <span className='text-[40px]'>//</span> <span className='relative z-[1]'><span className=' before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[15px] before:bg-[#d34848]'>Skills</span></span>
            </h2>
            <div className='grid-cols-[repeat(4,280px)] grid gap-3 mt-7'>
                {skills.map((skill) => {
                    console.log(skill)
                    return(
                        <div className='flex items-center pl-4 bg-[#3B3B3B] h-[80px] w-full rounded-[4px] font-poppins text-white font-light '>
                            <img src={skill.img} alt="" />
                            <span className='ml-3'>{skill.nombre}</span>
                        </div>
                    )
                })}
            </div>

        </Container>
    </section>
  )
}

export default Skills