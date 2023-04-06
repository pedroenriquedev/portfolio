import Image from 'next/image'
import React from 'react'
import Button from './Button'
import TerciaryHeading from './TerciaryHeading'
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx'

interface IProps {
    src: string,
    title: string,
    description?: string,
    frontend: string,
    backend?: string,
    demo: string,
    repo: string
}

const Project = (props: IProps) => {
    
  return (
    <div className={`${props.backend ? 'bg-limeGreen' : 'bg-light' } w-full text-dark px-8 py-4 rounded tracking-tight mb-12 relative`}>
        {props.backend && (<span className='px-2 py-3 text-white font-extrabold tracking-tight text-sm rounded bg-blue-500 absolute top-[50%] right-[-50px] rotate-90 translate-y-[-50%]'>FULL STACK</span>)}
        <div className={props.backend ? 'grid grid-cols-2' : ''}>
            <div className={props.backend ? '' : 'text-center'}>
                <TerciaryHeading color='text-dark' text={props.title} />
                <Image alt='alt text' src={props.src} width={400} height={225} className={`${props.backend ? '' : 'mx-auto' } rounded my-4 shadow-xl`} />
            </div>
            
            <div className='ml-4'>
                <div className='flex flex-col justify-between h-full'>
                    <div></div>
                    <div>
                        {props.backend && (
                            <>
                                <span className='capitalize font-extrabold tracking-tight'>front end</span>
                                <p className='text-sm mb-4'>{props.frontend}</p>
                                <span className='capitalize font-extrabold tracking-tight'>back end</span>
                                <p className='text-sm'>{props.backend}</p>
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
    </div>
  )
}

export default Project