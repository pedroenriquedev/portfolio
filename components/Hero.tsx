import React from 'react'
import Button from './Button'
import Image from 'next/image'
import {motion} from 'framer-motion'
import TypewriterComponent from 'typewriter-effect'



const Hero = () => {
  return (
    
    <section className='h-screen flex items-center justify-center relative'>
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.8, delay: .6 }}
      className='absolute z-0 w-[280px] h-[390px] md:w-[320px] md:h-[450px] '>
      <Image alt='Marcus Aurelius image' src='/marcusaurelius.png' fill sizes='300px' className='object-cover'  priority />
      </motion.div>
    
        <div className='w-[450px] h-[224px] sm:h-auto text-center flex flex-col content-center items-center z-10'>
            <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{delay: .4, duration: 0.8 }}
            className='text-5xl sm:text-6xl uppercase font-extrabold w-min min-h-[96px] sm:min-h-[155px] sm:leading-[77px]'>
              <TypewriterComponent options={{
                strings: ['digital craftsman.', 'problem solver.', 'web developer.'],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 25,
                // @ts-expect-error
                pauseFor: 600
              }}  />
              </motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{delay: .5, duration: 0.8 }}
            className='max-w-xs sm:max-w-md text-xs my-2'>{`From front-end design to back-end development, I'm a full stack web developer with a enthusiasm for creating websites that are both visually appealing and highly practical.`}</motion.p>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{delay: .6, duration: 0.8 }}
            className='w-full flex justify-around mt-2 items-center content-center'>
            
            <Button text='My projects' fontColor='dark' url='/projects'/>
            
            
            <Button text='Contact me' isSecondary={true} fontColor='limeGreen' url='/contact' />
            
            
              
            </motion.div>
        </div>
        </section>
  )
}

export default Hero