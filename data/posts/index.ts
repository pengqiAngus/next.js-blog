export interface Post {
  slug: string;
  image: string;
  type: string;
  title: string;
  description?: string;
  author?: string;
  readTime?: string;
  likes?: number;
  comments?: number;
  views?: string;
  popular: boolean;
  createdTime: string;
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
    author: "CodeBucks",
    readTime: "11 min",
    views: "10,544",
    popular: true,
    createdTime: "2023-06-15T10:00:00Z",
  },
  {
    slug: "smooth-scroll",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "How to implement smooth scrolling in Next.js with Lenis and GSAP",
    description:
      "Implement smooth scrolling and parallax effects in Next.js using Lenis and GSAP. Dive into detailed tutorials and best practices.",
    author: "CodeBucks",
    readTime: "11 min",
    views: "10,544",
    popular: true,
    createdTime: "2023-06-15T10:00:00Z",
  },
  {
    slug: "user-location",
    image:
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "user-experience",
    title: "How to Get User's Location in React.js",
    description:
      "Learn how to get the user's location in React.js using the Geolocation API. This tutorial will show you how to request and handle location data.",
    author: "CodeBucks",
    readTime: "14 min",
    views: "16,971",
    popular: true,
    createdTime: "2023-06-10T14:30:00Z",
  },
  {
    slug: "react-hooks",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "Mastering React Hooks: A Comprehensive Guide",
    description:
      "Dive deep into React Hooks and learn how to use them effectively in your projects. This guide covers useState, useEffect, useContext, and custom hooks.",
    author: "CodeBucks",
    readTime: "18 min",
    popular: false,
    createdTime: "2023-06-05T09:15:00Z",
  },
  {
    slug: "nextjs-seo",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "ui",
    title: "SEO Optimization Techniques for Next.js Applications",
    description:
      "Learn how to improve your Next.js application's search engine visibility. This article covers meta tags, structured data, and performance optimization for better SEO.",
    author: "CodeBucks",
    readTime: "15 min",
    popular: false,
    createdTime: "2023-06-01T16:45:00Z",
  },
  {
    slug: "nextjs-portfolio",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "ui",
    title:
      "Next.js Tutorial: Build a Mobile Responsive Portfolio with Tailwind CSS and Framer-motion",
    likes: 15800,
    comments: 744,
    views: "606.6k",
    popular: true,
    createdTime: "2023-05-28T11:20:00Z",
  },
  {
    slug: "crypto-screener",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "productivity",
    title:
      "React Website Tutorial: Build Feature Rich Crypto Screener App with Tailwind CSS",
    likes: 735,
    comments: 80,
    popular: false,
    createdTime: "2023-05-25T13:40:00Z",
  },
  {
    slug: "responsive-landing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "Responsive Landing Page With Three.js + React.js",
    likes: 623,
    comments: 92,
    popular: false,
    createdTime: "2023-05-20T08:55:00Z",
  },
  {
    slug: "fashion-studio",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    type: "react",
    title: "Fashion Studio Website With Smooth Animations",
    likes: 892,
    comments: 156,
    views: "47.8k",
    popular: true,
    createdTime: "2023-05-15T15:10:00Z",
  },
];

