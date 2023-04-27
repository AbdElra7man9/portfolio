import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <div className='container max-w-full py-6 bg-[#5514AC]'>
            <div className="container max-w-[90rem] h-full">
                <div className='md:flex items-center justify-between space-y-2 text-center'>
                    <Link href='HOME' className='font-bold text-white text-3xl'>3.Shaban</Link>
                    <p className='text-xs font-medium text-white'>@2023 by Abdelrahman Shaban. All rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer