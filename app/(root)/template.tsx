'use client'
import React from 'react'
import Navbar from '@/app/_components/navbar'
import Sidebar from '@/app/_components/sidebar'
import { usePageCheck } from '@/app/_hooks/use-page-check'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const isHomePage: boolean = usePageCheck(['/'])
  // const [queryClient] = React.useState(() => new QueryClient())
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`drawer ${!isHomePage ? 'lg:drawer-open' : ''}`}>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <Navbar />
          {children}
        </div>
        <Sidebar />
      </div>
    </QueryClientProvider>
  )
}
