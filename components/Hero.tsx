import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    
    <section className='h-screen flex items-center justify-center relative'>
        <p className='absolute left-[-30%] rotate-90 text-2xl uppercase max-w-[80vh] text-center opacity-20 customStroke'>the happiness of your life depends upon the quality of your thoughts.</p>
    <Image alt='hero text' src='/marcusaurelius.png' width={300} height={300} className='absolute z-0' />
        <div className='text-center flex flex-col content-center items-center z-10'>
            <h1 className='text-6xl uppercase font-extrabold w-min min-h-[120px] leading-[77px]'>digital craftsman.</h1>
            <p className='max-w-md text-xs my-2'>From front-end design to back-end development, I'm a full stack web developer with a passion for crafting beautiful and functional websites.</p>
            <div className='w-full flex justify-around mt-2 items-center content-center'>
            <div className='w-full h-[44px]'>
            <Button text='My projects'/>
            </div>
            <div className='w-full h-[44px]'>
            <Button text='Contact me' />
            </div>
            
              
            </div>
        </div>
        </section>
  )
}

export default Hero