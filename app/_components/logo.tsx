import Link from 'next/link'
import Image from 'next/image'
import { routes } from '../routes'

export default function Logo() {
  return (
    <Link href={routes.Home} className='btn btn-ghost text-2xl'>
      <Image src='/logo.svg' alt='Logo' width={40} height={42} priority />
      <div className='font-title inline-flex text-lg md:text-2xl'>
        Vitaliy Ivanov
      </div>
    </Link>
  )
}
