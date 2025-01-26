export interface Tool {
  id: string
  name: string
  description: string
  category: string
  icon: string
  url: string
  featured: boolean
}

export const tools: Tool[] = [
  {
    id: "1",
    name: "Visual Studio Code",
    description: "Popular code editor with great extensions",
    category: "Development",
    icon: "🔧",
    url: "https://code.visualstudio.com",
    featured: true,
  },
  {
    id: "2",
    name: "Figma",
    description: "Collaborative design tool",
    category: "Design",
    icon: "🎨",
    url: "https://figma.com",
    featured: true,
  },
  {
    id: "3",
    name: "GitHub",
    description: "Version control and collaboration platform",
    category: "Development",
    icon: "📦",
    url: "https://github.com",
    featured: true,
  },
  {
    id: "4",
    name: "Notion",
    description: "All-in-one workspace",
    category: "Productivity",
    icon: "📝",
    url: "https://notion.so",
    featured: false,
  },
]

