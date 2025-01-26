import Link from "next/link"
import Image from "next/image"

interface PopularVideoCardProps {
  href: string
  image: string
  title: string
  views: string
}

export function PopularVideoCard({ href, image, title, views }: PopularVideoCardProps) {
  return (
    <Link href={href} className="flex gap-4 group items-start">
      <div className="relative w-32 aspect-video flex-shrink-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm text-white group-hover:text-purple-400 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{views} views</p>
      </div>
    </Link>
  )
}

