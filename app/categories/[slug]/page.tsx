
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
import { ScrollArea } from "@/components/ui/scroll-area";
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
      <ScrollArea className="w-full overflow-auto relative h-full rounded-2xl p-10 bg-gradient-to-br from-slate-800  to-purple-900   ">
        <div className="grid md:grid-cols-3 gap-6 ">
          {(cat.slug === "all"
            ? posts
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
      </ScrollArea>
    ),
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-foreground dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="h-[62rem] [perspective:1000px] relative flex flex-col  mx-auto w-full items-start justify-start  [transform-style:preserve-3d]">
          <Tabs
            tabs={tabs}
            containerClassName=""
            tabClassName="px-6 py-3 rounded-full text-sm text-black  dark:text-white font-medium b transition-all hover:text-purple-500 hover:bg-purple-500/10"
            activeTabClassName="bg-gradient-to-br from-purple-700 to-violet-900 text-white  hover:from-purple-600 hover:to-violet-800"
            contentClassName="mt-32"
          />
        </div>
      </div>
    </div>
  );
}
