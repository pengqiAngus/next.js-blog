'use client'
export const runtime = "edge";
export const nodejs = true;
import { BlogHeader } from "@/components/blog-detail/blog-header";
import { CategoriesSidebar } from "@/components/blog-detail/categories-sidebar";
import { RelatedPosts } from "@/components/blog-detail/related-posts";
import { TextExplainer } from "@/components/shared/TextExplainer";
import posts,{type Post} from "@/data/posts/index";
import { filterPostsByCreateTime } from "@/utils/postFilters";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default  function BlogPost({ params: {  slug } }: { params: { slug: string } }) {
  const { t } = useTranslation();
  const post: Post =   posts.find((post) => post.slug === slug)!;
  return (
    <article className="min-h-screen bg-background dark:bg-zinc-950">
      <BlogHeader {...post} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8">
          <div>
            <Alert className="mb-6">
              <Info className="h-4 w-4" />
              <AlertDescription>
                {t('blogDetail.aiExplanation')}
              </AlertDescription>
            </Alert>
            <TextExplainer>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </TextExplainer>
          </div>
          <div className="lg:sticky lg:top-20 lg:self-start">
            <CategoriesSidebar />
          </div>
        </div>
      </div>

      <RelatedPosts posts={filterPostsByCreateTime(posts)} />
    </article>
  );
}
