import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryPageButtonProps {
  href: string
  active?: boolean
  children: React.ReactNode
  contentType?: "blog" | "video" | "all"
}

export function CategoryPageButton({ href, active, children, contentType }: CategoryPageButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all",
        "border border-purple-500 hover:bg-purple-500/10",
        active ? "bg-purple-500 text-white hover:bg-purple-600" : "text-purple-500 hover:text-purple-400",
      )}
    >
      {children}
    </Link>
  )
}

