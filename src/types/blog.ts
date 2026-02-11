export interface BlogPost {
  id: string
  title: string
  date: string
  tags: string[]
  summary: string
  thumbnail: string | null
  slug: string
  notionUrl: string
}
