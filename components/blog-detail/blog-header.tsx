import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { type Post } from "@/data/posts/index";

export function BlogHeader({ title, author, createdTime, type, originalURL, ...rest }: Post) {
  return (
    <div className="relative w-full dark:bg-black pt-20">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex items-center gap-2">
          <Link
            key={type}
            href={`/categories/${type.toLowerCase().replace("#", "")}`}
          >
            <Badge
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              #{type}
            </Badge>
          </Link>
        </div>
        <h1 className="mb-6 text-4xl md:text-6xl font-black  uppercase leading-tight tracking-tight">
          <span className="relative">
            <span className="relative z-10  dark:text-white to-white/80 bg-clip-text ">
              {title}
            </span>
          </span>
        </h1>
        <div className="flex flex-col gap-2 dark:text-white">
          <div className="flex gap-2">
            <div className="">created by {author},</div>
            <div>{createdTime}</div>
          </div>
          {originalURL && (
            <div className="text-sm">
              <span className="text-gray-500 dark:text-gray-400">Reference: </span>
              <a
                href={originalURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                {originalURL}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

