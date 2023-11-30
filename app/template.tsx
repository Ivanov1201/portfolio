'use client'
import Navbar from '@/app/components/navbar'
import Sidebar from '@/app/components/sidebar'
import { usePageCheck } from '@/app/hooks'

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const isHomePage: boolean = usePageCheck(['/'])
  return (
    <div className={`drawer ${!isHomePage ? 'lg:drawer-open' : ''}`}>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <Navbar />
        {children}
      </div>
      <Sidebar />
    </div>
  )
}
