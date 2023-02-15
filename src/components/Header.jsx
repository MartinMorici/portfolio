import React from 'react'
import { useContext } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { CursorContext } from '../context/CursorContext';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import scroll from '../assets/scroll'
const Header = () => {
  const {mouseEnterSocials, mouseEnter, mouseLeave, mouseEnterSections, mouseLeaveSections} = useContext(CursorContext)

  
  return (
    <header className='bg-hero-pattern h-screen text-white flex justify-center items-center'>
        <div className='absolute w-full font-medium font-roboto flex  h-32 items-center px-10 top-0'>
          <div className='text-[1.4em]' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}> MartinM <span className="relative left-[-4px] inline-block pr-1 py-3 text-black bg-white">.site</span></div>
          <nav className='absolute left-1/2 -translate-x-1/2 tracking-[-1px]'>
            <ul className='flex gap-12  text-[1.1rem] whitespace-nowrap'>
              <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <span className='group-hover:-rotate-12 transition-all block'>// home</span>
              </li>
              <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <span className='group-hover:-rotate-12 transition-all block'>// about</span>
              </li>
              <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <span className='group-hover:-rotate-12 transition-all block'>// skills</span>
              </li>
              <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <span className='group-hover:-rotate-12 transition-all block'>// projects</span>
              </li>
              <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <span className='group-hover:-rotate-12 transition-all block'>// contact</span>
              </li>
            </ul>
          </nav>
        </div>

        <section className='font-poppins text-center'>
          <h1 className='text-[7vw] font-semibold' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>MARTÍN MORICI</h1>
          <h2 className='text-3xl font-normal tracking-wider w-fit mx-auto font-roboto' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>FRONT END DEVELOPER</h2>
          
        </section>
        
        <ul onMouseEnter={mouseEnterSocials} onMouseLeave={mouseLeave} className='absolute flex flex-col left-0 gap-6 px-10'>
          <li className='group'>
            <a href="https://www.linkedin.com/in/martinmorici/" target='_blank'>
              <FaLinkedinIn className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12 transition-all'/>
            </a>
          </li>
          <li className='group'>
            <a href="https://github.com/MartinMorici" target='_blank'>
              <FaGithub className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12  transition-all'/>
            </a>
          </li>
          <li className='group'>
            <a href="https://wa.me/5493416913966" target='_blank'>
              <FaWhatsapp className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12 transition-all'/>
            </a>
          </li>
          <li className='group'>
            <a href="mailto:martinmorici3@gmail.com" target='_blank'>
              <FaEnvelope className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12 transition-all'/>
            </a>
          </li>
        </ul>
        <Player
            autoplay
            loop
            src={scroll}
            style={{ height: '50px', width: '50px', margin:'0 auto', display:'block', position:'absolute',bottom:'15%', left:'50%', transform:'translate(-50%,-50%)' }}
          >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>

        <div className='bg-hero-gradient absolute bottom-0 h-[150px] z-[4] w-full' onMouseEnter={mouseEnterSections} onMouseLeave={mouseLeaveSections}></div>
    </header>
  )
}

export default Header