'use client';
import Image from 'next/image'
import { FC } from 'react'

interface BodyProps {

}

const Body: FC<BodyProps> = ({ }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center blue-item-before blue-item-after">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
        </main>
    )
}

export default Body