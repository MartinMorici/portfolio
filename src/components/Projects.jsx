import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { projects } from '../utils/projects';
import Container from './Container';

const Projects = () => {
  return (
    <main className='flex items-center -z-20'>
      <Container>
        <h2 className='leading-[0.95] text-white font-poppins font-semibold text-[75px]'>
          <span className='text-[40px]'>//</span>{' '}
          <span className='relative z-[1]'>
            <span className=' before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[15px] before:bg-[#00BF8F]'>Projects</span>
          </span>
        </h2>
        <section className='mt-8 '>
          {projects.map((project) => {
            return (
              <article className='flex gap-4 items-center justify-between'>
                <div className='max-w-[700px] w-full'>
                  <h3 className='font-poppins w-fit font-bold text-[38px] text-white mb-2'>{project.nombre}</h3>
                  <p className=' font-roboto text-white leading-[1.7]'>{project.descripcion}</p>
                  <div className='flex gap-3'>
                    {project.tecnologias.map((tec) => {
                      return (
                        <div className='flex items-center mt-4 bg-white font-semibold text-black rounded-[4px] font-poppins px-3 py-1'>
                          <img className='h-[20px]' src={tec.imagen} alt={`${tec.nombre} imagen`} />
                          <h4 className='pl-2 text-[15px]'>{tec.nombre}</h4>
                        </div>
                      );
                    })}
                  </div>
                  <div className='flex gap-5 mt-8 font-roboto'>
                    <a href={project.website} target='_blank'>
                      <button className='flex gap-3 px-4 py-2 text-[20px] rounded-[2px] items-center bg-amarillo font-bold'>
                        Website <FaLink className='w-[25px] h-[25px]' />
                      </button>
                    </a>
                    <a href={project.code} target='_blank'>
                      <button className='flex gap-3 px-5 py-2 text-[20px] rounded-[2px] items-center bg-amarillo font-bold'>
                        Code <FaGithub className='w-[25px] h-[25px]' />
                      </button>
                    </a>
                  </div>
                </div>


                  <div className='w-[500px] '><img src={project.imagen} alt={project.nombre} /></div>
   
              </article>
            );
          })}
        </section>
      </Container>
    </main>
  );
};

export default Projects;
