import Image from 'next/image'
import Link from 'next/link'
import { routes } from '../routes'

export default function Home() {
  return (
    <div className='hero min-h-[calc(100vh-4rem)]'>
      <div className='hero-content flex-col lg:flex-row-reverse gap-x-24'>
        <div>
          <Image
            src='/images/hero.jpg'
            className='max-w-sm rounded-lg shadow-2xl'
            alt='Hero'
            width={500}
            height={700}
          />
        </div>
        <div>
          <h1 className='text-5xl font-bold'>Full-Stack Web Developer</h1>
          <p className='py-6'>
            I am a full-stack web developer located in Ukraine.
          </p>
          <Link href={routes.Projects} className='btn btn-primary'>
            Explore projects
          </Link>
        </div>
      </div>
    </div>
  )
}
