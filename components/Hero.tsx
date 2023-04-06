import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    
    <section className='h-screen flex items-center justify-center relative'>
    <Image alt='Marcus Aurelius image' src='/marcusaurelius.png' width={320} height={320} className='absolute z-0 ' priority />
        <div className='text-center flex flex-col content-center items-center z-10'>
            <h1 className='text-6xl uppercase font-extrabold w-min sm:min-h-[120px] sm:leading-[77px]'>digital craftsman.</h1>
            <p className='max-w-xs sm:max-w-md text-xs my-2'>From front-end design to back-end development, I'm a full stack web developer with a passion for crafting beautiful and functional websites.</p>
            <div className='w-full flex justify-around mt-2 items-center content-center'>
            
            <Button text='My projects' fontColor='dark' url='/projects'/>
            
            
            <Button text='Contact me' isSecondary={true} fontColor='limeGreen' url='/contact' />
            
            
              
            </div>
        </div>
        </section>
  )
}

export default Hero