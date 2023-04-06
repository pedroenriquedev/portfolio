import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons/lib';
import { RxCheck, RxCopy } from 'react-icons/rx';

interface IProps {
    text: string
}

const CopyToClipboard = (props: IProps) => {
  const [isCopying, setIsCopying] = useState(false);
  
  useEffect(() => {

    if (isCopying) {
      setTimeout(() => {
        setIsCopying(false);
      }, 1100)
    }
    
  },[isCopying]);

  return (
    <>
        <p className='mr-4  text-xl'>{props.text}</p>
          {isCopying ? (
            <div className='relative'>
              <span className='absolute top-[-30px] left-[-20px] text-zinc-800 text-xs bg-zinc-200 py-1 px-2 rounded font-extrabold'>Copied!</span>
              <IconContext.Provider value={{className: 'text-xl text-green-500'}}>
                <RxCheck />
              </IconContext.Provider>
            </div>
            
          
          ) : (
            <button onClick={() => {navigator.clipboard.writeText(props.text); setIsCopying(true)}}>
              <IconContext.Provider value={{className: 'text-xl hover:scale-125'}}>
                <RxCopy />
              </IconContext.Provider>
            </button>
          )}
    </>
   
  )
}

export default CopyToClipboard