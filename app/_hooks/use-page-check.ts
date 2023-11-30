import { usePathname } from 'next/navigation'

export const usePageCheck = (pages: string[]): boolean => {
  const pathName = usePathname()
  return pages.includes(pathName)
}
