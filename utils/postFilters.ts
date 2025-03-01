
import type { Post } from "@/data/posts"



export function filterPopularPosts(posts: Post[]): Post[] {
  return posts.filter((post) => post.popular)
}

export function getRecentPosts(posts: Post[]): Post[] {
  return posts.sort((a, b) => new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime())
    .slice(0, 7)
}

export function filterPostsBySubCategory(posts: Post[], type: any): Post[] {
  return posts.filter((post) => post.type === type);
}
export function filterPostsByCreateTime(posts: Post[]): Post[] {
  return posts.sort((a, b) => new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime())
    .slice(0, 3);
}

