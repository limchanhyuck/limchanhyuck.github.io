export interface TimelineEvent {
  date: string
  title: string
  description: string
  tags: string[]
  type: 'project' | 'education' | 'career' | 'certificate'
}
