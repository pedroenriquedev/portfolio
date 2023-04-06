import Button from '@/components/Button'
import SecondaryHeading from '@/components/SecondaryHeading'
import React from 'react'
import {RxDownload, RxLinkedinLogo, RxGithubLogo, RxCopy, RxCheck} from 'react-icons/rx'
import { IconContext } from 'react-icons/lib'
import CopyToClipboard from '@/components/CopyToClipboard'

const Home = () => {
  
  return (
    <section className='pt-[130px] h-screen text-center'>
      <SecondaryHeading text="Let's work together!" />
      <div className='tracking-tight grid grid-cols-2 lg:grid-cols-3 h-[500px] items-center justify-items-center'>
        {/* email, github, linkedin, cv */}
        
        
        <div className='text-6xl'>
        <RxGithubLogo />
        </div>
        
        <div className='text-6xl'>
          <RxLinkedinLogo />
        </div>

         <div className='flex items-center col-span-2 lg:col-span-1 content-center'>
          <CopyToClipboard text='+1 (201) 932-4540' />  
        </div>

        <div className='flex items-center content-center col-span-2 lg:col-span-3'>
          <CopyToClipboard text='pedroenriquedev7@gmail.com' />  
        </div>
        
      </div>  
    </section >
  )
}

export default Home