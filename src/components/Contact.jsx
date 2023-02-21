import React, { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import Container from './Container';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
const Contact = () => {
    const form = useRef()
    const {reveal} = useContext(CursorContext)
    const [enviado, setEnviado] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setEnviado(false);
          }, 2000)

    }, [enviado])
    
    
    const sendEmail = (e) => {
        e.preventDefault();
        if (form.current[0].value.length<=3 && form.current[1].value.length<=3 && form.current[2].value.length<=3 && form.current[3].value.length<=3 ) {
            return;
        }
        emailjs.sendForm('service_shpjkgi', 'template_nvipfrm', form.current, 'naCwpbDP9-EgWlAiV')
          .then((result) => {
            if(result.text === 'OK') {
                setEnviado(true);
            }
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      };
  const {  mouseLeaveSectionss, mouseEnterButton} = useContext(CursorContext);
  return (
      <section className=' bg-gris-oscuro ' id="contact">
          <Container>
            <section className=' flex justify-center flex-col font-roboto h-[1300px] sm:h-auto sm:py-[100px] '>
                <motion.h2 className='w-fit leading-[0.95] text-white font-poppins font-semibold  text-[50px] sm:text-[75px] group' {...reveal} onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss} >
                  <span className='text-[30px] sm:text-[40px]'>//</span>{' '}
                  <span className='relative z-[1]'>
                    <span className='group-hover:before:h-[45px] before:transition-all before:z-[-1]  before:w-[104%] before:absolute before:bottom-[18px] before:h-[12px] sm:before:h-[15px] before:bg-rosa'>Contact</span>
                  </span>
                </motion.h2>
                <section className='p-4 flex flex-col sm:flex-row gap-12'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col sm:max-w-[50%] w-full  text-white text-xl  '  >
                        <motion.input required className='bg-transparent border-b border-white outline-none mb-4 max-w-[450px] focus:border-amarillo placeholder-white  text py-2' type="text" name='asunto' placeholder='Subject' {...reveal}  />
                        <motion.input required className='bg-transparent border-b border-white outline-none mb-4 max-w-[450px] focus:border-amarillo placeholder-white  text py-2' type="text" name='user_name' placeholder='Name' {...reveal}   />
                        <motion.input required className='bg-transparent border-b border-white outline-none max-w-[450px] focus:border-amarillo placeholder-white py-2' type="email" name="user_email" placeholder='Email' {...reveal}  />
                        <motion.label className='mt-8 mb-1 block' name="message" htmlFor="message" {...reveal}>Message</motion.label>
                        <motion.textarea required className='bg-[#242329] outline-none p-4 border-b-2 text-lg focus:border-amarillo'  name="message" id="message" cols="30" rows="10" {...reveal}  ></motion.textarea>
                        <div  className='group' onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss}><input type="submit" value="Send" className='mr-auto mt-8 bg-amarillo text-black sm:active:scale-110 font-semibold py-1 px-8 rounded-md sm:group-hover:rotate-[-12deg] transition-all' /></div>
                    </form>
                    <motion.article {...reveal} >
                        <motion.h3 className='text-white text-2xl font-roboto font-semibold' {...reveal}>Información de Contacto</motion.h3>
                        <motion.h3 className='mt-2 font-light text-white' {...reveal}>Si queres contactarte conmigo no dudes en hacerlo! Te dejo acá todos los links y redes disponibles.</motion.h3>
                        <ul onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveSectionss} className='flex flex-col w-fit gap-6 mt-4 text-white font-semibold'>
                            <motion.li className=' text-white group flex w-fit' {...reveal}>
                                <a href="mailto:martinmorici3@gmail.com" className='flex items-center'>
                                    <FaEnvelope className='w-7 h-7 text-amarillo mr-2 group-hover:rotate-12 transition-all'/>
                                </a>
                                    <h4>martinmorici3@gmail.com </h4>
                            </motion.li>
                            <motion.li className='group' {...reveal}>
                                <a className='flex items-center gap-2 w-fit' href="https://www.linkedin.com/in/martinmorici/" target='_blank'>
                                <FaLinkedinIn className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12 transition-all'/>
                                <h4>martinmorici</h4>
                                </a>
                            </motion.li>
                            <motion.li className='group' {...reveal}>
                                <a className='flex items-center gap-2 w-fit' href="https://github.com/MartinMorici" target='_blank'>
                                <FaGithub className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12  transition-all'/>
                                <h4>MartinMorici</h4>
                                </a>
                            </motion.li>
                            <motion.li className='group' {...reveal}>
                                <a className='flex items-center gap-2 w-fit' href="https://wa.me/5493416913966" target='_blank'>
                                <FaWhatsapp className='w-7 h-7 cursor-pointer text-amarillo group-hover:rotate-12 transition-all'/>
                                <h4>+5493416913966</h4>
                                </a>
                            </motion.li>
                        </ul>
                    </motion.article>
                </section>
            </section>
            <aside className={`fixed top-[40px] right-[20px]  font-bold rounded-md text-black bg-amarillo py-2 px-6 transition-all z-50 ${enviado ? 'translate-x-[0%]'  : 'translate-x-[110%]'} `}>
                Enviado correctamente!
            </aside>
          </Container>
      </section>
  );
};

export default Contact;
