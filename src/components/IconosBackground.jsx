import React, { useRef } from 'react';
import { VscBeaker } from 'react-icons/vsc';
import { FaTools, FaToolbox } from 'react-icons/fa';
import { GiRocket, GiTechnoHeart, GiCommercialAirplane, GiGearStickPattern } from 'react-icons/gi';
import { IoColorWand, IoHammerSharp } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import { useInView } from 'framer-motion';

const IconosBackground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='absolute max-w-[1260px] w-full left-1/2 transform -translate-x-1/2 z-[1]' ref={ref}>
      <div className='relative flex flex-col items-center h-[300px] opacity-70 '>
        <VscBeaker
          className='w-8 h-8 text-amarillo '
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <AiFillStar
          className='w-8 h-8 text-amarillo absolute left-[-22px] top-32 '
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <IoHammerSharp
          className='w-8 h-8 text-naranja absolute right-0'
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <FaTools
          className='w-8 h-8 text-naranja absolute -bottom-36'
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <GiRocket
          className='w-8 h-8 text-rosa absolute -bottom-32 left-20'
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <FaToolbox
          className='w-8 h-8 text-rosa absolute top-6 left-[350px]'
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <GiTechnoHeart
          className='w-8 h-8 text-violeta absolute bottom-0 right-0'
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <IoColorWand
          className='w-8 h-8 text-violeta absolute -bottom-20 left-[350px]'
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <GiCommercialAirplane
          className='w-8 h-8 text-celeste absolute -bottom-24 right-60'
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <GiGearStickPattern
          className='w-8 h-8 text-celeste absolute right-[320px] top-6'
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />

      </div>
    </div>
  );
};

export default IconosBackground;
