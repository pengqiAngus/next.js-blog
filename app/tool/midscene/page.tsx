"use client";
export const runtime = "edge";
import React from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Github, BookOpen, Twitter } from "lucide-react";

export default function MidscenePage() {
  return (
    <div>
      <div className="min-h-screen bg-background">
        <Head>
          <title>Midscene.js - Joyful Automation by AI</title>
          <meta
            name="description"
            content="Experience Midscene.js, a powerful UI automation tool that makes testing and interacting with web applications intuitive through natural language."
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
                UI Automation Tool
              </span>
            </div>
            <h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r text-black dark:text-white from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 
                         bg-clip-text text-transparent"
            >
              Midscene.js
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Interact, Query and Assert by Natural Language
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Whether you're brainstorming, testing, or automating UI interactions,
              Midscene.js provides the perfect balance of simplicity and
              functionality through natural language commands.
            </p>
          </div>

          {/* Video Demo */}
          <div className="mb-16">
            <div className="w-full rounded-xl overflow-hidden bg-card border-border shadow-2xl transition-all duration-300">
              <div className="aspect-video relative flex justify-center items-center">
                <iframe
                  src="https://www.youtube.com/embed/lrF0lPfrwag?vq=hd1080"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Midscene Demo"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Action",
                description:
                  "Execute a series of actions by describing the steps in natural language using .ai or .aiAction methods.",
              },
              {
                title: "Query",
                description:
                  "Extract customized data from the UI using .aiQuery. Simply describe the JSON format you want, and AI will understand the page.",
              },
              {
                title: "Assert",
                description:
                  "Perform assertions on the page using .aiAssert with natural language descriptions, making test maintenance easier.",
              },
              {
                title: "Visual Reports",
                description:
                  "Get detailed visual reports after each run, with animated replays and step-by-step analysis for better debugging.",
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visualized Report Section */}
          <div className="mb-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Visualized Reports for Better Debugging
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Midscene provides comprehensive visual reports after each automation run, making debugging and maintenance more intuitive and efficient.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 dark:text-purple-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Animated replay of each automation step</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 dark:text-purple-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Interactive playground for prompt adjustment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 dark:text-purple-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Detailed step-by-step execution analysis</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://midscenejs.com/report.gif"
                  alt="Midscene Visual Report Demo"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Simple Yet Powerful
            </h2>
            <div className="bg-zinc-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-white">
                <code>
                  {`// 👀 type keywords, perform a search
await ai('type "Headphones" in search box, hit Enter');

// 👀 find the items, return in JSON
const items = await aiQuery(
  "{itemTitle: string, price: Number}[], find item in list and corresponding price"
);

console.log("headphones in stock", items);

// 👀 assert by natural language
await aiAssert("There is a category filter on the left");`}
                </code>
              </pre>
            </div>
          </div>

          {/* Integration Methods */}
          <div className="prose max-w-none dark:prose-invert mb-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Multiple Ways to Integrate
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "YAML Scripts",
                  description:
                    "Write automation scripts in YAML format for a more declarative approach to UI testing.",
                },
                {
                  title: "Chrome Extension",
                  description:
                    "Control desktop Chrome directly through the Midscene extension for quick automation tasks.",
                },
                {
                  title: "Puppeteer Integration",
                  description:
                    "Seamlessly integrate with Puppeteer for powerful browser automation capabilities.",
                },
                {
                  title: "Playwright Support",
                  description:
                    "Use Midscene with Playwright for cross-browser testing and automation.",
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

          {/* Community & Resources */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Community & Resources
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  About Midscene
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Midscene is an open-source UI automation tool that makes testing
                  and interaction with web applications intuitive through natural
                  language. It supports both general-purpose LLMs and specialized
                  open-source models for enhanced performance and privacy.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "GitHub",
                    description:
                      "Star us on GitHub and contribute to the project.",
                    link: "https://github.com/web-infra-dev/midscene",
                    icon: <Github className="w-6 h-6" />,
                    linkText: "View on GitHub",
                  },
                  {
                    title: "Documentation",
                    description:
                      "Learn more about features and implementation details.",
                    link: "https://docs.excalidraw.com/",
                    icon: <BookOpen className="w-6 h-6" />,
                    linkText: "Read the Docs",
                  },
                  {
                    title: "Twitter",
                    description:
                      "Follow us for the latest updates and features.",
                    link: "https://x.com/midscene_ai",
                    icon: <Twitter className="w-6 h-6" />,
                    linkText: "@midscene_ai",
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