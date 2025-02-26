             import Link from "next/link"
             import { cn } from "@/lib/utils"
             import { blogTypes } from "@/data/types";
             
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
                     "bg-purple-700 text-white hover:bg-purple-500/30",
                     active && "bg-purple-500 text-white hover:bg-purple-600",
                   )}
                 >
                   {children}
                 </Link>
               )
             }
             
             export function CategoriesSidebar() {
               return (
                 <div className="bg-amber-50 dark:bg-zinc-900/50 rounded-lg p-6 backdrop-blur-sm">
                   <h2 className="text-xl font-bold dark:text-white mb-4">Categories</h2>
                   <div className="flex flex-wrap gap-2">
                     {blogTypes.map((type) => (
                       <CategoryButton key={type.slug} href={`/categories/${type.slug}`}>
                         {type.slug}
                       </CategoryButton>
                     ))}
                   </div>
                 </div>
               );
             }