import { VideoCard } from "@/components/shared/VideoCard"
import { PopularVideoCard } from "@/components/shared/PopularVideoCard"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { posts } from "@/data/posts"
import { filterPopularPosts, getRecentPosts } from "@/utils/postFilters"

export function SubscribeAndVideosSection() {
  const recentVideoPosts = getRecentPosts(posts, "video")
  const popularVideos = filterPopularPosts(posts, "video")
  return (
    <section className="py-12 bg-background dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-black mb-16 text-foreground dark:text-white tracking-tight">
          SUBSCRIBE
        </h2>

        <h3 className="text-2xl font-bold mb-8 text-foreground dark:text-white border-b border-gray-200 dark:border-white/10 pb-2">
          RECENT VIDEOS
        </h3>

        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          <div className="space-y-8">
            <div className="grid gap-8 grid-cols-2">
              {recentVideoPosts.map((video) => (
                <VideoCard
                  key={video.slug}
                  href={`/${video.type}/${video.slug}`}
                  image={video.image}
                  category={video.category}
                  title={video.title}
                  likes={video.likes}
                  comments={video.comments}
                />
              ))}
            </div>
            {/* See More Link */}
            <div className="py-4">
              <div className="container mx-auto px-4 text-right">
                <Link
                  href="/categories/video"
                  className="inline-flex items-center gap-2 text-foreground dark:text-white font-semibold hover:text-primary transition-colors"
                >
                  See More New Videos
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Popular Videos Sidebar */}
          <div className="bg-[#f3f3f3] dark:bg-[#ffa9af]/10 rounded-lg p-6 border border-gray-200 dark:border-[#ffa9af] sticky top-20 self-start h-fit">
            <h3 className="font-semibold mb-6 text-foreground dark:text-white flex items-center gap-2">
              POPULAR VIDEOS <span className="text-rose-500">—</span>
            </h3>
            <div className="space-y-6">
              {popularVideos.map((video) => (
                <PopularVideoCard
                  key={video.slug}
                  href={`/${video.type}/${video.slug}`}
                  image={video.image}
                  title={video.title}
                  views={video.views}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

