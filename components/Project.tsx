import Image from 'next/image'
import React from 'react'
import Button from './Button'
import TerciaryHeading from './TerciaryHeading'
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx'
import { motion } from 'framer-motion'

interface IProps {
    src: string,
    title: string,
    description?: string,
    frontend: string,
    backend?: string,
    demo: string,
    repo: string
    index?: number
}

const Project = (props: IProps) => {
    
  return (
    <motion.div 
    initial={{ 
        opacity: props.backend ? 1 : 0,
        y: props.backend ? 0 : 100
     }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
        duration: .4
    }}
    viewport={{ once: true }}
    className={`${props.backend ? 'bg-limeGreen' : 'bg-light' } w-11/12 mx-auto min-h-[300px] lg:w-full text-dark px-8 py-4 rounded tracking-tight mb-12 relative`}>
        {props.backend && (<span className='px-1 py-2 text-xs sm:px-2 sm:py-3 text-white font-extrabold tracking-tight sm:text-sm rounded bg-blue-500 absolute top-0 right-6 xl:top-[50%] xl:right-[-50px] xl:rotate-90 translate-y-[-50%]'>FULL STACK</span>)}
        <div className={props.backend ? 'grid grid-cols-1 xl:grid-cols-2 xl:gap-1' : ''}>
            <div className={`${props.backend ? 'mb-4 xl:mb-0' : 'items-center'} flex flex-col h-full items-center`}>
                <TerciaryHeading color='text-dark' text={props.title} />
                {props.backend ? 
                <Image alt='project gif' priority src={props.src} width={400} height={225} quality={20} className={` rounded mt-4 shadow-xl grow-1`} />
                :
                <Image alt='project gif' src={props.src} width={400} height={225} quality={20} className={`mx-auto mb-4 rounded mt-4 shadow-xl grow-1`} />}
            </div>
            
            <div className={`${props.backend ? 'ml-4' : '' }`}>
                <div className='flex flex-col justify-between h-full'>
                    <div></div>
                    <div>
                        {props.backend && (
                            <>
                                <span className='capitalize font-extrabold tracking-tight'>front end</span>
                                <p className='text-sm mb-4'>{props.frontend}</p>
                                <span className='capitalize font-extrabold tracking-tight'>back end</span>
                                <p className='text-sm mb-4 xl:mb-0'>{props.backend}</p>
                            </>
                        )}
                        {!props.backend && (
                            <>
                                <span className='capitalize font-extrabold tracking-tight text-center block'>tech stack</span>
                                <p className='text-sm text-center my-4'>{props.frontend}</p>
                            </>
                        )}
                        
                    </div>
                    
                
                    <div className='flex justify-around pb-4'>
                    <Button isExternal={true} text='demo' url={props.demo} isDark={true} fontColor={'light'}  icon={RxExternalLink} />
                    <Button isExternal={true} text='code' url={props.repo} isDark={true} isSecondary={true} fontColor='dark' icon={RxGithubLogo} />
                    </div>
                </div>
                    
            </div>
        </div>  
    </motion.div>
  )
}

export default Project