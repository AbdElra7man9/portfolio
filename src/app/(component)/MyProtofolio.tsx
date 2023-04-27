import { docsConfig } from '@config/docsConfig'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BsGrid } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'

interface MyProtofolioProps {

}

const MyProtofolio: FC<MyProtofolioProps> = ({ }) => {
    return (
        <div className='text-center my-32 flex flex-col gap-8'>
            <span className='flex justify-center items-center gap-4 text-4xl text-transparent font-semibold font-serif bg-clip-text bg-gradient-to-r from-[#FB7979] to-[#DA6A6D]'>
                <BsGrid color='#FB7979' />
                <p>My Work</p>
            </span>
            <p className='text-white text-7xl font-serif font-bold'>See My Portfolio</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {docsConfig.MyWorks.map((item => (
                    <div key={item.id} className='relative group h-96 aspect-w-5 aspect-h-5 duration-300 '>
                        <Image
                            height={400}
                            width={400}
                            draggable={false}
                            src={item.image}
                            alt={item.title}
                            className='h-full w-full object-cover rounded-xl cursor-pointer overflow-hidden'
                        />
                        <Link href={item.link} target='_blank' className='absolute top-0 hidden group-hover:block p-5 text-start bg-gray-700 space-y-2 rounded-xl opacity-90 w-full h-full'>
                            <p className='text-2xl font-bold text-white'>{item.title}</p>
                            <p className='text-white'>{item.des}</p>
                            <div className='flex gap-21 items-center text-[#FA7878] hover:underline'>
                                <p className='font-semibold'>View Demo</p>
                                <BiChevronRight size={25}/>
                            </div>
                        </Link>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default MyProtofolio