"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
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
            <CardContainer key={tool.slug} className="inter-var">
              <CardBody className="bg-white dark:bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] border-gray-200 dark:border-gray-800 w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="100"
                  rotateZ={-10}
                  className="w-full"
                >
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.title}
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover group-hover/card:shadow-xl"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="flex items-center justify-between mt-4"
                >
                  <span className={`text-sm ${tool.category === "Productivity" ? "text-green-500" : "text-purple-500"}`}>
                    {tool.category}
                  </span>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-lg font-semibold mt-2 dark:text-white"
                >
                  {tool.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="70"
                  className="text-sm text-muted-foreground mt-2"
                >
                  {tool.description}
                </CardItem>
                <CardItem translateZ="80" className="w-full mt-4">
                  <Link href={tool.slug} className="w-full">
                    <Button className="w-full">Find Out More</Button>
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

