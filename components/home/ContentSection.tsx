"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Compare } from "@/components/ui/compare";

export function ContentSection() {
  return (
    <section className="py-12 bg-[#f3f3f3] dark:bg-[#0f0f10]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          {/* Main Content */}
          <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
            <Compare
              firstImage="/image/home-3.jpg"
              secondImage="/image/home-4.jpg"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[100%] md:w-[100%]"
              slideMode="hover"
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CardContainer className="inter-var">
              <CardBody className="bg-white dark:bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] border-gray-200 dark:border-gray-800 w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-center mb-4 dark:text-white"
                >
                  Tool Of The Day
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full"
                >
                  <Image
                    src="https://plus.excalidraw.com/twitter_card.png?v1"
                    alt="Excalidraw"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover group-hover/card:shadow-xl"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="flex items-center justify-between mt-4"
                >
                  <span className="text-sm text-green-500">Productivity</span>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-lg font-semibold mt-2 dark:text-white"
                >
                  Excalidraw
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="70"
                  className="text-sm text-muted-foreground mt-2"
                >
                  Excalidraw is a virtual collaborative whiteboard tool that
                  lets you easily sketch diagrams that have a hand-drawn feel to
                  them
                </CardItem>
                <CardItem translateZ="80" className="w-full mt-4">
                  <Link href="/tool/excalidraw" className="w-full">
                    <Button className="w-full">Find Out More</Button>
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
