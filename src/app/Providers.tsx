'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes'
import Router from 'next/router';
import NProgress from 'nprogress';

type providersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: providersProps) {

  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  Router.events.on('routeChangeComplete', () => { window.scrollTo(0, 0); });


  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className=" dark:text-gray-500 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
