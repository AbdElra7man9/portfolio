'use client';
import Image from 'next/image'
import { FC } from 'react'

interface MainProps {

}

const Main: FC<MainProps> = ({ }) => {
    return (
        <main className="container max-w-[100rem] p-24 h-full py-32">
            <div className='flex items-center justify-between h-full'>
                <div className="">
                    <div className='text-5xl font-semibold space-y-10'>
                        <p className='font-bold text-white text-8xl'>Hey! I Am 🖐️</p>
                        <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">AbdElrahman Shaban</p>
                        <p className='text-3xl font-semibold text-orange-600 uppercase'>Full Stack Web Developer</p>
                        <p className='text-gray-400 text-xl font-medium'>Iam Full stack web developer( MERN STACK ) | Node.js | React.js | Next.js</p>
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
            <div className='grid grid-cols-6 gap-5 font-medium text-white my-20 mt-52'>
                <a href='' target='_blank' className='box'>
                    <Image
                        height={200}
                        width={200}
                        src='/Images/Social/linkdin.png'
                        alt='linkdin'
                        className='h-10 w-32'
                    />
                </a>
                <a href='' target='_blank' className='box'>Amazon</a>
                <a href='' target='_blank' className='box'>Amazon</a>
                <a href='' target='_blank' className='box'>Amazon</a>
                <a href='' target='_blank' className='box'>Amazon</a>
                <a href='' target='_blank' className='box'>Amazon</a>
            </div>
        </main>
    )
}

export default Main