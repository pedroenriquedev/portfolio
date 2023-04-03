import React from 'react'

interface IProps {
    text: string
  }
  
  const TerciaryHeading = (props: IProps) => {
    return (
      <h3 className='text-xl font-bold uppercase  tracking-tight'>{props.text}</h3>
    )
  }

export default TerciaryHeading