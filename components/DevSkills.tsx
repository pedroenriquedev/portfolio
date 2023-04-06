import React from 'react'
import ExpressSVG from '@/components/ExpressSVG'
import NextjsSVG from '@/components/NextjsSVG'
import SkillsContainer from './SkillsContainer'
import Skill from './Skill'
import {skillsBE, skillsFE, tools} from '../utils/skills'

const DevSkills = () => {
  const iconSize = 60;
  const imageClasses = 'cursor-pointer hover:scale-125 duration-100';
  return (
    <>
      <div className='flex flex-col xl:flex-row justify-between items-center'>
        <SkillsContainer title={'front end:'}>

         {skillsFE.map(skill => (
          <Skill key={skill.description}
          iconSize={iconSize} 
          imageClasses={imageClasses} 
          description={skill.description} 
          alt={skill.alt}
          src={skill.src} 
          />
         ))}  

          <div>
          <NextjsSVG size={iconSize} classes={imageClasses + ' fill-slate-200'} />
          <span className='text-xs capitalize opacity-30 tracking-tightest mt-2'>nextjs</span>
          </div>
    
        </SkillsContainer>
          
        <SkillsContainer title='back end:'>
        {skillsBE.map(skill => (
          <Skill key={skill.description}
          iconSize={iconSize} 
          imageClasses={imageClasses} 
          description={skill.description} 
          alt={skill.alt}
          src={skill.src} 
          />
         ))} 

          <div>
          <ExpressSVG width={iconSize} height={iconSize} classes={imageClasses + ' fill-slate-200'} />
          <span className='text-xs capitalize opacity-30 tracking-tightest mt-2'>expressjs</span>
          </div>
          
        </SkillsContainer>

      </div>
        <SkillsContainer title='dev tools:' addClasses='mx-auto'>
        {tools.map(tool => (
          <Skill key={tool.description}
          iconSize={iconSize} 
          imageClasses={imageClasses} 
          description={tool.description} 
          alt={tool.alt}
          src={tool.src} 
          />
         ))} 
        </SkillsContainer>
    </>
  )
}

export default DevSkills