import React from 'react'
import ProjectCards from '../sub/ProjectCards'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-cyan-500 py-20'>My Projects</h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 '>
        <ProjectCards
        src='/NextWebsite.png'
        title="Modern Next JS Project"
        description='This is my first Next Project'
        />

        <ProjectCards 
        src='/CardImage.png'
        title="Modern Next JS Project"
        description='This is my first Next Project'
        />

        <ProjectCards
        src='/SpaceWebsite.png'
        title="Modern Next JS Project"
        description='This is my first Next Project'
        />

      </div>
    </div>
  )
}

export default Projects
