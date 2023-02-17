import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

const Cursor = () => {
  const {hover, hoverLarge} = useContext(CursorContext)
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallCircle, setSmallCircle] = useState({ x: 0, y: 0 });

  const varianteSmall = {
    default: {
      x: smallCircle.x - 4,
      y: largeCircle.y - 4,
      mixBlendMode: 'difference',
    },
    text: {
      height: 96,
      width: 96,
      x: smallCircle.x - 48,
      y: largeCircle.y - 48,
      mixBlendMode: 'difference',
    },
    textSections: {
      height: 60,
      width: 60,
      x: smallCircle.x - 30,
      y: largeCircle.y - 30,
      mixBlendMode: 'difference',
    },
    titleSections: {
      height: 96,
      width: 96,
      x: smallCircle.x - 48,
      y: largeCircle.y - 48,
      mixBlendMode: 'exclusion',
    },
    button: {
      height: 80,
      width: 80,
      x: smallCircle.x - 40,
      y: largeCircle.y - 40,
      backgroundColor: 'rgb(255, 255, 255)',
      mixBlendMode: 'difference',
    },
    socials: {
      height: 60,
      width: 60,
      x: smallCircle.x - 30,
      y: largeCircle.y - 30,
      mixBlendMode: 'difference',
    },
    sections: {
      height: 4,
      width: 4,
      backgroundColor: 'rgb(255,255,255)',
      x: smallCircle.x - 2,
      y: largeCircle.y - 2,
      mixBlendMode: 'normal'
    },
  };

  const varianteLarge = {
    default: { 
        x: largeCircle.x - 48, 
        y: largeCircle.y - 48,
        mixBlendMode: 'saturation'
    },
    sections:{
        height: 32,
        width: 32,
        x: largeCircle.x - 22, 
        y: largeCircle.y - 22,
        mixBlendMode: 'normal'
    },
    oculto:{
        height: 0,
        width: 0,
        x: largeCircle.x - 22, 
        y: largeCircle.y - 22,
    }
  }


  useEffect(() => {
    const mouseMove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div className='pointer-events-none z-10'>
      <motion.div variants={varianteLarge} animate={hoverLarge} transition={{ type: 'spring', bounce: 0, duration: 0, mass: 1.5, damping: 30, stiffness: 300 }} className={`hidden lg:block z-20  w-24 h-24 bg-violeta rounded-full fixed`}></motion.div>
      <motion.div variants={varianteSmall} animate={hover} transition={{ type: 'spring', height: { duration: 0.2 }, width: { duration: 0.2 }, bounce: 0, duration: 0, mass: 1, damping: 30, stiffness: 600 }} className={`hidden lg:block z-20 fixed bg-violeta w-2 h-2 rounded-full `}></motion.div>
    </div>
  );
};

export default Cursor;
