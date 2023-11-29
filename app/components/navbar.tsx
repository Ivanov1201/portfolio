import ThemeSwitch from './theme-switch'
import { IoMenu } from 'react-icons/io5'

export default function Navbar() {
  return (
    <div className='bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm'>
      <div className='navbar'>
        <div className='flex-none'>
          <label
            htmlFor='my-drawer'
            className='btn btn-square btn-ghost text-2xl'
          >
            <IoMenu />
          </label>
        </div>
        <div className='flex-1'>
          <a className='btn btn-ghost text-2xl'>Vitaliy</a>
        </div>
        <div className='flex-none'>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}
