import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { CursorContext } from '../context/CursorContext';
import { projects } from '../utils/projects';
import Container from './Container';

const Projects = () => {
  const {mouseEnterTitle, mouseLeaveSectionss, mouseEnterText, mouseEnterButton} = useContext(CursorContext)
  return (
    <main className='flex items-center z-20 bg-gris-oscuro '>
      <Container>
        <h2 className='leading-[0.95] text-white font-poppins font-semibold text-[55px] sm:text-[75px] w-fit group' onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
          <span className='text-[30px] sm:text-[40px]'>//</span>
          <span className='relative z-[1]'>
            <span className='group-hover:before:h-[45px] before:transition-all before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px]  before:h-[12px] sm:before:h-[15px] before:bg-[#00BF8F]'>Projects</span>
          </span>
        </h2>
        <section className='mt-8 '>
          {projects.map((project,index) => {
            return (
              <article className=' rounded-md  sm:border-none flex gap-4 mb-20 justify-between items-start lg:items-center flex-col lg:flex-row w-fit mx-auto' key={index}>
                <div className='max-w-[650px] w-full'>
                  <div>
                    <h3 className='mb-3 text-[26px] font-poppins w-fit font-bold sm:text-[38px] text-white sm:mb-5 leading-8' onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>{project.nombre}</h3>
                    <div className='block sm:hidden max-w-[600px] w-full order-[-1] lg:order-1 rounded-sm' onMouseEnter={mouseEnterTitle} onMouseLeave={mouseLeaveSectionss}><img className='rounded-sm' src={project.imagen} alt={project.nombre} /></div>
                    <p className='mt-2 sm:mt-0 font-poppins text-[#b8b9bb] sm:leading-[1.7] text-[16px] ' onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>{project.descripcion}</p>
                    <div className='flex gap-3 gap-y-[0px] flex-wrap' onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss} >
                      {project.tecnologias.map((tec,index) => {
                        return (
                            <div key={index} className='flex items-center mt-4 bg-white font-semibold text-black rounded-[4px] font-poppins px-3 py-1 '>
                              <img className='h-[20px]' src={tec.imagen} alt={`${tec.nombre} imagen`} />
                              <h4 className='pl-2 text-[15px]'>{tec.nombre}</h4>
                            </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='flex gap-5 mt-8 font-roboto flex-wrap'>
                    <a href={project.website} target='_blank' className='group'  onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
                      <button className='flex gap-3 px-4 py-1 text-[18px] sm:text-[20px] rounded-[2px] items-center bg-amarillo font-bold group-hover:scale-105 md:group-hover:scale-100 md:group-hover:-rotate-[9deg] transition-all '>
                        Website <FaLink className='w-[25px] h-[25px]' />
                      </button>
                    </a>
                    <a href={project.code} target='_blank' className='group'  onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
                      <button className='flex gap-3 px-5 py-1 text-[18px] sm:text-[20px] rounded-[2px] items-center bg-amarillo font-bold group-hover:scale-105 md:group-hover:scale-100 md:group-hover:-rotate-[9deg] transition-all'>
                        Code <FaGithub className='w-[25px] h-[25px]' />
                      </button>
                    </a>
                  </div>
                </div>
                
                <div className='hidden sm:block max-w-[600px] w-full order-[-1] lg:order-1 rounded-sm' onMouseEnter={mouseEnterTitle} onMouseLeave={mouseLeaveSectionss}><img className='rounded-sm' src={project.imagen} alt={project.nombre} /></div>
  
              </article>
            );
          })}
        </section>
      </Container>
    </main>
  );
};

export default Projects;
