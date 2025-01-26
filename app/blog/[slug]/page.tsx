import { BlogHeader } from "@/components/blog-detail/blog-header"
import { BlogContent } from "@/components/blog-detail/blog-content"
import { CategoriesSidebar } from "@/components/blog-detail/categories-sidebar"
import { RelatedPosts } from "@/components/blog-detail/related-posts"

const relatedPosts = [
  {
    slug: "user-location",
    title: "How to Get User's Location in React.js",
    category: "USER EXPERIENCE",
    readTime: "16 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1mPzcinoXYiCL8w6yFHX4AXKC6X9nr.png",
  },
  {
    slug: "react-modal",
    title: "Creating an Efficient React Modal Component with Hooks and Portals",
    category: "USER EXPERIENCE",
    readTime: "9 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1mPzcinoXYiCL8w6yFHX4AXKC6X9nr.png",
  },
  {
    slug: "react-pagination",
    title: "Build a Custom Pagination Component in ReactJS from Scratch",
    category: "REACT JS",
    readTime: "8 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1mPzcinoXYiCL8w6yFHX4AXKC6X9nr.png",
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article className="min-h-screen bg-background dark:bg-zinc-950">
      <BlogHeader
        title="How to implement smooth scrolling in Next.js with Lenis and GSAP"
        author="CodeBucks"
        date="December 6, 2023"
        readTime="12 min read"
        views={16061}
        categories={["#Next.Js", "#User-Experience"]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8">
          <BlogContent />
          <div className="lg:sticky lg:top-4 lg:self-start">
            <CategoriesSidebar />
          </div>
        </div>
      </div>

      <RelatedPosts posts={relatedPosts} />
    </article>
  )
}

