import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React from 'react'

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
  const color = props.isDark ? 'bg-dark border-dark' : 'bg-limeGreen border-limeGreen';
  const background = props.isSecondary ?  'bg-transparent' : '';
  return (
    <Link rel={props.isExternal ? 'noopener noreferrer' : ''} target={props.isExternal ? '_blank' : ''} href={props.url || ''} className={`${color} text-${props.fontColor} font-bold border-2 hover:opacity-90 tracking-tightest py-[5px] px-[10px] hover:translate-y-[-3px] rounded ease transition-all ${background} capitalize flex items-center justify-center w-fit min-h-[38px]`}>
        {props.text}
        {props.icon && <props.icon className='ml-2' />}
    </Link>
  )
}
 
export default Button