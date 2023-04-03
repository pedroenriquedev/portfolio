import React from 'react'

interface IProps {
  text: string,
  addClasses?: string
}

const SecondaryHeading = (props: IProps) => {
  return (
    <h2 className={`text-3xl font-bold uppercase  tracking-tightest ${props.addClasses}`}>{props.text}</h2>
  )
}

export default SecondaryHeading