import React, { useEffect, useState } from 'react'
import SecondaryHeading from './SecondaryHeading'
import NavbarLink from './NavbarLink'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 60);
   });
 }, []);

 useEffect(() => {
  setTimeout(() => {
    setShowNav(false)
  }, 250)
 }, [router.asPath])

 
  return (
    <div className={`w-screen min-h-[70px] py-0 px-4 lg:px-0 md:py-4 fixed left-1/2 translate-x-[-50%] z-50 flex justify-center bg-dark ${scroll ? 'shadow-xl' : ''} 
    `}>
       <button onClick={() => {setShowNav((previous) => !previous)}} className='absolute top-4 left-4 text-5xl md:hidden'>
            {showNav ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
      <div className={`${!showNav && 'hidden'} w-full h-screen md:h-fit lg:w-5/6 xl:w-2/3 md:flex justify-between items-stretch content-center`}>
        <div className='hidden md:block'>
            <SecondaryHeading text='Pedro Xavier' />
        </div>
        <div>
        </div>
        <ul className='flex flex-col items-center md:flex-row justify-around md:justify-between w-full h-full md:h-auto md:w-4/6 xl:w-1/2'>
            <NavbarLink url='/' text='home'/>
            <NavbarLink url='/skills' text='skills' />
            <NavbarLink url='/projects' text='projects' />
            <NavbarLink url='/contact' text='contact' />
            <NavbarLink text='resume' background={true} target='_blank' rel='noopener noreferrer' url='/files/resume_test.pdf' />
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar