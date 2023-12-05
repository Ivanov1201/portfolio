import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/app/constants'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='card bg-base-100 shadow-xl max-w-sm'>
      <figure>
        <Image
          src='/images/projects/helloscribe.png'
          className='rounded-lg shadow-2xl'
          alt='Hero'
          width={500}
          height={700}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {project?.title}
          <div className='badge badge-secondary'>{project?.type}</div>
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
