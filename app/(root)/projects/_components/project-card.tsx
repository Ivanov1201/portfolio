import Image from 'next/image'
import Link from 'next/link'
import { Project, ProjectType } from '@/app/constants'

type ProjectCardProps = {
  project: Project
}

function ProjectTypeBadge({ type }: { type: ProjectType }) {
  switch (type) {
    case ProjectType.PERSONAL: {
      return <div className='badge badge-accent'>{type}</div>
    }
    case ProjectType.CLIENT: {
      return <div className='badge badge-primary'>{type}</div>
    }
    case ProjectType.CORPORATE: {
      return <div className='badge badge-secondary'>{type}</div>
    }
    case ProjectType.CONSULTING: {
      return <div className='badge badge-secondary'>{type}</div>
    }
    case ProjectType.COLLABORATE: {
      return <div className='badge badge-secondary'>{type}</div>
    }
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='card bg-base-100 shadow-xl max-w-sm'>
      <figure>
        <Image
          src={project.image_url}
          className='rounded-lg shadow-2xl'
          alt='Hero'
          width={500}
          height={700}
          priority
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {project?.title}
          <ProjectTypeBadge type={project?.type} />
        </h2>
        <p>{project?.description}</p>
        <div className='card-actions justify-end'>
          {project?.tags?.map((tag) => (
            <div className='badge badge-ghost' key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className='card-actions'>
          <Link href={project?.live_url ?? ''} className='link link-primary'>
            Link
          </Link>
          <Link href={project?.source_url ?? ''} className='link link-primary'>
            Source
          </Link>
        </div>
      </div>
    </div>
  )
}
