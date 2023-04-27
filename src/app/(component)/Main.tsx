'use client';
import { FC } from "react";

interface MainProps {

}

const Main: FC<MainProps> = ({ }) => {
    return (
        <>
            <div className='flex items-center justify-between h-full pt-10 lg:pt-32'>
                <div className="">
                    <div className='text-5xl font-semibold space-y-3 lg:space-y-10'>
                        <p className='font-bold text-white text-8xl'>Hey! I Am 🖐️</p>
                        <p className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">AbdElrahman Shaban</p>
                        <p className='text-xl lg:text-3xl font-semibold text-orange-600 uppercase'>Full Stack Web Developer</p>
                        <p className='text-gray-400 text-sm lg:text-xl font-medium'>Iam Full stack web developer( MERN STACK ) | Node.js | React.js | Next.js</p>
                    </div>
                    <button
                        aria-label='Hire Me'
                        className='bg-gradient-to-br from-[#C578FA] to-[#F673FF] via-[#DB75FC] font-medium text-xl text-white my-8 p-4 px-14 rounded-full'>
                        Download CV
                    </button>
                    <div className='font-medium text-xl text-white'>
                        <h3>Follow ME:</h3>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Main