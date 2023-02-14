import React from 'react'
import {skills} from '../utils/skills'
import Container from './Container'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { IconName, VscBeaker, VscStarEmpty, VscSymbolProperty, VscTools } from "react-icons/vsc";
import { GiRocket, GiSkills, GiTechnoHeart } from "react-icons/gi";
import {  SlMagicWand } from "react-icons/sl";



const Skills = () => {
  return (
    <section className='h-[110vh] relative flex items-center '>
        <Container>
            <h2 className='leading-[0.95] text-white font-poppins font-semibold text-[75px] '>
                <span className='text-[40px]'>//</span> <span className='relative z-[1]'><span className=' before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[15px] before:bg-[#d34848]'>Skills</span></span>
            </h2>
            <div className='grid-cols-[repeat(4,280px)] grid gap-3 mt-7 place-content-center'>
                {skills.map((skill,index) => {
                    return(
                        <div key={index} className='flex items-center pl-4 bg-[#40404000] bg-[#444446] h-[80px] w-full rounded-[4px] font-poppins text-white'>
                            <img src={skill.img} alt="" />
                            <span className='ml-3 font-semibold'>{skill.nombre}</span>
                        </div>
                    )
                })}
            </div>
        </Container>
    </section>
  )
}

export default Skills