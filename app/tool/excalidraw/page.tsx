"use client";
export const runtime = "edge";
import React from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Github, BookOpen, Twitter } from "lucide-react";
import Excalidraw from "@/components/shared/Excalidraw";
export default function ExcalidrawPage() {
  return (
    <div>
      <div className="min-h-screen bg-background">
        <Head>
          <title>Excalidraw - Intuitive Online Whiteboard Tool</title>
          <meta
            name="description"
            content="Experience Excalidraw, the open-source virtual whiteboard that makes creating hand-drawn diagrams and sketches effortless and collaborative."
          />
        </Head>
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="inline-block mb-6">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r 
                           from-blue-500 to-purple-500 text-white"
              >
                Open Source
              </span>
            </div>
            <h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r text-black dark:text-white from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 
                         bg-clip-text text-transparent"
            >
              Excalidraw
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Transform Your Ideas into Beautiful Hand-Drawn Visuals
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Whether you're brainstorming, teaching, or creating technical
              diagrams, Excalidraw provides the perfect balance of simplicity
              and functionality for all your visualization needs.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Intuitive Design",
                description:
                  "Get started instantly with our user-friendly interface. Create professional-looking diagrams with our signature hand-drawn style.",
              },
              {
                title: "Real-time Collaboration",
                description:
                  "Work seamlessly with your team in real-time. Share your boards instantly and collaborate on ideas effortlessly.",
              },
              {
                title: "Open Source Freedom",
                description:
                  "Built with transparency and community in mind. Benefit from regular updates and extensive customization options.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-xl bg-card text-card-foreground"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="mb-16">
            {/* <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Try It Now
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Experience the power of Excalidraw right here. Start drawing,
              collaborate, and discover why thousands of teams trust us for
              their visualization needs.
            </p> */}
            <div className="w-full rounded-xl overflow-hidden bg-card border-border shadow-2xl transition-all duration-300">
              <Excalidraw />
            </div>
          </div>

          {/* Usage Guide */}
          <div className="prose max-w-none dark:prose-invert">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Getting Started
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Basic Drawing Tools",
                  description:
                    "Access a comprehensive set of drawing tools from the left toolbar. Create shapes while maintaining the signature hand-drawn style.",
                },
                {
                  title: "Text and Typography",
                  description:
                    "Add text elements with customizable fonts and sizes. Use markdown-style formatting for quick styling options.",
                },
                {
                  title: "Style Customization",
                  description:
                    "Fine-tune your drawings using the properties panel. Adjust colors, stroke width, and save custom styles.",
                },
                {
                  title: "Collaboration Features",
                  description:
                    "Share your workspace with a single click. Enable real-time collaboration and track changes effortlessly.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg 
                                      transition-all duration-300 hover:shadow-xl dark:shadow-gray-900/30"
                >
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* References and Social Links */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Community & Resources
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  About This Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This page demonstrates the integration of Excalidraw, an
                  open-source virtual whiteboard tool. All credits for
                  Excalidraw go to the original creators and contributors.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "GitHub Repository",
                    description:
                      "Explore the source code and contribute to the project.",
                    link: "https://github.com/excalidraw/excalidraw/tree/master",
                    icon: <Github className="w-6 h-6" />,
                    linkText: "View on GitHub",
                  },
                  {
                    title: "Official Documentation",
                    description:
                      "Learn more about features and implementation details.",
                    link: "https://docs.excalidraw.com/",
                    icon: <BookOpen className="w-6 h-6" />,
                    linkText: "Read the Docs",
                  },
                  {
                    title: "Follow on X (Twitter)",
                    description:
                      "Stay updated with the latest news and features.",
                    link: "https://x.com/excalidraw",
                    icon: <Twitter className="w-6 h-6" />,
                    linkText: "@excalidraw",
                  },
                ].map((resource, index) => (
                  <Card
                    key={index}
                    className="transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-gray-600 dark:text-gray-300">
                          {resource.icon}
                        </div>
                        <h4 className="font-semibold dark:text-white">
                          {resource.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {resource.description}
                      </p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 
                               dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                      >
                        {resource.linkText}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
