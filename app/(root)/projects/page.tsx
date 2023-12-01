'use client'
import useProjects from './useProjects'
import { Project } from '@/app/constants'
import Loading from '@/app/_components/loading'
export default function Projects() {
  const {
    projects,
    isFetching,
  }: {
    projects: Project[]
    isFetching: boolean
  } = useProjects()

  if (isFetching) {
    return <Loading />
  }

  if (projects.length) {
    return (
      <>
        {projects.map((project) => (
          <div key={project.id}>
            Type: {project.type} <br />
            Title: {project.title}
          </div>
        ))}
      </>
    )
  }
  return null
}
