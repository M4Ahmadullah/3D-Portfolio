import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section 
    id='skills'
    className='felx flex-col items-center justify-center gap-3 h-full relative overflow-hidden sm:pb-80 py-20'
    style={{ transform: "scale(0.9)" }}
    >
        <SkillText />
        <div className='flex flex-row justify-around flex-wrap lg:gap-5 items-center lg:mx-28'>
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap lg:gap-5 items-center lg:mx-28'>
            {Backend_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap lg:gap-5 items-center md:mx-28 '>
            {Full_stack.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap lg:gap-5 items-center md:mx-28 '>
            {Other_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className='w-full h-full absolute'>
            <div className='w-full h-[50px] z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                <video src="/cards-video.webm"
                className='w-full h-auto'
                preload='false'
                loop
                muted
                autoPlay
                ></video>
            </div>
        </div>
    </section>
  )
}

export default Skills
