import Project from '@/components/Project'
import SecondaryHeading from '@/components/SecondaryHeading'
import React from 'react'
import { projects, featuredProjects } from '@/utils/projects'
const Home = () => {
  return (
    <section className='pt-[100px] '>
      <SecondaryHeading text='featured projects' />
      <div className='pt-4'>
      {featuredProjects.map(project => 
      <Project 
        key={project.description}  
        src={project.src}
        title={project.title}
        frontend={project.stack.fe}
        backend={project.stack.be}
        demo={project.demo}
        repo={project.repo}
      />)}
      </div>
      <SecondaryHeading text='other projects' />
      <div className='pt-4 grid grid-cols-2 gap-12'>
      {projects.map(project => 
      <Project 
        key={project.description}  
        src={project.src}
        title={project.title}
        frontend={project.stack.fe}
        demo={project.demo}
        repo={project.repo}
      />)}
      </div>
      </section >
  )
}

export default Home