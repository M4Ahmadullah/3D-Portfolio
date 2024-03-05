import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo
} from "react-icons/rx"
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] '>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
            <div className='main-w-[200px] h-auto flex flex-col items-center justify-center '>
                <div className='font-bold text-[16px]'>Comunity</div>
                <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <FaYoutube />
                    <span className='text-[15px] ml-[6px]'>Youtube</span>
                </div>

                <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <RxGithubLogo />
                    <span className='text-[15px] ml-[6px]'>Github</span>
                </div>

                <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <RxGithubLogo />
                    <span className='text-[15px] ml-[6px]'>Discord</span>
                </div>
            </div>

            <div className='main-w-[200px] h-auto flex flex-col items-center justify-center '>
                <div className='font-bold text-[16px]'>Social Media</div>
                <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <span className='text-[15px] ml-[6px]'>Instagram</span>
                </div>

                <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <span className='text-[15px] ml-[6px]'>Become a Sponser</span>
                </div>

                <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <span className='text-[15px] ml-[6px]'>ahmadullahm4masoudy@gmail.com</span>
                </div>
            </div>
        </div>

        <div className='mb-[20px] text-[15px] text-center'>
            &copy; Ahmadullah 2024 Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
