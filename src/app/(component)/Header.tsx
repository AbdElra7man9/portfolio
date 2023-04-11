'use client';
import Link from 'next/link';
import { FC } from 'react'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <div className='flex justify-between container max-w-8xl py-5 border-b'>
            <div></div>
            <div className='flex items-center gap-5 text-lg font-medium text-white z-10'>
                <div className='flex gap-7 items-center'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>About Me</Link>
                    <Link href='/'>Serices</Link>
                    <Link href='/'>Portfolio</Link>
                    <Link href='/'>Pages</Link>
                    <Link href='/'>Blog</Link>
                    <Link href='/'>Contact Us</Link>
                </div>
                <button
                    aria-label='Hire Me'
                    className='bg-gradient-to-br from-[#C578FA] to-[#F673FF] via-[#DB75FC] p-3 px-14 rounded-full'>
                    Hire Me
                </button>
            </div>
        </div>
    )
}

export default Header