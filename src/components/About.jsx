import React from 'react';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import { motion } from 'framer-motion';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {ReactComponent as CVIcon} from '../assets/cv.svg'
import sphere from '../assets/sphere.json'
import CV from '../assets/cv-martin-morici.pdf'
import Container from './Container';

const About = () => {
const {mouseEnterTitle, mouseEnterText, mouseLeaveSectionss, mouseEnterButton,reveal} = useContext(CursorContext)  
const isMobile = window.innerWidth <= 600;

  return (
    <section className='pt-11 bg-about-gradient flex items-center -z-20' id="about">
      <Container className='flex'>
        <div className='flex items-center justify-between'>
          <div>
            <motion.h2 className='mt-[12rem] lg:mt-[8rem] w-fit leading-[0.95] text-white font-poppins font-semibold text-[55px] sm:text-[75px] group ' 
            {...reveal}
            onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
              <span className='text-[30px] sm:text-[40px]'>//</span> <span className='relative z-[1]'><span className='group-hover:before:h-[45px] before:transition-all before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[12px] sm:before:h-[15px] before:bg-azul'>Sobre Mí</span></span>
            </motion.h2>
            <motion.p className='max-w-[644px] font-roboto text-white leading-[1.7] mt-7 '  {...reveal} onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
              Hola! Mi nombre es Martín y soy un apasionado del desarrollo web. Me considero un frontend developer <span className='font-semibold text-amarillo'>creativo</span> y <span className='font-semibold text-amarillo'>dedicado</span>, con buen ojo para el diseño y enfocado en crear experiencias de usuario agradables y accesibles.
            </motion.p>

              <br />
              <motion.p className='max-w-[644px] font-roboto text-white leading-[1.7] '  {...reveal} onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
              Estudié 3 años <span className="text-amarillo font-semibold">Ingeniería en Sistemas</span>. En mi paso por la universidad aprendí muchísimo y aprobé muchas materias relevantes, matemáticas y de programación. Pueden encontrar un poco más de información acerca de esto en mi CV. 
              </motion.p>
   
              <br />
              <motion.p className='max-w-[644px] font-roboto text-white leading-[1.7] '  {...reveal} onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
              Me encanta trabajar en proyectos desafiantes y estoy constantemente buscando nuevas formas de <span className='font-semibold text-amarillo'>mejorar mis habilidades</span>.
              </motion.p>
 
              <br />
              <motion.p className='max-w-[644px] font-roboto text-white leading-[1.7] '  {...reveal} onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
              Estoy buscando mi primer puesto como desarrollador front-end en el que pueda <span className="font-semibold text-amarillo">aportar, aprender <span className="text-white font-normal">y</span> crecer</span>. Si tenes alguna propuesta que concuerde con mis habilidades no dudes en <span className="font-semibold text-amarillo underline">contactarme</span>!
              </motion.p>
            <a href={CV} download="CV Martín Morici"><motion.span className='group block w-fit' viewport={{once:true}} initial={isMobile ? {} :{opacity:0, y:20}} whileInView={isMobile ? {} :{opacity:1,y:0}} transition={{type:'easeInOut', duration:.5}} onMouseEnter={mouseEnterTitle} onMouseLeave={mouseLeaveSectionss}><button className='flex justify-center items-center text-white font-semibold font-poppins px-5 py-3 bg-violeta mt-8 rounded-sm group-hover:scale-105 transition-all' >Descargar CV <CVIcon className='ml-3 w-5 h-[20px]'/> </button></motion.span></a>
          </div>
   
          <motion.div className='hidden lg:block'  viewport={{once:true}} initial={ {opacity:0, y:200}} whileInView={ {opacity:1,y:90}} transition={{type:'easeInOut', duration:.5}}  onMouseEnter={mouseEnterTitle} onMouseLeave={mouseLeaveSectionss}>
            <Player
              className='lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]'
              autoplay
              loop
              src={sphere}
              
              style={{ margin:'0 auto', display:'block' }}
            >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
