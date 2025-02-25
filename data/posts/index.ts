export interface Post {
  slug: string;
  image: string;
  type: "react" | "ui" | "user-experience" | "productivity" | 'ai';
  title: string;
  description?: string;
  popular: boolean;
  createdTime: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "smooth-scroll",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "How to implement smooth scrolling in Next.js with Lenis and GSAP",
    description:
      "Implement smooth scrolling and parallax effects in Next.js using Lenis and GSAP. Dive into detailed tutorials and best practices.",
    popular: true,
    createdTime: "2023-06-15T10:00:00Z",
    content:
      '<div style="max-width: 800px; margin: 0 auto; padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif; line-height: 1.6; color: #333;"><h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: #2d3748;">Rich Text Editor Implementation Guide for Next.js</h1><h2 style="font-size: 2rem; margin-top: 2.5rem; margin-bottom: 1.5rem; color: #2d3748;">Introduction</h2><p style="margin-bottom: 1.5rem;">In modern web applications, rich text editors are essential and commonly used components. This guide explores various approaches to implementing rich text editing in Next.js projects and provides detailed implementation guidelines.</p><h2 style="font-size: 2rem; margin-top: 2.5rem; margin-bottom: 1.5rem; color: #2d3748;">Comparison of Popular Solutions</h2><h3 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2d3748;">1. Draft.js</h3><p style="margin-bottom: 1.5rem;">A rich text framework developed by Facebook, perfectly integrated with the React ecosystem.</p><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1.5rem 0; padding: 1.5rem; background-color: #f7fafc; border-radius: 0.5rem;"><div><h4 style="font-size: 1.25rem; margin-top: 0; margin-bottom: 0.75rem; color: #2d3748;">Advantages:</h4><ul style="margin-bottom: 0; padding-left: 1.5rem;"><li style="margin-bottom: 0.5rem;">Powerful data model</li><li style="margin-bottom: 0.5rem;">Highly customizable</li><li style="margin-bottom: 0.5rem;">Excellent performance</li><li style="margin-bottom: 0.5rem;">Native React support</li></ul></div><div><h4 style="font-size: 1.25rem; margin-top: 0; margin-bottom: 0.75rem; color: #2d3748;">Disadvantages:</h4><ul style="margin-bottom: 0; padding-left: 1.5rem;"><li style="margin-bottom: 0.5rem;">Steep learning curve</li><li style="margin-bottom: 0.5rem;">Manual HTML import/export handling</li><li style="margin-bottom: 0.5rem;">Large bundle size</li></ul></div></div><h3 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2d3748;">2. TinyMCE</h3><p style="margin-bottom: 1.5rem;">A classic rich text editor with comprehensive enterprise-grade features.</p><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1.5rem 0; padding: 1.5rem; background-color: #f7fafc; border-radius: 0.5rem;"><div><h4 style="font-size: 1.25rem; margin-top: 0; margin-bottom: 0.75rem; color: #2d3748;">Advantages:</h4><ul style="margin-bottom: 0; padding-left: 1.5rem;"><li style="margin-bottom: 0.5rem;">Complete functionality</li><li style="margin-bottom: 0.5rem;">Excellent cross-browser compatibility</li><li style="margin-bottom: 0.5rem;">Rich plugin ecosystem</li><li style="margin-bottom: 0.5rem;">Professional technical support</li></ul></div><div><h4 style="font-size: 1.25rem; margin-top: 0; margin-bottom: 0.75rem; color: #2d3748;">Disadvantages:</h4><ul style="margin-bottom: 0; padding-left: 1.5rem;"><li style="margin-bottom: 0.5rem;">Paid commercial version</li><li style="margin-bottom: 0.5rem;">Complex configuration</li><li style="margin-bottom: 0.5rem;">Large package size</li></ul></div></div><h2 style="font-size: 2rem; margin-top: 2.5rem; margin-bottom: 1.5rem; color: #2d3748;">Implementation Example</h2><p style="margin-bottom: 1.5rem;">Below is a complete guide to implementing a rich text editor using Tiptap in Next.js:</p><h3 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2d3748;">1. Install Dependencies</h3><pre style="background-color: #f7fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.5rem 0;"><code style="font-family: monospace; font-size: 0.9rem;">npm install @tiptap/react @tiptap/pm @tiptap/starter-kit</code></pre><h3 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2d3748;">2. Basic Component Implementation</h3><pre style="background-color: #f7fafc; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.5rem 0;"><code style="font-family: monospace; font-size: 0.9rem;">import { useEditor, EditorContent } from \'@tiptap/react\'\nimport StarterKit from \'@tiptap/starter-kit\'\n\nconst RichTextEditor = ({ content, onChange }) => {\n  const editor = useEditor({\n    extensions: [\n      StarterKit,\n    ],\n    content,\n    onUpdate: ({ editor }) => {\n      onChange(editor.getHTML())\n    },\n  })\n\n  return (\n    &lt;div className="rich-text-editor"&gt;\n      &lt;EditorContent editor={editor} /&gt;\n    &lt;/div&gt;\n  )\n}\n\nexport default RichTextEditor</code></pre><h2 style="font-size: 2rem; margin-top: 2.5rem; margin-bottom: 1.5rem; color: #2d3748;">Best Practices</h2><ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;"><li style="margin-bottom: 1rem;"><h4 style="font-size: 1.25rem; margin-top: 0; margin-bottom: 0.5rem; color: #2d3748;">Content Validation</h4><p style="margin: 0;">Implement XSS filtering and format validation before saving content</p></li><li style="margin-bottom: 1rem;"><h4 style="font-size: 1.25rem; margin-top: 0; margin-bottom: 0.5rem; color: #2d3748;">Performance Optimization</h4><p style="margin: 0;">Use debouncing for content updates and optimize re-rendering logic</p></li><li style="margin-bottom: 1rem;"><h4 style="font-size: 1.25rem; margin-top: 0; margin-bottom: 0.5rem; color: #2d3748;">Auto-save</h4><p style="margin: 0;">Implement periodic content saving to prevent accidental loss</p></li></ul></div>',
  },
  {
    slug: "smooth-scroll",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "How to implement smooth scrolling in Next.js with Lenis and GSAP",
    description:
      "Implement smooth scrolling and parallax effects in Next.js using Lenis and GSAP. Dive into detailed tutorials and best practices.",
    popular: true,
    createdTime: "2023-06-15T10:00:00Z",
    content: "",
  },
  {
    slug: "user-location",
    image:
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "user-experience",
    title: "How to Get User's Location in React.js",
    description:
      "Learn how to get the user's location in React.js using the Geolocation API. This tutorial will show you how to request and handle location data.",
    popular: true,
    createdTime: "2023-06-10T14:30:00Z",
    content: "",
  },
  {
    slug: "react-hooks",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "Mastering React Hooks: A Comprehensive Guide",
    description:
      "Dive deep into React Hooks and learn how to use them effectively in your projects. This guide covers useState, useEffect, useContext, and custom hooks.",
    popular: false,
    createdTime: "2023-06-05T09:15:00Z",
    content: "",
  },
  {
    slug: "nextjs-seo",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "ui",
    title: "SEO Optimization Techniques for Next.js Applications",
    description:
      "Learn how to improve your Next.js application's search engine visibility. This article covers meta tags, structured data, and performance optimization for better SEO.",
    popular: false,
    createdTime: "2023-06-01T16:45:00Z",
    content: "",
  },
  {
    slug: "nextjs-portfolio",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "ui",
    title:
      "Next.js Tutorial: Build a Mobile Responsive Portfolio with Tailwind CSS and Framer-motion",
    popular: true,
    createdTime: "2023-05-28T11:20:00Z",
    content: "",
  },
  {
    slug: "crypto-screener",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "productivity",
    title:
      "React Website Tutorial: Build Feature Rich Crypto Screener App with Tailwind CSS",
    popular: false,
    createdTime: "2023-05-25T13:40:00Z",
    content: "",
  },
  {
    slug: "responsive-landing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "Responsive Landing Page With Three.js + React.js",
    popular: false,
    createdTime: "2023-05-20T08:55:00Z",
    content: "",
  },
  {
    slug: "fashion-studio",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "Fashion Studio Website With Smooth Animations",
    popular: true,
    createdTime: "2023-05-15T15:10:00Z",
    content: "",
  },
];
