import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

const figTree = Figtree({ subsets: ['latin'] })

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
      <body className={figTree.className}>{children}</body>
    </html>
  )
}
