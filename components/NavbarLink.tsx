import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import { RxDownload } from 'react-icons/rx'
import { IconContext } from 'react-icons/lib'

interface IProps {
    text: String,
    url?: Url,
    background?: boolean,
    target?: string,
    rel?: string
}

const NavbarLink = (props: IProps) => {
  return (
    <li className='flex items-center'>
    <Link href={props.url || ''} className={` tracking-tight uppercase text-md font-extrabold hover:text-white transform active:translate-y-[4px] transition flex ${props.background ? 'bg-limeGreen text-dark py-2 px-2 rounded text-sm' : '' } `} target={props.target} rel={props.rel}>
        {props.text}
        {props.background && <IconContext.Provider value={{className: 'ml-2 stroke-1'}}><RxDownload /></IconContext.Provider>}
    </Link>
    </li>
  )
}

export default NavbarLink