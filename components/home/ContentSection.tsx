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
              <Link href="/blog/adaptive-ui-in-react-constructing-self-configuring-and-context-aware-components-1e7n">
                <Image
                  src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsstlqmn41ro9i6tksp9j.png"
                  alt="Blog post about smooth scrolling"
                  width={800}
                  height={400}
                  className="rounded-t-lg"
                />
                <CardContent className="pt-4">
                  <h2 className="text-xl font-semibold mb-2">
                    Adaptive UI in React: Constructing Self-Configuring and
                    Context-Aware Components
                  </h2>
                  <p className="text-muted-foreground">
                    Learn how to build adaptive, self-configuring React
                    components that respond to user behavior, device
                    constraints, and context for an enhanced user experience.
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
                    src="https://plus.excalidraw.com/twitter_card.png?v1"
                    alt="Excalidraw"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-green-500">
                        Productivity
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Excalidraw</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Excalidraw is a virtual collaborative whiteboard tool that
                      lets you easily sketch diagrams that have a hand-drawn
                      feel to them
                    </p>
                    <Link href="/tool/excalidraw" className="w-full">
                      <Button className="w-full">Find Out More</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

