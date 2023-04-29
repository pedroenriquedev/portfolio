import Button from '@/components/Button'
import SecondaryHeading from '@/components/SecondaryHeading'
import React from 'react'
import {RxLinkedinLogo, RxGithubLogo} from 'react-icons/rx'
import { IconContext } from 'react-icons/lib'
import CopyToClipboard from '@/components/CopyToClipboard'
import SectionLayout from '@/components/SectionLayout'
import {motion} from 'framer-motion'
import Link from 'next/link'

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
        className='text-6xl' title='Github'>
          <Link className='text-red' rel='noopener noreferrer' target='_blank' href={`https://www.github.com/pedroenriquedev`}>
            <IconContext.Provider value={{className: 'text-white hover:scale-125 duration-100'}}>
             <RxGithubLogo />
            </IconContext.Provider>
          </Link>
        </motion.div>
        
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{type: 'spring', duration: 0.8, delay: .35 }}
        className='text-6xl' title='Linkedin'>                    
          <Link rel='noopener noreferrer' target='_blank' href={`https://www.linkedin.com/in/pedroenriquedev`}>
           <IconContext.Provider value={{className: 'text-white hover:scale-125 duration-100'}}>
             <RxLinkedinLogo  />
            </IconContext.Provider>
          </Link>
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
          <CopyToClipboard text='pedroenriquedev@gmail.com' />  
        </motion.div>
        
      </div>  
    </SectionLayout>
    
      
  )
}

export default Home