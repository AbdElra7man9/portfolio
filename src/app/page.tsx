import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@app/(component)/Header'
import Body from './(component)/Body'
import Main from './(component)/Main'


export default function Home() {
  return (
    <div className='container max-w-[120rem]'>
      <div className='blue-body-top-before blue-body-top-after '>
        <div className='wave-image'>
          <Header />
          <Main />
          <div className='py-96 mt-96'>
            <Body />
          </div>
        </div>
      </div>
    </div>
  )
}
