export const runtime = "edge";
export const nodejs = true; 
import { BlogHeader } from "@/components/blog-detail/blog-header";
import { CategoriesSidebar } from "@/components/blog-detail/categories-sidebar";
import { RelatedPosts } from "@/components/blog-detail/related-posts";
import posts,{type Post} from "@/data/posts/index";
import { filterPostsByCreateTime } from "@/utils/postFilters";
export default function BlogPost({ params:{slug} }: { params: { slug: string } }) {
    const post: Post = posts.find((post) => post.slug === slug)!;
  return (
    <article className="min-h-screen bg-background dark:bg-zinc-950">
      <BlogHeader
        title="How to implement smooth scrolling in Next.js with Lenis and GSAP"
        type="blog"
        author={post.author}
        date={post.createdTime}
        categories={[`#${post.type}`]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="lg:sticky lg:top-20 lg:self-start">
            <CategoriesSidebar />
          </div>
        </div>
      </div>

      <RelatedPosts posts={filterPostsByCreateTime(posts)} />
    </article>
  );
}
