import React, { useContext, useEffect, useState } from 'react';
import { CursorContext } from '../context/CursorContext';

const MenuFlotante = () => {
    const {mouseLeaveSectionss, mouseEnterText} = useContext(CursorContext)
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY || window.scrollY < 300) {
        setShow(false);
      } else if(window.scrollY > 300) {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`hidden  h-[50px] bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg nav:flex items-center justify-center w-full fixed top-0 z-50 bg-transparent tracking-[-1px] text-[#52ea91] font-semibold font-roboto ${show ? 'translate-y-0 transition-[transform] duration-500' : 'translate-y-[-100%] transition-[transform] duration-500'}`} onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
      <ul className={` w-fit mx-auto flex flex-col nav:flex-row gap-12 text-[1.8rem]  nav:text-[16px] whitespace-nowrap`}>
        <li className='cursor-pointer group'>
          <a href='#home'>
            <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-white'>// inicio</span>
          </a>
        </li>
        <li className='cursor-pointer group'>
          <a href='#about'>
            <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-white'>// sobre mi</span>
          </a>
        </li>
        <li className='cursor-pointer group'>
          <a href='#skills'>
            <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-white'>// skills</span>
          </a>
        </li>
        <li className='cursor-pointer group'>
          <a href='#projects'>
            <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-white'>// proyectos</span>
          </a>
        </li>
        <li className='cursor-pointer group'>
          <a href='#contact'>
            <span className='md:group-hover:-rotate-12 group-hover:scale-105 group-hover:rotate-0 transition-all block group-hover:text-white'>// contactame</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuFlotante;
