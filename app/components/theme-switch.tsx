'use client'
import { useState, useEffect } from 'react'
import MoonIcon from '@/app/assets/icons/moon'
import SunIcon from '@/app/assets/icons/sun'

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(() => {
    const storedTheme: string | null =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('theme')
        : null
    const prefersDarkMode =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    const currentTheme: Theme =
      storedTheme && (storedTheme as Theme) in Theme
        ? (storedTheme as Theme)
        : prefersDarkMode
          ? Theme.Dark
          : Theme.Light
    return currentTheme
  })

  const toggleTheme = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
  }

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme as string)
  }, [theme])

  return (
    <label className='swap swap-rotate'>
      <input
        type='checkbox'
        className='theme-controller'
        value='synthwave'
        checked={theme === Theme.Dark}
        onChange={toggleTheme}
      />
      <MoonIcon />
      <SunIcon />
    </label>
  )
}
