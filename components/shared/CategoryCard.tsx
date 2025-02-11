import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface CategoryCardProps {
  href: string
  image: string
  category: string
  title: string
  description: string
  author: string
  readTime: string
}

export function CategoryCard({
  href,
  image,
  category,
  title,
  description,
  author,
  readTime,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden group bg-background dark:bg-zinc-900 h-[400px] flex flex-col border border-gray-200 dark:border-zinc-800">
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
            className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-[2px] w-fit"
          >
            {category}
          </Badge>
          <h3 className="mt-4 text-xl font-bold dark:text-white group-hover:text-purple-400 transition-colors line-clamp-2 h-[56px]">
            {title}
          </h3>
          <p className="mt-2 text-muted-foreground line-clamp-3 flex-grow">
            {description}
          </p>
        </div>
      </Card>
    </Link>
  );
}

