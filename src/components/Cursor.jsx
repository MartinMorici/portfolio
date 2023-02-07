import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = ({ hover }) => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallCircle, setSmallCircle] = useState({ x: 0, y: 0 });

  const variante = {
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
  };

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
    <div className='pointer-events-none'>
      <motion.div animate={{ x: largeCircle.x - 48, y: largeCircle.y - 48 }} transition={{ type: 'spring', bounce: 0, duration: 0, mass: 1.5, damping: 30, stiffness: 300 }} className={`z-10 absolute w-24 h-24 bg-[#3500D3] rounded-full mix-blend-saturation`}></motion.div>
      <motion.div variants={variante} animate={hover} transition={{ type: 'spring', height: { duration: 0.2 }, width: { duration: 0.2 }, bounce: 0, duration: 0, mass: 1, damping: 30, stiffness: 600 }} className={`z-10 absolute bg-[#3500D3] w-2 h-2 rounded-full`}></motion.div>
    </div>
  );
};

export default Cursor;
