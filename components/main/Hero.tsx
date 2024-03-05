import React from 'react'
import HeroContent from '../sub/HeroContent'
const Hero = () => {
  return (
    <div id="hero" className='relatvie flex flex-col h-full w-full'>
        <video
        autoPlay
        muted 
        loop
        className='xl:rotate-180 rotate-180 absolute xl:top-[-280px] top-[-400px] left-0 z-[1] w-full h-full object-cover'
        >
            <source src='/blackhole.webm' type='video/webm' />
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero
