export type TechTag =
  | "React"
  | "Node"
  | "TypeScript"
  | "MySQL"
  | "AWS"
  | "JWT"
  | "WebSocket"
  | "Supabase"

export interface Project {
  slug: string
  title: string
  description: string
  stack: TechTag[]
  image: string
  demoUrl?: string
  repoUrl?: string
}