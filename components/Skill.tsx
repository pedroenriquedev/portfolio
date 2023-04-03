import React from 'react'
import Image from 'next/image'

interface IProps {
    iconSize: number,
    imageClasses: string,
    alt: string,
    src: string,
    description: string
}

const Skill = (props: IProps) => {
  return (
    <div>
          <Image alt={props.alt || ''} src={props.src} width={props.iconSize} height={props.iconSize} className={props.imageClasses} />
          <span className='text-xs capitalize opacity-30 tracking-tightest mt-2'>{props.description}</span>
    </div>
  )
}

export default Skill