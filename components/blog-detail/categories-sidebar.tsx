import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryButtonProps {
  href: string
  active?: boolean
  children: React.ReactNode
}

function CategoryButton({ href, active, children }: CategoryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
        "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30",
       "bg-purple-500 text-white hover:bg-purple-600",
      )}
    >
      {children}
    </Link>
  )
}

export function CategoriesSidebar() {
  return (
    <div className="bg-amber-50  dark:bg-zinc-900/50 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-xl font-bold dark:text-white mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <CategoryButton href="/categories/all">All</CategoryButton>
        <CategoryButton href="/categories/all/react-js">
          React Js
        </CategoryButton>
        <CategoryButton href="/categories/all/redux">Redux</CategoryButton>
        <CategoryButton href="/categories/all/ui-design">
          UI Design
        </CategoryButton>
        <CategoryButton href="/categories/all/user-experience">
          User Experience
        </CategoryButton>
        <CategoryButton href="/categories/all/next-js">Next Js</CategoryButton>
        <CategoryButton href="/categories/all/development-tools">
          Development Tools
        </CategoryButton>
        <CategoryButton href="/categories/all/productivity">
          Productivity
        </CategoryButton>
      </div>
    </div>
  );
}

