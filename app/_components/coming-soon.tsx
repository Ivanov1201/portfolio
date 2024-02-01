'use client'
import Link from 'next/link'
import Lottie from 'lottie-react'
import ComingSoonAnimation from '../_assets/lottie-data/coming-soon.json'

export default function ComingSoon() {
  return (
    <>
      <div className='flex items-center justify-center h-[calc(100vh-6rem)] relative'>
        <Lottie animationData={ComingSoonAnimation} loop={true} />
      </div>
    </>
  )
}
