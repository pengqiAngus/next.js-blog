import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface ToolCardProps {
  href: string
  image: string
  category: string
  title: string
  description: string
  votes: number
}

export function ToolCard({ href, image, category, title, description, votes }: ToolCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden group bg-background dark:bg-zinc-900 h-full border border-gray-200 dark:border-zinc-800">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant="secondary"
              className={`
                ${
                  category === "Productivity" &&
                  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                }
                ${
                  category === "Code" &&
                  "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300"
                }
                ${
                  category === "Design" &&
                  "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                }
              `}
            >
              {category}
            </Badge>
          </div>
          <h3 className="text-xl font-bold dark:text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </Card>
    </Link>
  );
}

