import { useQuery } from '@tanstack/react-query'
import { Project } from '@/app/constants'

function filterByKeyword(projects: Project[], keywords: string[]) {
  console.log(projects, keywords)
  if (!keywords.length) {
    return projects
  }
  return (
    projects.filter((project) =>
      keywords.some((keyword) => project?.tags.includes(keyword)),
    ) ?? []
  )
}
export default function useProjects(keywords: string[]) {
  const projectsQuery = useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<Project[]> => {
      const res = await fetch('/data/projects.json')
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    },
    initialData: [],
  })
  return {
    projects: filterByKeyword(projectsQuery.data, keywords),
    isFetching: projectsQuery.isFetching,
  }
}
