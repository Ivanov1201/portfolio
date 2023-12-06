import { usePageCheck } from '../_hooks/use-page-check'
import ThemeSwitch from './theme-switch'
import { IoMenu } from 'react-icons/io5'
import Logo from './logo'
import SearchInput from './search-input'
import { routes } from '../routes'

const searchInputVisiblePages = [routes.Projects]

export default function Navbar() {
  const isHomePage: boolean = usePageCheck([routes.Home])
  const isSearchInputVisible: boolean = usePageCheck(searchInputVisiblePages)

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
        {isSearchInputVisible && (
          <div className='flex-1'>
            <SearchInput />
          </div>
        )}
        <div className='flex-none'>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}
