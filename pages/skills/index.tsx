
import DevSkills from '@/components/DevSkills'
import SecondaryHeading from '@/components/SecondaryHeading'
import React from 'react'

const Home = () => {
  return (
    <section className='pt-[130px]'>
      <SecondaryHeading text={`skills & toolset`} addClasses={`text-center`} />
       <p className='my-4 w-2/3 m-auto opacity-90 text-center tracking-tight'>Explore my skill set and technical expertise in web development! From front-end languages like HTML, CSS, and JavaScript to back-end tools like Node.js, MongoDB, and Express, discover the technologies I use to bring ideas to life.</p>
       
       <div>
        <DevSkills />
       </div>
       
       </section>
  )
}

export default Home