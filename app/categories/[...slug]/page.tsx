export const runtime = "edge";
export const nodejs = true;
import { CategoryCard } from "@/components/shared/CategoryCard";
import { StyledLinkButton } from "@/components/shared/StyledLinkButton";
import { blogTypes } from "@/data/types/index";

import { ChevronLeft } from "lucide-react";
import  posts  from "@/data/posts";
import { filterPostsBySubCategory } from "@/utils/postFilters";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CategoryPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const [type = "all"] = params.slug || [];
  const postsByType =
    type === "all" ? posts.slice(0, 9) : filterPostsBySubCategory(posts, type);
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-foreground dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <StyledLinkButton href="/" icon={<ChevronLeft className="w-5 h-5" />}>
          Back
        </StyledLinkButton>
        <div className="flex flex-wrap gap-3 mb-12">
          {blogTypes.map((cat) => (
            <Link
              href={`/categories/${cat.slug}`}
              key={cat.slug}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                "border border-purple-500 hover:bg-purple-500/10",
                cat.slug === type || (cat.slug === "all" && type === "all")
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "text-purple-500 hover:text-purple-400"
              )}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {postsByType.map((post) => (
            <CategoryCard
              key={post.slug}
              href={`/${post.type}/${post.slug}`}
              image={post.image}
              category={post.type}
              title={post.title}
            />
          ))}
        </div>

        {postsByType.length === 0 && (
          <p className="text-center">No posts found in this category.</p>
        )}
      </div>
    </div>
  );
}
