import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { type Post } from "@/data/posts/index";


export function BlogCard({
  slug,
  image,
  type,
  title,
  description,
  author,
}: Post) {
  return (
    <Card className="overflow-hidden group h-64 flex gap-x-3 p-6 bg-background dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
      <div className="relative w-[30%]  justify-items-center hidden  lg:flex">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={100}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="">
        <div className="flex  gap-y-2 flex-col">
          <Badge
            variant="secondary"
            className="bg-purple-100 w-fit text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-[2px]"
          >
            {type}
          </Badge>
          <Link
            href={slug}
            className={`text-2xl font-bold tracking-tight text-foreground dark:text-white group-hover:text-primary transition-colors `}
          >
            {title}
          </Link>
        </div>
        <p className="mt-2 text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Card>
  );
}

