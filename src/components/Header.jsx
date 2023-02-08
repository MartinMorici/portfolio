import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Header = ({setHover}) => {
  const mouseEnterSocials =() => {
    setHover('socials')
  }
  const mouseEnter =() => {
    setHover('text')
  }
  const mouseLeave =() => {
    setHover('default')
  } 
  return (
    <header className='bg-hero-pattern h-screen text-white flex justify-center items-center'>
        <div className='absolute w-full font-medium font-roboto flex  h-32 items-center px-10 top-0'>
          <div className='text-[1.4em]' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}> MartinM <span className="relative left-[-4px] inline-block pr-1 py-3 text-black bg-white">.site</span></div>
          <nav className='absolute left-1/2 -translate-x-1/2 tracking-[-1px]'>
            <ul className='flex gap-12  text-[1.1rem] whitespace-nowrap'>
              <li className='cursor-pointer hover:-rotate-12 transition-all' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>// home</li>
              <li className='cursor-pointer hover:-rotate-12 transition-all' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>// about</li>
              <li className='cursor-pointer hover:-rotate-12 transition-all' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>// skills</li>
              <li className='cursor-pointer hover:-rotate-12 transition-all' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>// projects</li>
              <li className='cursor-pointer hover:-rotate-12 transition-all' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>// contact</li>
            </ul>
          </nav>
        </div>

        <section className='font-poppins text-center'>
          <h1 className='text-[7vw] font-semibold' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>MARTÍN MORICI</h1>
          <h2 className='text-3xl font-normal tracking-wider w-fit mx-auto font-roboto' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>FRONT END DEVELOPER</h2>
        </section>
        
        <div onMouseEnter={mouseEnterSocials} onMouseLeave={mouseLeave} className='absolute flex flex-col left-0 gap-6 px-10'>
          <a href="https://www.linkedin.com/in/martinmorici/" target='_blank'>
            <FaLinkedinIn className='w-7 h-7 cursor-pointer text-amarillo hover:rotate-12 transition-all'/>
          </a>
          <a href="https://github.com/MartinMorici" target='_blank'>
            <FaGithub className='w-7 h-7 cursor-pointer text-amarillo hover:rotate-12  transition-all'/>
          </a>
          <a href="https://wa.me/5493416913966" target='_blank'>
            <FaWhatsapp className='w-7 h-7 cursor-pointer text-amarillo hover:rotate-12 transition-all'/>
          </a>
          <a href="mailto:martinmorici3@gmail.com" target='_blank'>
            <FaEnvelope className='w-7 h-7 cursor-pointer text-amarillo hover:rotate-12 transition-all'/>
          </a>
        </div>
        <div className='bg-hero-gradient absolute bottom-0 h-[400px] z-[0] w-full pointer-events-none'></div>
    </header>
  )
}

export default Header