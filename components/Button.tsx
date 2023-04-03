import React from 'react'

interface IProps {
    text: String
}

const Button = (props: IProps) => {
  return (
    <button className='bg-limeGreen text-dark font-bold tracking-tight py-[5px] px-[10px] hover:translate-y-[-3px] rounded ease transition-all'>{props.text}</button>
  )
}

export default Button