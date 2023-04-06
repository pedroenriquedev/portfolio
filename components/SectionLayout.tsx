import React, { ReactNode } from 'react'
import { motion } from 'framer-motion';

interface IProps {
    classes?: string,
    children: ReactNode
}

const SectionLayout = (props: IProps) => {
  return (
    <motion.section 
    className={props.classes}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        {props.children}
    </motion.section>
  )
}

export default SectionLayout