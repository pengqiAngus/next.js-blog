import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface BlogHeaderProps {
  title: string;
    type: string;
  author: string;
  date: string;
  categories: string[];
}

export function BlogHeader({ title, author, date, categories,type }: BlogHeaderProps) {
  return (
    <div className="relative w-full dark:bg-black pt-20">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex items-center gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category
                .toLowerCase()
                .replace("#", "")}`}
            >
              <Badge
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                {category}
              </Badge>
            </Link>
          ))}
        </div>
        <h1 className="mb-6 text-4xl md:text-6xl font-black  uppercase leading-tight tracking-tight">
          <span className="relative">
            <span className="relative z-10  dark:text-white to-white/80 bg-clip-text ">
              {title}
            </span>
          </span>
        </h1>
        <div className="flex gap-2 dark:text-white">
          <div className="">created by {author},</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
}

