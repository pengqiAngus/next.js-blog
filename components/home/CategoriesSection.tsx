import { CategoryButton } from "@/components/shared/CategoryButton"
import { categories } from "@/data/categories"

export function CategoriesSection() {
  return (
    <section className="py-12 bg-background dark:bg-zinc-950 text-foreground dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-white/10 pb-2">CATEGORIES</h2>
        {/* CategoryButton component has been updated with increased height and tilting hover effect */}
        <div className="flex flex-wrap gap-6">
          {categories.map((category,index) => (
            <CategoryButton key={category.slug+index} href={`/categories/${category.slug}`}>
              {category.name}
            </CategoryButton>
          ))}
        </div>
      </div>
    </section>
  )
}

