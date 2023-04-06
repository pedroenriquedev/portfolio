import React, { ReactNode } from 'react'
import TerciaryHeading from './TerciaryHeading'


interface IProps {
    children: ReactNode,
    title?: string,
    addClasses?: string
}

const SkillsContainer = (props: IProps) => {
  return (
    <div className={`w-4/5 xl:w-2/5 my-12 text-center ${props.addClasses}`}>
      <TerciaryHeading text={props.title || ''} />
       <div className='flex justify-between pt-6'>
        {props.children}
        </div>
    </div>
  )
}

export default SkillsContainer