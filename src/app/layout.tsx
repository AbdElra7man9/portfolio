import '@Styles/globals.css'
import React from 'react';
import Providers from '@app/Providers'
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'AbdElrahman Shaban',
  description: 'My Portfolio',
}

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#262439] min-h-screen w-screen overflow-x-hidden`}>
        {/* <Providers> */}
        {children}
        {/* </Providers> */}
      </body>
    </html>
  )
}
