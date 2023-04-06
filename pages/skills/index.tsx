
import DevSkills from '@/components/DevSkills'
import SecondaryHeading from '@/components/SecondaryHeading'
import SectionLayout from '@/components/SectionLayout'
import React from 'react'

const Home = () => {
  return (
    <SectionLayout classes='pt-[80px] sm:pt-[130px]'>
      <SecondaryHeading text={`skills & toolset`} addClasses={`text-center`} />
       <p className='my-4 w-2/3 sm:w-1/2 m-auto opacity-90 text-center tracking-tight'>Explore my skill set in web development! From front-end languages like HTML, CSS, and JavaScript to back-end tools like Node.js, MongoDB, and Express, discover the technologies I use to bring ideas to life.</p>
       
       <div>
        <DevSkills />
       </div>
    </SectionLayout>
  )
}

export default Home