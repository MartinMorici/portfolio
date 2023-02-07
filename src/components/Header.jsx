import React from 'react'

const Header = ({setHover}) => {
  return (
    <header className='bg-hero-pattern h-screen text-white flex justify-center items-center'>
        <div className='absolute w-full font-medium font-roboto flex  h-32 items-center px-10 top-0'>
          <div className='text-[1.4em]' onMouseEnter={()=> setHover('text')} onMouseLeave={() => setHover('default')}> MartinM <span className="relative left-[-4px] inline-block pr-1 py-3 text-black bg-white">.site</span></div>
          <nav className='absolute left-1/2 -translate-x-1/2 tracking-[-1px]'>
            <ul className='flex gap-12  text-[1.1rem] whitespace-nowrap'>
              <li className='cursor-pointer' onMouseEnter={() => setHover('text')} onMouseLeave={() => setHover('default')}>// home</li>
              <li onMouseEnter={() => setHover('text')} onMouseLeave={() => setHover('default')}>// about</li>
              <li onMouseEnter={() => setHover('text')} onMouseLeave={() => setHover('default')}>// skills</li>
              <li onMouseEnter={() => setHover('text')} onMouseLeave={() => setHover('default')}>// projects</li>
              <li onMouseEnter={() => setHover('text')} onMouseLeave={() => setHover('default')}>// contact</li>
            </ul>
          </nav>
        </div>

        <div className='font-poppins text-center'>
          <h1 className='text-[7vw] font-semibold' onMouseEnter={()=> setHover('text')} onMouseLeave={() => setHover('default')}>MARTÍN MORICI</h1>
          <h2 className='text-3xl font-medium tracking-widest' onMouseEnter={()=> setHover('text')} onMouseLeave={() => setHover('default')}>FRONT END DEVELOPER</h2>
        </div>
    </header>
  )
}

export default Header