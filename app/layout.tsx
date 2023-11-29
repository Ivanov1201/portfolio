import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/navbar'
import Sidebar from '@/app/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vitaliy Ivanov · Full Stack Web Developer',
  description:
    'Full-Stack(Front-End, Back-End) web developer proficient in Javascript/Typescript, PHP and Python',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='drawer'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            <Navbar />
            {children}
          </div>
          <Sidebar />
        </div>
      </body>
    </html>
  )
}
