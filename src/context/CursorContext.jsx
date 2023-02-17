import React, { createContext, useState } from 'react';

export const CursorContext = createContext();

const CursorProvider = (props) => {
  const [hover, setHover] = useState('default');
  const [hoverLarge, setHoverLarge] = useState('default');

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
  }

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

  return <CursorContext.Provider value={{ mouseLeaveSections, mouseEnterSections, mouseEnter, mouseLeave, mouseEnterSocials, mouseLeaveSectionss, mouseEnterText, mouseEnterTitle, mouseEnterButton, hover, hoverLarge, setHoverLarge, setHover }}>{props.children}</CursorContext.Provider>;
};

export default CursorProvider;
