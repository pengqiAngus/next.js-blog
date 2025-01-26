import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryButtonProps {
  href: string
  children: React.ReactNode
}

export function CategoryButton({ href, children }: CategoryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block px-8 py-6 rounded-lg text-sm font-medium transition-all duration-300 transform",
        "border border-primary/30 dark:border-primary/70",
        "hover:border-primary dark:hover:border-primary",
        "bg-primary text-primary-foreground",
        "hover:bg-primary/90 dark:hover:bg-primary/90",
        "hover:-translate-y-1 hover:translate-x-1 hover:rotate-2",
      )}
    >
      {children}
    </Link>
  )
}

