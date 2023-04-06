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
  const backgroundColor = props.isDark ? 'bg-dark' : 'bg-limeGreen';
  const borderColor = props.isDark ? 'border-dark' : 'border-limeGreen';
  const background = props.isSecondary ?  'bg-transparent' : '';
  const hover = !props.isSecondary ? `hover:${backgroundColor}Hover hover:${borderColor}Hover` : `hover:${backgroundColor} hover:${borderColor} ${
    props.isDark ? 'hover:text-white' : 'hover:text-dark'
  }`;
  return (
    <Link rel={props.isExternal ? 'noopener noreferrer' : ''} target={props.isExternal ? '_blank' : ''} href={props.url || ''} className={`${backgroundColor + ' ' + borderColor} text-${props.fontColor} font-bold border-2 tracking-tightest py-1 px-2 sm:py-3 sm:px-6 ${hover} rounded ease transition-all ${background} capitalize flex items-center justify-center w-fit min-h-[38px]`}>
        {props.text}
        {props.icon && <IconContext.Provider value={{className: `${(props.text === 'resume/cv') ? 'stroke-1' : 'stroke-0' }`}}><props.icon className='ml-2 stroke-3' /></IconContext.Provider>}
    </Link>
  )
}
 
export default Button