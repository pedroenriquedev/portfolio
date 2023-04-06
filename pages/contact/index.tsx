import Button from '@/components/Button'
import SecondaryHeading from '@/components/SecondaryHeading'
import React from 'react'
import {RxLinkedinLogo, RxGithubLogo} from 'react-icons/rx'
import CopyToClipboard from '@/components/CopyToClipboard'
import SectionLayout from '@/components/SectionLayout'
import {motion} from 'framer-motion'

const Home = () => {
  
  return (
    <SectionLayout classes='pt-[130px] h-screen text-center'>
      <SecondaryHeading text="Let's work together!" />
      <div className='tracking-tight grid grid-cols-2 lg:grid-cols-3 h-[500px] items-center justify-items-center'>
        {/* email, github, linkedin, cv */}
        
        
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{type: 'spring', duration: 0.8, delay: .25 }}
        className='text-6xl'>
        <RxGithubLogo />
        </motion.div>
        
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{type: 'spring', duration: 0.8, delay: .35 }}
        className='text-6xl'>
          <RxLinkedinLogo />
        </motion.div>

         <motion.div
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0}}
         transition={{type: 'spring', duration: 0.8, delay: .45 }}
         className='flex items-center col-span-2 lg:col-span-1 content-center'>
          <CopyToClipboard text='+1 (201) 932-4540' />  
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{type: 'spring', duration: 0.8, delay: .55 }}
        className='flex items-center content-center col-span-2 lg:col-span-3'>
          <CopyToClipboard text='pedroenriquedev7@gmail.com' />  
        </motion.div>
        
      </div>  
    </SectionLayout>
    
      
  )
}

export default Home