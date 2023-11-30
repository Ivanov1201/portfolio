'use client'
import Link from 'next/link'
import Lottie from 'lottie-react'
import NotFoundAnimation from './_assets/lottie-data/not-found.json'

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
          <Link href='/'>Back to Home</Link>
        </button>
      </div>
    </>
  )
}
