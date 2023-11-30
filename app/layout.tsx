import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
