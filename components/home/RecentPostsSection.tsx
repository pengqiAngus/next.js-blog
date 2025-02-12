import Link from "next/link"
import { BlogCard } from "@/components/shared/BlogCard"
import { TrendingPostCard } from "@/components/shared/TrendingPostCard"
import { ArrowUpRight } from "lucide-react"
import { posts } from "@/data/posts"
import { filterPopularPosts, getRecentPosts } from "@/utils/postFilters"

export function RecentPostsSection() {
  const recentBlogPosts = getRecentPosts(posts,)
  const trendingPosts = filterPopularPosts(posts)
  return (
    <section className="py-12 bg-[#f3f3f3] dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-foreground dark:text-white border-b border-gray-200 dark:border-white/10 pb-2">
          RECENT POSTS
        </h2>
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          <div className="space-y-8">
            {recentBlogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                image={post.image}
                category={post.type}
                title={post.title}
                description={post.description}
                author={post.author}
                readTime={post.readTime}
              />
            ))}
            {/* See More Link */}
            <div className="py-4">
              <div className="container mx-auto px-4 text-right">
                <Link
                  href="/categories/blog"
                  className="inline-flex items-center gap-2 text-foreground dark:text-white font-semibold hover:text-primary transition-colors"
                >
                  See More New Articles
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Trending Posts Sidebar */}
          <div className="bg-white dark:bg-purple-100/10 rounded-lg p-6 sticky top-20 self-start h-fit border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold mb-6 text-foreground dark:text-white">
              TRENDING POSTS
            </h3>
            <div className="space-y-6">
              {trendingPosts.map((post) => (
                <TrendingPostCard
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  image={post.image}
                  category={post.type}
                  title={post.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

