import { usePageCheck } from '../hooks'
import ThemeSwitch from './theme-switch'
import { IoMenu } from 'react-icons/io5'
import Logo from './logo'

export default function Navbar() {
  const isHomePage: boolean = usePageCheck(['/'])
  return (
    <div className='bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm'>
      <div className='navbar'>
        <div className={`flex-none ${!isHomePage ? 'lg:hidden' : ''}`}>
          <label
            htmlFor='my-drawer'
            className='btn btn-square btn-ghost text-2xl'
          >
            <IoMenu />
          </label>
        </div>
        {isHomePage && (
          <div className='flex-1'>
            <Logo />
          </div>
        )}
        <div className='flex-none'>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}
