import Image from 'next/image'
import React from 'react'
import TerciaryHeading from './TerciaryHeading'

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
    <div className={`w-full bg-[#EFEFEF] text-dark p-5 rounded tracking-tight mb-4`}>
        <div className={`${props.backend ? 'grid grid-cols-2' : '' }`}>
            <div className={`${props.backend ? '' : 'text-center' }`}>
                <TerciaryHeading color='text-dark' text={props.title} />
                <Image alt='alt text' src={props.src} width={400} height={225} className={`${props.backend ? '' : 'mx-auto' } rounded my-4 shadow-xl`} />
            </div>
            
            <div className='ml-4'>
                <div className='flex flex-col justify-between h-full'>
                    <div></div>
                    <div>
                        {props.backend && (
                            <>
                                <span className='capitalize font-extrabold'>front end</span>
                                <p className='text-sm'>{props.frontend}</p>
                                <span className='capitalize font-extrabold'>back end</span>
                                <p className='text-sm'>{props.backend}</p>
                            </>
                        )}
                        {!props.backend && (
                            <>
                                <span className='capitalize font-extrabold'>tech stack</span>
                                <p className='text-sm'>{props.frontend}</p>
                            </>
                        )}
                        
                    </div>
                    
                
                    <div className='flex justify-around pb-4'>
                    <button>Live Demo</button>
                    <button>Source code</button>
                    </div>
                </div>
                    
            </div>
        </div>  
    </div>
  )
}

export default Project