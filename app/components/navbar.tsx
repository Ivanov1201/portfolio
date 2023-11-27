import ThemeSwitch from './theme-switch'
import { IoMenu } from 'react-icons/io5'

export default function Navbar() {
  return (
    <div className='sticky top-0 bg-opacity-90 backdrop-blur'>
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
