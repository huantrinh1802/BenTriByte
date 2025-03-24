export interface BlogMetadata {
  title: string
  summary: string | undefined
  date: string
  preview: string
  draft: boolean
  tags: string[]
  slug: string
}

export interface Blog {
  metadata: BlogMetadata
  content: string
}