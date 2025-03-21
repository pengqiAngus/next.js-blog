"use client";
import Link from "next/link";
import { TrendingPostCard } from "@/components/shared/TrendingPostCard";
import { ArrowUpRight } from "lucide-react";
import posts from "@/data/posts";
import { filterPopularPosts, getRecentPosts } from "@/utils/postFilters";
import { type Post } from "@/data/posts/index";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export function RecentPostsSection() {
  const { t } = useTranslation();
  const recentBlogPosts: Post[] = getRecentPosts(posts);
  const trendingPosts: Post[] = filterPopularPosts(posts);
  return (
    <section className="py-12 bg-[#f3f3f3] dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-foreground dark:text-white border-b border-gray-200 dark:border-white/10 pb-2">
          {t('home.recentPosts')}
        </h2>
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          {/* Main Section */}
          <div>
            <BentoGrid className="md:auto-rows-[20rem] mb-8">
              {recentBlogPosts.map((post: Post, index: number) => (
                <Link 
                  href={`/blog/${post.slug}`} 
                  key={post.slug}
                  className={cn(
                    index === 0 && "md:col-span-1",
                    index === 1 && "md:col-span-1",
                    index === 2 && "md:col-span-1",
                    index === 3 && "md:col-span-2",
                    index === 4 && "md:col-span-1",
                    index === 5 && "md:col-span-1",
                    index === 6 && "md:col-span-2",
                    "group/bento"
                  )}
                >
                  <BentoGridItem
                    className={cn(
                      "h-full cursor-pointer",
                      "bg-gradient-to-br from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800",
                      "shadow-lg hover:shadow-xl",
                      "rounded-[--radius] overflow-hidden",
                      "transition-all duration-300",
                      index % 2 === 0 ? "[--radius:2rem_1rem]" : "[--radius:1rem_2rem]"
                    )}
                    header={
                      <motion.div
                        className={cn(
                          "relative w-full overflow-hidden",
                          "rounded-[calc(var(--radius)-0.5rem)]",
                          index === 0 || index === 6 ? "aspect-[2/1.5]" : "aspect-[1.5/1]"
                        )}
                        style={{
                          backgroundSize: "400% 400%"
                        }}
                        whileHover={{
                          backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
                          transition: {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }
                        }}
                      >
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-all duration-300 group-hover/bento:scale-110"
                        />
                      </motion.div>
                    }
                    title={
                      <motion.h3
                        className={cn(
                          "font-bold text-gray-900 dark:text-white line-clamp-2",
                          index === 0 || index === 6 ? "text-2xl" : "text-xl"
                        )}
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {post.title}
                      </motion.h3>
                    }
                    description={
                      <div className="flex items-center justify-between">
                        <span className="text-purple-500 font-medium group-hover/bento:text-purple-400 transition-colors">{post.type}</span>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover/bento:text-purple-400 transition-colors" />
                      </div>
                    }
                  />
                </Link>
              ))}
            </BentoGrid>
            {/* See More Link */}
            <div className="text-right">
              <Link
                href="/categories/all"
                className="inline-flex items-center gap-2 text-foreground dark:text-white font-semibold hover:text-primary transition-colors"
              >
                {t('home.readMore')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Trending Posts Sidebar */}
          <div className="bg-white dark:bg-purple-100/10 rounded-lg p-6 sticky top-20 self-start h-fit border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold mb-6 text-foreground dark:text-white">
              {t('home.trendingPosts')}
            </h3>
            <div className="space-y-6">
              {trendingPosts.map((post: Post) => (
                <TrendingPostCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
