import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchInput() {
  const router = useRouter()
  const pathname = usePathname()

  const [searchTerm, setSearchTerm] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Navigate to the current page with the search term as a query parameter
      const searchParam = new URLSearchParams()
      if (searchTerm) searchParam.set('search', searchTerm)
      router.push(`${pathname}?${searchParam.toString()}`)
    }
  }

  return (
    <div className='hidden w-full max-w-sm lg:flex'>
      <div className='relative mx-3 w-full'>
        <svg
          className='pointer-events-none absolute my-4 ms-4 stroke-current opacity-60 text-base-content'
          width='16'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
        <input
          name='search'
          type='text'
          placeholder='Search…'
          className='input w-full ps-10 input-bordered'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
    </div>
  )
}
