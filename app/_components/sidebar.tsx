'use client'
import Logo from './logo'
import Link from 'next/link'
import { routes } from '@/app/constants'
import { useCurrentPage } from '../_hooks/use-current-page'
import {
  FcAbout, // for About
  FcServices, // for Skills
  FcIdea, // for Experience
  FcOpenedFolder, // for Projects
  FcAdvertising, // for Testimals
  FcAddressBook, // for Contact
} from 'react-icons/fc'

const MenuIcon = ({ route }: { route: string }) => {
  switch (route) {
    case routes.About: {
      return <FcAbout size={24} />
    }
    case routes.Skills: {
      return <FcServices size={24} />
    }
    case routes.Experience: {
      return <FcIdea size={24} />
    }
    case routes.Projects: {
      return <FcOpenedFolder size={24} />
    }
    case routes.Contact: {
      return <FcAddressBook size={24} />
    }
    default: {
      return <FcAdvertising size={24} />
    }
  }
}

export default function Sidebar() {
  const currentPage: string = useCurrentPage()
  return (
    <div className='drawer-side z-30'>
      <label
        htmlFor='my-drawer'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <div className='w-80 min-h-screen bg-base-200 text-base-content'>
        <div className='bg-base-200 sticky top-0 z-20 items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur flex shadow-sm'>
          <Logo />
        </div>
        <ul className='menu p-4'>
          {Object.keys(routes)
            .filter((routeKey) => routes[routeKey] !== routes.Home)
            .map((key) => (
              <li key={key}>
                <Link
                  href={routes[key]}
                  className={routes[key] === currentPage ? 'active' : ''}
                >
                  <MenuIcon route={routes[key]} />
                  {key}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
