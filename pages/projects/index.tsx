import Project from '@/components/Project'
import SecondaryHeading from '@/components/SecondaryHeading'
import React from 'react'
import { projects, featuredProjects } from '@/utils/projects'
import SectionLayout from '@/components/SectionLayout'
const Home = () => {
  return (
    <SectionLayout  classes='pt-[100px]'>
      <SecondaryHeading text='featured projects' />
      <div className='pt-8'>
      {featuredProjects.map(project =>
      <div key={project.description} className='[&:not(:last-of-type)]:mb-24'>
        <Project 
        src={project.src}
        title={project.title}
        frontend={project.stack.fe}
        backend={project.stack.be}
        demo={project.demo}
        repo={project.repo}
      />
      </div> 
      )}
      </div>
      <SecondaryHeading text='other projects' />
      <div className='pt-8 grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-12'>
      {projects.map((project, i) => 
      <Project 
        key={project.description}  
        src={project.src}
        title={project.title}
        frontend={project.stack.fe}
        demo={project.demo}
        repo={project.repo}
        index={i}
      />)}
      </div>
    </SectionLayout>
  )
}

export default Home