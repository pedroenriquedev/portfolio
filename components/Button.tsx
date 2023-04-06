import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React from 'react'
import { IconContext } from 'react-icons/lib'

interface IProps {
  text: string,
  url?: Url,
  isSecondary?: boolean,
  isDark?: boolean,
  fontColor: string,
  icon?: any
  isExternal?: boolean
}

const Button = (props: IProps) => {
  const color = props.isDark ? 'bg-dark border-dark ' : 'bg-limeGreen border-limeGreen';
  const background = props.isSecondary ?  'bg-transparent' : '';
  return (
    <Link rel={props.isExternal ? 'noopener noreferrer' : ''} target={props.isExternal ? '_blank' : ''} href={props.url || ''} className={`${color} text-${props.fontColor} font-bold border-2 tracking-tightest py-3 px-6  hover:opacity-90 rounded ease transition-all ${background} capitalize flex items-center justify-center w-fit min-h-[38px]`}>
        {props.text}
        {props.icon && <IconContext.Provider value={{className: `${(props.text === 'resume/cv') ? 'stroke-1' : 'stroke-0' }`}}><props.icon className='ml-2 stroke-3' /></IconContext.Provider>}
    </Link>
  )
}
 
export default Button