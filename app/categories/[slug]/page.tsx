
export const runtime = "edge";
export const nodejs = true;
import { CategoryCard } from "@/components/shared/CategoryCard";
import { StyledLinkButton } from "@/components/shared/StyledLinkButton";
import { blogTypes } from "@/data/types/index";
import { ChevronLeft } from "lucide-react";
import posts, { type Post } from "@/data/posts";
import { filterPostsBySubCategory } from "@/utils/postFilters";
import { cn } from "@/lib/utils";
import { Tabs } from "@/components/ui/tabs";

type Props = {
  params: {
    slug: string[];
  };
};

export default function CategoryPage({ params }: Props) {

  const tabs = blogTypes.map((cat) => ({
    title: cat.name,
    value: cat.slug,
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-slate-800  to-purple-900  [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateX(10deg)translateZ(0)] transition-transform duration-500 ease-out hover:[transform:rotateX(0deg)translateZ(50px)] group">
        <div className="grid md:grid-cols-3 gap-6 group-hover:scale-105 transition-transform duration-500">
          {(cat.slug === "all"
            ? posts.slice(0, 6)
            : filterPostsBySubCategory(posts, cat.slug)
          ).map((post: Post) => (
            <CategoryCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              image={post.image}
              category={post.type}
              title={post.title}
              description={post.description!}
            />
          ))}
          {(cat.slug === "all"
            ? posts
            : filterPostsBySubCategory(posts, cat.slug)
          ).length === 0 && (
            <p className="text-center text-white text-xl">
              No posts found in this category.
            </p>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-foreground dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="h-[62rem] [perspective:1000px] relative flex flex-col  mx-auto w-full items-start justify-start my-20 [transform-style:preserve-3d]">
          <Tabs
            tabs={tabs}
            containerClassName=""
            tabClassName="px-6 py-3 rounded-full text-sm font-medium transition-all hover:text-purple-500 hover:bg-purple-500/10"
            activeTabClassName="bg-gradient-to-br from-purple-700 to-violet-900 text-white hover:from-purple-600 hover:to-violet-800"
            contentClassName="mt-32"
          />
        </div>
      </div>
    </div>
  );
}
