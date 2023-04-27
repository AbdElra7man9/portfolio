import { docsConfig } from '@config/docsConfig'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
interface SocialMediaProps {

}

const SocialMedia: FC<SocialMediaProps> = ({ }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 my-10'>
            {docsConfig.MySocials.map(item => (
                <Link key={item.id} href='' target='_blank' className='box'>
                    {item.image ?
                        < Image
                            height={200}
                            width={200}
                            src={item.image}
                            alt={item.title}
                            className='h-10 w-32'
                        />
                        :
                        <div className=' font-medium text-white flex gap-3 items-center text-2xl'>
                            <p>{item.title}</p>
                            <span>{item.icon}</span>
                        </div>
                    }
                </Link>
            ))}
        </div>
    )
}

export default SocialMedia