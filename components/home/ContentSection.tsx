import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContentSection() {
  return (
    <section className="py-12 bg-[#f3f3f3] dark:bg-[#0f0f10]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            <Card className="border border-gray-200 dark:border-gray-800">
              <Link href="/blog/smooth-scroll">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Blog post about smooth scrolling"
                  width={800}
                  height={400}
                  className="rounded-t-lg"
                />
                <CardContent className="pt-4">
                  <h2 className="text-xl font-semibold mb-2">
                    How To Implement Smooth Scrolling In Next.js With Lenis And GSAP
                  </h2>
                  <p className="text-muted-foreground">
                    Learn how to create smooth scrolling and parallax effects in your Next.js applications using Lenis
                    and GSAP libraries.
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-center">Tool Of The Day</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Patterns.dev illustration"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-green-500">Productivity</span>
                      <span className="text-sm text-muted-foreground">194 votes</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Patterns.dev</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      A collection of design patterns and component patterns for building powerful web apps.
                    </p>
                    <Button className="w-full">Find Out More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

