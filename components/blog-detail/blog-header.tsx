import { Badge } from "@/components/ui/badge"
import { Facebook, Twitter, Linkedin, Share2, Eye } from "lucide-react"
import Link from "next/link"

interface BlogHeaderProps {
  title: string
  author: string
  date: string
  readTime: string
  views: number
  categories: string[]
}

export function BlogHeader({ title, author, date, readTime, views, categories }: BlogHeaderProps) {
  return (
    <div className="relative w-full bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex items-center gap-2">
          {categories.map((category) => (
            <Link key={category} href={`/categories/blog/${category.toLowerCase().replace("#", "")}`}>
              <Badge
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                {category}
              </Badge>
            </Link>
          ))}
        </div>
        <h1 className="mb-6 text-4xl md:text-6xl font-black text-white uppercase leading-tight tracking-tight">
          <span className="relative">
            <span className="relative z-10 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              {title}
            </span>
          </span>
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <span>By {author}</span>
          </div>
          <span>•</span>
          <span>{readTime}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{views.toLocaleString()} views</span>
          </div>
          <span>•</span>
          <span>{date}</span>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <button className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 transition-colors">
            <Facebook className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-sky-500 p-2 text-white hover:bg-sky-600 transition-colors">
            <Twitter className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-blue-700 p-2 text-white hover:bg-blue-800 transition-colors">
            <Linkedin className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-orange-600 p-2 text-white hover:bg-orange-700 transition-colors">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

