export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readingTime: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 13",
    slug: "getting-started-with-nextjs-13",
    excerpt: "Learn how to build modern web applications with Next.js 13 and its powerful features.",
    content: "Full blog post content here...",
    category: "Development",
    author: {
      name: "John Doe",
      avatar: "/avatars/john-doe.jpg",
    },
    publishedAt: "2024-01-20",
    readingTime: "5 min read",
    image: "/blog/nextjs-13.jpg",
  },
  {
    id: "2",
    title: "Mastering TypeScript",
    slug: "mastering-typescript",
    excerpt: "A comprehensive guide to TypeScript and its advanced features.",
    content: "Full blog post content here...",
    category: "Development",
    author: {
      name: "Jane Smith",
      avatar: "/avatars/jane-smith.jpg",
    },
    publishedAt: "2024-01-19",
    readingTime: "8 min read",
    image: "/blog/typescript.jpg",
  },
]

