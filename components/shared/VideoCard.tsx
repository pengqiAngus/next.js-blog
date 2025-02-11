import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MessageSquare, ThumbsUp } from "lucide-react"

interface VideoCardProps {
  href: string
  image: string
  category: string
  title: string
  likes: number
  comments: number
}

export function VideoCard({ href, image, category, title, likes, comments }: VideoCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden group bg-background dark:bg-zinc-900 border-primary/20 dark:border-[#ffa9af]">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <Badge
            variant="secondary"
            className="bg-[#ffa9af] text-black dark:bg-[#ffa9af]/50 dark:text-black rounded-[2px]"
          >
            {category}
          </Badge>
          <h3 className="mt-4 text-xl font-bold dark:text-white group-hover:text-purple-400 transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
      </Card>
    </Link>
  );
}

