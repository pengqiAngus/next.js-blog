import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface RelatedPost {
  slug: string
  title: string
  category: string
  readTime: string
  image: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
}

function RelatedPostCard({ post }: { post: RelatedPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden group dark:bg-zinc-900 border-0">
        <div className="relative aspect-[1.5] overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold dark:text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2 h-[3.75rem] flex-shrink-0">
            {post.title}
          </h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-purple-400 font-medium">{post.category}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="py-16 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold dark:text-white inline-block relative">
            RELATED POSTS
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-500" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <RelatedPostCard key={post.slug} post={post} />
          ))}
        </div>

        <Link
          href="/categories/blog"
          className="inline-flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition-colors group"
        >
          <span className="relative">
            See More New Articles
            <div className="absolute -bottom-1 left-0 w-full h-px bg-white group-hover:bg-purple-400 transition-colors" />
          </span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

