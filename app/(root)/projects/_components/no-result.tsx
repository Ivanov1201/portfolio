import Lottie from 'lottie-react'
import NoResultAnimation from '@/app/_assets/lottie-data/no-result.json'
import Link from 'next/link'
import { routes } from '@/app/routes'

export default function NoResultSection({}) {
  return (
    <>
      <div className='flex flex-col gap-12 items-center justify-center h-[calc(100vh-6rem)] relative max-w-screen-md mx-auto'>
        <Lottie animationData={NoResultAnimation} loop={true} />
        <p className='text-center text-xl px-16'>
          Oops, no projects found! 😬 <br />
          Time to mix it up with a new keyword! 🎉
        </p>
        <button className='btn btn-primary'>
          <Link href={routes.Projects}>See all projects</Link>
        </button>
      </div>
    </>
  )
}
