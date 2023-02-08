import React from 'react';
import Container from './Container';
import {ReactComponent as CVIcon} from '../assets/cv.svg'

const About = () => {
  const mouseEnterSections = () => {
    setHoverLarge('sections');
    setHover('sections');
  };
  const mouseLeaveSections = () => {
    setHoverLarge('default');
    setHover('default');
  };

  return (
    <section className='h-screen flex items-center bg-gris-oscuro -z-20'>
      <Container>
        <h2 className='leading-[0.95] text-white font-poppins font-semibold text-[75px]'>
          <span className='text-[40px]'>//</span> <span className='relative z-[1]'><span className=' before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[15px] before:bg-azul'>About</span></span>
          <br />
          <span className='text-[40px]'>//</span> <span className='relative z-[1]'><span className=' before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[15px] before:bg-azul'>Me</span></span>
        </h2>

        <p className='max-w-[644px] font-roboto text-white leading-[1.7] mt-7 '>
          Hola! Mi nombre es Martín y soy un apasionado del desarrollo web. Me considero un frontend developer <span className='font-semibold text-amarillo'>creativo</span> y <span className='font-semibold text-amarillo'>dedicado</span>, con un ojo agudo para el diseño y enfocado en crear experiencias de usuario confortantes.
          <br />
          <br />
          Me encanta trabajar en proyectos desafiantes y estoy constantemente buscando nuevas formas de <span className='font-semibold text-amarillo'>mejorar mis habilidades</span>.
          <br />
          <br />
          Estoy buscando mi primer puesto como desarrollador front-end en el que pueda <span className="font-semibold text-amarillo">aportar, aprender <span className="text-white font-normal">y</span> crecer</span>. Si tenes alguna propuesta que concuerde con mis habilidades no dudes en <span className="font-semibold text-amarillo underline">contactarme</span>! 
        </p>
        <button className='flex justify-center items-center text-white font-semibold font-poppins px-4 py-2 bg-violeta mt-8 rounded-full '>Descargar CV <CVIcon className='ml-3 w-5 h-[20px]'/> </button>
      </Container>
    </section>
  );
};

export default About;
