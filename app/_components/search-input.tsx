export default function SearchInput() {
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
          type='search'
          placeholder='Search…'
          className='input w-full ps-10 input-bordered'
        ></input>
      </div>
    </div>
  )
}
