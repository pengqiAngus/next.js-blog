import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface BlogCardProps {
  href: string
  image: string
  category: string
  title: string
  description: string
  author: string
  readTime: string
  className?: string
}

export function BlogCard({
  href,
  image,
  category,
  title,
  description,
  author,
  readTime,
  className = "",
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden group flex gap-x-3 p-6 bg-background dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
      <div className="relative w-[30vw]">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="w-full rounded-lg" />
      </div>
      <div className="">
        <div className="flex  gap-y-2 flex-col">
          <Badge
            variant="secondary"
            className="bg-purple-100 w-fit text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-[2px]"
          >
            {category}
          </Badge>
          <Link
            href={href}
            className={`text-2xl font-bold tracking-tight text-foreground dark:text-white group-hover:text-primary transition-colors ${className}`}
          >
            {title}
          </Link>
        </div>
        <p className="mt-2 text-muted-foreground line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <span>By {author}</span>
          <span>•</span>
          <span>{readTime} read</span>
        </div>
      </div>
    </Card>
  )
}

