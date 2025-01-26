import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ThumbsUp, MessageSquare } from "lucide-react"

interface CategoryVideoCardProps {
  href: string
  image: string
  category: string
  title: string
  likes: number
  comments: number
}

export function CategoryVideoCard({ href, image, category, title, likes, comments }: CategoryVideoCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden group bg-background dark:bg-zinc-900 h-[350px] flex flex-col border border-gray-200 dark:border-zinc-800">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <Badge
            variant="secondary"
            className="bg-secondary text-secondary-foreground dark:bg-secondary/20 dark:text-secondary-foreground rounded-[2px] w-fit"
          >
            {category}
          </Badge>
          <h3 className="mt-4 text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2 h-[56px]">
            {title}
          </h3>
          <div className="mt-auto flex items-center gap-4 text-sm text-zinc-400">
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span>{comments} comments</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}

