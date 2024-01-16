export interface BlogMetadata {
  title: string;
  description?: string;
  summary: string | undefined;
  date: string;
  preview: string;
  draft: boolean;
  tags: string[];
  slug?: string;
  type?: string;
}

export interface Blog {
  metadata: BlogMetadata;
  content: string;
}
