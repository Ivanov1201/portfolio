import { usePathname } from 'next/navigation'

export const useCurrentPage = (): string => {
  const pathName = usePathname()
  return pathName
}
