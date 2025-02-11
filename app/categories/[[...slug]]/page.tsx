"use client"

import { CategoryPageButton } from "@/components/shared/CategoryPageButton"
import { CategoryCard } from "@/components/shared/CategoryCard";
import { CategoryVideoCard } from "@/components/shared/CategoryVideoCard"
import { StyledLinkButton } from "@/components/shared/StyledLinkButton"
import { ChevronLeft } from "lucide-react"
import { posts } from "@/data/posts"
import { filterPosts } from "@/utils/postFilters"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import React, { useState } from "react"
import type { Post } from "@/types/post"

const categories = [
  { slug: "all", name: "All" },
  { slug: "react-js", name: "React.Js" },
  { slug: "redux", name: "Redux" },
  { slug: "ui-design", name: "UI Design" },
  { slug: "user-experience", name: "User Experience" },
  { slug: "next-js", name: "Next.Js" },
  { slug: "development-tools", name: "Development Tools" },
  { slug: "productivity", name: "Productivity" },
]

export default function CategoryPage({ params }: { params: { slug?: string[] } }) {
  const router = useRouter()
  const pathname = usePathname()
  const [type = "all", category = "all"] = params.slug || []
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>([])

  React.useEffect(() => {
    const [currentType = "all", currentCategory = "all"] = pathname.split("/").slice(2)
    const newFilteredPosts = filterPosts(
      posts,
      currentType as "blog" | "video" | "all",
      currentCategory === "all" ? undefined : currentCategory,
    )
    setFilteredPosts(newFilteredPosts)
  }, [pathname])

  const pageTitle =
    type === "all"
      ? "All Categories"
      : `${type.charAt(0).toUpperCase() + type.slice(1)} Categories${category !== "all" ? `: ${category}` : ""}`

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-foreground dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <StyledLinkButton href="/" icon={<ChevronLeft className="w-5 h-5" />}>
          Back
        </StyledLinkButton>

        <h1 className="text-4xl font-black text-foreground dark:text-white mb-8">
          {pageTitle}
        </h1>

        <div className="flex flex-wrap gap-3 mb-12">
          <CategoryPageButton
            href="/categories/all"
            active={type === "all" || !type}
          >
            All
          </CategoryPageButton>
          <CategoryPageButton href="/categories/blog" active={type === "blog"}>
            Blog
          </CategoryPageButton>
          <CategoryPageButton
            href="/categories/video"
            active={type === "video"}
          >
            Video
          </CategoryPageButton>
          <CategoryPageButton href="/categories/tool" active={type === "tool"}>
            tool
          </CategoryPageButton>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <CategoryPageButton
              key={cat.slug}
              href={`/categories/${type}/${cat.slug}`}
              active={
                cat.slug === category ||
                (cat.slug === "all" && category === "all")
              }
            >
              {cat.name}
            </CategoryPageButton>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <CategoryCard
              key={post.slug}
              href={`/${post.type}/${post.slug}`}
              image={post.image}
              category={post.category}
              title={post.title}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center">No posts found in this category.</p>
        )}
      </div>
    </div>
  );
}

