import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@app/(component)/Header'
import Body from './(component)/Body'
import Main from './(component)/Main'
import MyProtofolio from './(component)/MyProtofolio'
import SocialMedia from './(component)/SocialMedia'
import Footer from './(component)/Footer'


export default function Home() {
  return (
    <>
      <Header />
      <div className='container max-w-[120rem] px-3'>
        <div className='blue-body-top-before blue-body-top-after container max-w-8xl'>
          <div className='wave-image'>
            <main className="container max-w-[90rem] h-full">

              <Main />
              <SocialMedia />
              <MyProtofolio />
            </main>

            {/* <div className='py-96 mt-96'>
              <Body />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
