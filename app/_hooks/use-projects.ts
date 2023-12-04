import { useQuery } from '@tanstack/react-query'
import { Project } from '@/app/constants'

export default function useProjects() {
  const projectsQuery = useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<Project[]> => {
      const res = await fetch('/data/projects.json')
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    },
  })
  return {
    projects: projectsQuery.data ?? [],
    isFetching: projectsQuery.isFetching,
  }
}
