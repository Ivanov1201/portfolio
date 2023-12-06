'use client'
import Link from 'next/link'
import Lottie from 'lottie-react'
import NotFoundAnimation from './_assets/lottie-data/not-found.json'
import { routes } from './routes'

export default function NotFound() {
  return (
    <>
      <div className='flex items-center justify-center h-screen relative'>
        <Lottie
          animationData={NotFoundAnimation}
          loop={true}
          className='h-screen'
        />
        <button className='btn btn-primary absolute bottom-8'>
          <Link href={routes.Home}>Back to Home</Link>
        </button>
      </div>
    </>
  )
}
