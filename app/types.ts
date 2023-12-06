
export enum ProjectType {
  PERSONAL = 'personal', // Personal Side Project
  CLIENT = 'client', // Client Contract Project
  CORPORATE = 'corporate', // Corporate/Company Project
  CONSULTING = 'consulting', // Consulting Project
  COLLABORATE = 'collaborate', // Collaborative Project
}

export type Project = {
  id: number
  type: ProjectType
  title: string
  description: string
  image_url: string
  live_url?: string
  source_url?: string
  tags: string[]
}
