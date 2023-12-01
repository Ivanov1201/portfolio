import Logo from './logo'
import Link from 'next/link'

export default function Sidebar() {
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
          <li>
            <details open>
              <summary>
                <Link href='/projects'>Projects</Link>
              </summary>
              <ul>
                <li>
                  <a>Project 1</a>
                </li>
                <li>
                  <a>Project 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
