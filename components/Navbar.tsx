import React from 'react'
import SecondaryHeading from './SecondaryHeading'
import NavbarLink from './NavbarLink'
const Navbar = () => {
  return (
    <div className='w-2/3 flex justify-between items-stretch content-center mt-4 fixed left-1/2 translate-x-[-50%] z-10'>
        <div>
            <SecondaryHeading text='Pedro Xavier' />
        </div>
        <ul className='flex justify-between w-1/2'>
            <NavbarLink url='/' text='home' />
            <NavbarLink url='/skills' text='skills' />
            <NavbarLink url='/projects' text='projects' />
            <NavbarLink url='/contact' text='contact' />
            <NavbarLink text='resume/cv' background={true} />
        </ul>
    </div>
  )
}

export default Navbar