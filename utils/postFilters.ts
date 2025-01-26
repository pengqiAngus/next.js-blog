import type { Post } from "@/data/posts"

export function filterPosts(posts: Post[], type?: "blog" | "video" | "all", category?: string): Post[] {
  return posts.filter(
    (post) =>
      (type === "all" || type === undefined || post.type === type) &&
      (category === "all" || category === undefined || post.category.toLowerCase().replace(/\s+/g, "-") === category),
  )
}

export function filterPopularPosts(posts: Post[], type?: "blog" | "video" | "all"): Post[] {
  return filterPosts(posts, type).filter((post) => post.popular)
}

export function getRecentPosts(posts: Post[], type?: "blog" | "video" | "all", count = 4): Post[] {
  return filterPosts(posts, type)
    .sort((a, b) => new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime())
    .slice(0, count)
}

