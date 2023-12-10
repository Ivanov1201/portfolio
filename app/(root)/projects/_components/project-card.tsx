import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { Project, ProjectType } from '@/app/types'

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
        <div className='card-actions justify-end mt-2'>
          <a href={project?.live_url ?? ''} className='link link-primary' target='_blank'>
            <FaExternalLinkAlt title={project?.live_url ?? ''} />
          </a>
          <a href={project?.source_url ?? ''} className='link link-info' target='_blank'>
            <FaGithub title={project?.source_url ?? ''} />
          </a>
        </div>
      </div>
    </div>
  )
}
