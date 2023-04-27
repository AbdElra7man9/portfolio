'use client';
import Link from 'next/link';
import { FC } from 'react'
import { useState, useEffect } from "react";
interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    const [pos, setPos] = useState<string>("top");
    // Check the top position of the navigation in the window
    useEffect(() => {
        const handleScrollTop = () => {
            const scrolled = document.scrollingElement?.scrollTop;
            if ((scrolled as number) >= 5) {
                setPos("moved");
            } else {
                setPos("top");
            }
        };
        document.addEventListener("scroll", handleScrollTop);
        return () => document.removeEventListener("scroll", handleScrollTop);
    }, []);
    const NavLinks = () => {
        return (
            <>
                <Link href='/'>Home</Link>
                <Link href='/'>About Me</Link>
                <Link href='/'>Serices</Link>
                <Link href='/'>Portfolio</Link>
                <Link href='/'>Pages</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>Contact Us</Link>
            </>
        )
    }

    return (
        <div className='h-20'>
            <div className={`py-5 px-5 inset-x-0 container max-w-full z-10 ${(pos === "top") ? "absolute" : "!fixed backdrop-blur-3xl"}`}>
                <div className='flex justify-between items-center container max-w-[90rem]'>
                    <Link href='HOME' className='font-bold text-white text-3xl'>3.Shaban</Link>
                    <div className='flex items-center gap-5 text-lg font-medium text-white z-10'>
                        <div className='hidden lg:flex gap-7 items-center'>
                            <NavLinks />
                        </div>
                        <button
                            aria-label='Hire Me'
                            className='bg-gradient-to-br from-[#C578FA] to-[#F673FF] via-[#DB75FC] p-3 px-14 rounded-full'>
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header