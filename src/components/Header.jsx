import React, { useEffect } from 'react';
import { useContext } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { CursorContext } from '../context/CursorContext';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import scroll from '../assets/scroll';
import { useState } from 'react';
import { motion } from 'framer-motion';
const Header = () => {
  const { mouseEnterSocials, mouseEnter, mouseLeave, socials } = useContext(CursorContext);
  const [navIsOpen, setNavIsOpen] = useState(false);


 

  return (
    <header className='bg-hero-pattern svh text-white flex justify-center items-center' id='home'>
      <div className={`absolute z-[500] w-full font-medium font-roboto flex justify-between xl:justify-start h-32 items-center px-5 nav:px-10 top-0 `}>
        <div className='text-[1.4em]' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        MMartin <span className='relative left-[-4px] inline-block pr-1 py-3 text-black bg-white'>.site</span>
        </div>
        <div
          className='flex nav:hidden justify-center items-center h-[40px] w-[40px]'
          onClick={() => {
            setNavIsOpen(!navIsOpen);
          }}
        >
          <div className={`burger h-[17px] z-[51]  ${navIsOpen ? 'active fixed' : 'relative'}`}>
            <div className='barraUno'></div>
            <div className='barraDos'></div>
          </div>
        </div>
        <nav className={`${navIsOpen ? 'flex' : 'hidden'} fixed z-50 bg-gris-oscuro pt-20 nav:pt-0 nav:bg-transparent  nav:block h-screen nav:h-auto  inset-0 nav:inset-auto nav:static xl:absolute xl:left-1/2 xl:-translate-x-1/2 tracking-[-1px]`}>
          <ul className={` w-fit mx-auto flex flex-col nav:flex-row gap-12 text-[1.8rem]  nav:text-[1.1rem] whitespace-nowrap`}>
            <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              <a
                href='#home'
                onClick={() => {
                  setNavIsOpen(false);
                }}
              >
                <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-amarillo'>// inicio</span>
              </a>
            </li>
            <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              <a
                href='#about'
                onClick={() => {
                  setNavIsOpen(false);
                }}
              >
                <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-amarillo'>// sobre mi</span>
              </a>
            </li>
            <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              <a
                href='#skills'
                onClick={() => {
                  setNavIsOpen(false);
                }}
              >
                <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-amarillo'>// skills</span>
              </a>
            </li>
            <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              <a
                href='#projects'
                onClick={() => {
                  setNavIsOpen(false);
                }}
              >
                <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-amarillo'>// proyectos</span>
              </a>
            </li>
            <li className='cursor-pointer group' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              <a
                href='#contact'
                onClick={() => {
                  setNavIsOpen(false);
                }}
              >
                <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-amarillo'>// contactame</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <section className='flex flex-col svh justify-center items-center sm:block sm:h-auto'>
        <div className='font-poppins text-center'>
          <h1 className='text-[40px] leading-tight  sm:text-[7.5vw] sm:leading-snug font-semibold' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            MARTÍN MORICI
          </h1>
          <motion.h2 className='text-[19px] sm:text-[28px] sm:mt-[-20px] font-normal tracking-widest w-fit mx-auto font-roboto' viewport={{ once: true }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'easeInOut', duration: 0.8 }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            FRONT END DEVELOPER
          </motion.h2>
        </div>

        <ul onMouseEnter={mouseEnterSocials} onMouseLeave={mouseLeave} className=' relative top-8 sm:mt-0 sm:absolute sm:top-1/2  sm:-translate-y-1/2 flex sm:flex-col left-0 gap-6 px-10'>
          <motion.li {...socials} transition={{ type: 'spring', duration: 1 * 1.5 }} className='group'>
            <a href='https://www.linkedin.com/in/martinmorici/' target='_blank'>
              <FaLinkedinIn className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12 transition-all' />
            </a>
          </motion.li>
          <motion.li {...socials} transition={{ type: 'spring', duration: 1 * 1.9 }} className='group'>
            <a href='https://github.com/MartinMorici' target='_blank'>
              <FaGithub className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12  transition-all' />
            </a>
          </motion.li>
          <motion.li {...socials} transition={{ type: 'spring', duration: 1 * 2.3 }} className='group'>
            <a href='https://wa.me/5493416913966' target='_blank'>
              <FaWhatsapp className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12 transition-all' />
            </a>
          </motion.li>
          <motion.li {...socials} transition={{ type: 'spring', duration: 1 * 2.6 }} className='group'>
            <a href='mailto:martinmorici3@gmail.com' target='_blank'>
              <FaEnvelope className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12 transition-all' />
            </a>
          </motion.li>
        </ul>
      </section>
      <motion.div className='absolute bottom-[7%] left-[50%] translate-y-[-50%] translate-x-[-50%]' viewport={{ once: true }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 5 }}>
        <Player autoplay loop src={scroll} style={{ height: '50px', width: '50px', margin: '0 auto', display: 'block', position: 'absolute', bottom: '7%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </motion.div>
    </header>
  );
};

export default Header;
