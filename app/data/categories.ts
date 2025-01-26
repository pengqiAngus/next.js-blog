export interface Category {
  id: string
  name: string
  slug: string
  description: string
  postCount: number
  videoCount: number
  icon: string
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Development",
    slug: "development",
    description: "Programming tutorials and best practices",
    postCount: 25,
    videoCount: 15,
    icon: "💻",
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    description: "UI/UX design principles and tools",
    postCount: 18,
    videoCount: 12,
    icon: "🎨",
  },
  {
    id: "3",
    name: "Business",
    slug: "business",
    description: "Business strategies and insights",
    postCount: 20,
    videoCount: 8,
    icon: "💼",
  },
  {
    id: "4",
    name: "Technology",
    slug: "technology",
    description: "Latest tech news and reviews",
    postCount: 30,
    videoCount: 20,
    icon: "🚀",
  },
]

