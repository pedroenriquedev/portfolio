import React from 'react'

interface IProps {
    text: string,
    color?: string
  }
  
  const TerciaryHeading = (props: IProps) => {
    return (
      <h3 className={`text-xl font-black uppercase  tracking-tightest ${props.color ? props.color : ''}`}>{props.text}</h3>
    )
  }

export default TerciaryHeading