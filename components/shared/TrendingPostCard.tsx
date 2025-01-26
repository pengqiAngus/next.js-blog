import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface TrendingPostCardProps {
  href: string
  image: string
  category: string
  title: string
  views: string
}

export function TrendingPostCard({ href, image, category, title, views }: TrendingPostCardProps) {
  return (
    <Link href={href} className="flex gap-4 group">
      <div className="relative w-24 h-24">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
      </div>
      <div className="flex-1">
        <Badge
          variant="secondary"
          className="bg-secondary text-secondary-foreground dark:bg-secondary/20 dark:text-secondary-foreground mb-2"
        >
          {category}
        </Badge>
        <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{views} Views</p>
      </div>
    </Link>
  )
}

