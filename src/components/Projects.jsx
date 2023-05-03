import { motion } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { CursorContext } from '../context/CursorContext';
import { projects, otherProjects } from '../utils/projects';
import Container from './Container';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const isMobile = window.innerWidth < 768;
  const atributos = isMobile
    ? { whileTap: { scale: 1.1, transition: 0.2 }, transition: { type: 'easeInOut' } }
    : {
        whileHover: { scale: '1.05' },
        viewport: { once: true },
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { type: 'easeInOut' },
      };
  const { mouseEnterTitle, mouseLeaveSectionss, mouseEnterText, mouseEnterButton, reveal, revealTechs } = useContext(CursorContext);
  return (
    <main className='flex items-center z-20 bg-gris-oscuro ' id='projects'>
      <Container>
        <motion.h2 className='leading-[0.95] text-white font-poppins font-semibold text-[40px] sm:text-[75px] w-fit group' {...reveal} onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
          <span className='text-[25px] sm:text-[40px]'>//</span>
          <span className='relative z-[1]'>
            <span className='ml-[17px] group-hover:before:h-[36px] sm:group-hover:before:h-[45px] before:transition-all before:z-[-1]  before:w-[96%] before:absolute before:bottom-[10px] sm:before:bottom-[18px]  before:h-[12px] sm:before:h-[15px] before:bg-[#00BF8F]'>Proyectos</span>
          </span>
        </motion.h2>
        <section className='mt-7 '>
          {projects.map((project, index) => {
            return (
              <article className=' rounded-md  sm:border-none flex gap-4 mb-20 justify-between items-start lg:items-center flex-col lg:flex-row w-fit mx-auto' key={index}>
                <div className='max-w-[650px] w-full'>
                  <div>
                    <motion.h3 className='mb-3 text-[26px] font-poppins w-fit font-bold sm:text-[38px] text-white sm:mb-5 leading-8' {...reveal} onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
                      {project.nombre}
                    </motion.h3>
                    <motion.div className='block sm:hidden max-w-[600px] w-full order-[-1] lg:order-1 rounded-sm' {...reveal} onMouseEnter={mouseEnterTitle} onMouseLeave={mouseLeaveSectionss}>
                      <img className='rounded-sm' src={project.imagen} alt={project.nombre} />
                    </motion.div>
                    <motion.p className='mt-2 sm:mt-0 font-poppins text-[#e4e4e4] sm:leading-[1.7] text-[16px] ' {...reveal} onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
                      {project.descripcion}
                    </motion.p>
                    <div className='flex gap-3 gap-y-[0px] flex-wrap' onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
                      {project.tecnologias.map((tec, index) => {
                        return (
                          <motion.div key={index} className='flex items-center mt-4 bg-white font-semibold text-black rounded-sm font-poppins px-3 py-1 ' {...revealTechs}>
                            <img className='h-[20px]' src={tec.imagen} alt={`${tec.nombre} imagen`} />
                            <h4 className='pl-2 text-[15px]'>{tec.nombre}</h4>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='flex gap-5 mt-4 font-roboto flex-wrap'>
                    <a href={project.website} target='_blank' className='group transition-all' onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
                      <motion.button className='flex gap-3 px-2 py-1 text-[18px] sm:text-[20px] rounded-sm items-center bg-amarillo  font-bold  ' {...atributos}>
                        Web <FaLink className='w-[25px] h-[25px]' />
                      </motion.button>
                    </a>
                    <a href={project.code} target='_blank' className='group transition-all' onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
                      <motion.button className='flex gap-3 px-2 py-1 text-[18px] sm:text-[20px] rounded-sm items-center bg-amarillo  font-bold ' {...atributos}>
                        Code <FaGithub className='w-[25px] h-[25px]' />
                      </motion.button>
                    </a>
                  </div>
                </div>

                <motion.div className='hidden sm:block max-w-[600px] w-full order-[-1] lg:order-1 rounded-sm' {...reveal} onMouseEnter={mouseEnterTitle} onMouseLeave={mouseLeaveSectionss}>
                  <img className='rounded-sm' src={project.imagen} alt={project.nombre} />
                </motion.div>
              </article>
            );
          })}
        </section>
        <section onMouseEnter={mouseEnterText} onMouseLeave={mouseLeaveSectionss}>
          <motion.h2 className='mb-7 leading-[0.95] w-fit mx-auto text-white font-poppins font-semibold text-[40px] sm:text-[60px] group' {...reveal} onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
            <span className='relative z-[1] '>
              <span className='ml-[17px] group-hover:before:h-[36px] sm:group-hover:before:h-[45px] before:transition-all before:z-[-1]  before:w-[96%] before:absolute before:bottom-[10px] sm:before:bottom-[15px]  before:h-[10px] sm:before:h-[10px] before:bg-[#00BF8F]'>Otros proyectos</span>
            </span>
          </motion.h2>
          <Swiper slidesPerView={3} spaceBetween={50} navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]} className='mySwiper max-w-[1100px]'>
            {otherProjects.map((proj) => {
              return (
                <SwiperSlide className='rounded-sm h-[460px] bg-[#444446]'>
                  <img className=' w-full h-[164px] object-cover' src={proj.imagen} alt={proj.nombre} />
                  <div className='px-3 h-[263px] flex flex-col'>
                    <h3 className='font-poppins text-white leading-8 font-semibold text-[20px]  mt-3 z-[5]'>{proj.nombre}</h3>
                    <p className='text-gray-300'>{proj.descripcion}</p>
                    <div className='flex flex-wrap gap-1 mt-3'>
                      {proj.tecnologias.map((tech, index) => {
                        return (
                          <div key={index} className='flex items-center  bg-white font-semibold text-black rounded-sm font-poppins px-3 py-1 '>
                            <img className='h-[20px]' src={tech.imagen} alt={`${tech.nombre} imagen`} />
                            <h4 className='pl-2 text-[13px]'>{tech.nombre}</h4>
                          </div>
                        );
                      })}
                    </div>
                    <div className='flex gap-2 mt-auto font-roboto flex-wrap'>
                      <a href={proj.website} target='_blank' className='group transition-all' onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
                        <motion.button className='flex gap-1 px-1 py-1 text-[18px] sm:text-[18px] rounded-sm items-center bg-amarillo  font-bold  '>
                          Web <FaLink className='w-[20px] h-[20px]' />
                        </motion.button>
                      </a>
                      <a href={proj.code} target='_blank' className='group transition-all' onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}>
                        <motion.button className='flex gap-1 px-2 py-1 text-[18px] sm:text-[18px] rounded-sm items-center bg-amarillo  font-bold '>
                          Code <FaGithub className='w-[20px] h-[20px]' />
                        </motion.button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </Container>
    </main>
  );
};

export default Projects;
