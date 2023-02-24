import React, { createContext, useState } from 'react';

export const CursorContext = createContext();

const CursorProvider = (props) => {
  const [hover, setHover] = useState('default');
  const [hoverLarge, setHoverLarge] = useState('default');
  let reveal;
  let revealSkills;
  let revealTechs;
  let revealSocials;
  let index;
  
  if(window.innerWidth > 600) {
     reveal = { viewport: { once: true }, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { type: 'spring', duration: 0.5 } };
     revealSkills = {viewport:{once:true}, initial:{opacity:0, y:50}, whileInView:{opacity:1,y:0}, transition:{type:'spring', delay:index * .04}}
     revealTechs ={viewport:{ once: true }, initial:{ opacity: 0, y: 50 }, whileInView:{ opacity: 1, y: 0 }, transition:{ type: 'spring', delay: index * 0.04 }}
     revealSocials = { viewport: { once: true }, initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }};
  }

  const mouseEnterSections = () => {
    setHoverLarge('sections');
    setHover('sections');
  };
  const mouseLeaveSections = () => {
    setHoverLarge('default');
    setHover('default');
  };

  const mouseEnterTitle = () => {
    setHover('titleSections');
    setHoverLarge('oculto');
  };

  const mouseEnterButton = () => {
    setHover('button');
    setHoverLarge('oculto');
  };

  const mouseEnterText = () => {
    setHover('textSections');
    setHoverLarge('oculto');
  };

  const mouseLeaveSectionss = () => {
    setHover('sections');
    setHoverLarge('sections');
  };

  const mouseEnterSocials = () => {
    setHover('socials');
  };
  const mouseEnter = () => {
    setHover('text');
  };
  const mouseLeave = () => {
    setHover('default');
  };

  return <CursorContext.Provider value={{ mouseLeaveSections, mouseEnterSections, mouseEnter, mouseLeave, mouseEnterSocials, mouseLeaveSectionss, mouseEnterText, mouseEnterTitle, mouseEnterButton, hover, hoverLarge, setHoverLarge, setHover, reveal, revealSocials, revealSkills, revealTechs }}>{props.children}</CursorContext.Provider>;
};

export default CursorProvider;
