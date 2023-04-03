import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

interface IProps {
    text: String,
    url?: Url,
    background?: boolean
}

const NavbarLink = (props: IProps) => {
  return (
    <li className='transform active:translate-y-[4px] transition'>
    <Link href={props.url || ''} className={` tracking-tight uppercase text-sm font-semibold hover:text-white  ${props.background ? 'bg-lightGreen py-2 px-2 rounded' : '' } `}>
        {props.text}
    </Link>
    </li>
  )
}

export default NavbarLink