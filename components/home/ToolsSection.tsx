import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ToolCard } from "@/components/shared/ToolCard"
import { featuredTools } from "@/data/tools/index"

export function ToolsSection() {
  return (
    <section className="py-20 bg-[#f3f3f3] dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-foreground dark:text-white tracking-tight max-w-3xl leading-tight relative">
            <span className="relative">
              A GOOD TOOL IMPROVES THE WAY YOU WORK.
            </span>
          </h2>
          {/* <Link
            href="/categories/tool"
            className="text-foreground dark:text-white hover:text-primary transition-colors flex items-center gap-2"
          >
            See More New Tools
            <ArrowUpRight className="w-4 h-4" />
          </Link> */}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              href={tool.slug}
              image={tool.image}
              category={tool.category}
              title={tool.title}
              description={tool.description}
              votes={tool.votes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

