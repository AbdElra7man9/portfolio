import '@Styles/globals.css'
import React from 'react';
import { Metadata } from "next"

import { siteConfig } from '@config/site'
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AbdElrahman",
    "AbdElrahman Shaban",
    "Full Stack",
    "Front-end",
    "Back-end",
    "MERN",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "AbdElrahman Shaban",
      url: "https://3bdo-shaban.vercel.app/",
    },
  ],
  creator: "Abdelrahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    // images: [
    //   {
    //     // url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
