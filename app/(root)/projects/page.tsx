'use client'

import useProjects from '../../_hooks/use-projects'
import { Project } from '@/app/constants'
import Loading from '@/app/_components/loading'
import ProjectCard from './_components/project-card'

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
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 md:gap-8 2xl:gap-24'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}/>
        ))}
      </div>
    )
  }
  return null
}
