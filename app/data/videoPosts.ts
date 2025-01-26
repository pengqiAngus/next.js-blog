export interface VideoPost {
  id: string
  title: string
  slug: string
  description: string
  category: string
  thumbnail: string
  duration: string
  views: number
  publishedAt: string
  author: {
    name: string
    avatar: string
  }
  videoUrl: string
}

export const videoPosts: VideoPost[] = [
  {
    id: "1",
    title: "Building a REST API with Node.js",
    slug: "building-rest-api-nodejs",
    description: "Learn how to create a RESTful API using Node.js and Express",
    category: "Development",
    thumbnail: "/videos/rest-api.jpg",
    duration: "15:30",
    views: 1200,
    publishedAt: "2024-01-18",
    author: {
      name: "John Doe",
      avatar: "/avatars/john-doe.jpg",
    },
    videoUrl: "https://example.com/videos/rest-api",
  },
  {
    id: "2",
    title: "Responsive Design Principles",
    slug: "responsive-design-principles",
    description: "Master the fundamentals of responsive web design",
    category: "Design",
    thumbnail: "/videos/responsive-design.jpg",
    duration: "12:45",
    views: 850,
    publishedAt: "2024-01-17",
    author: {
      name: "Jane Smith",
      avatar: "/avatars/jane-smith.jpg",
    },
    videoUrl: "https://example.com/videos/responsive-design",
  },
]

