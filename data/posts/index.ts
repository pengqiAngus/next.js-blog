export interface Post {
  slug: string;
  originalURL: string;
  image: string;
  type: "react" | "ui" | "user-experience" | "productivity" | "ai";
  title: string;
  description: string;
  popular: boolean;
  createdTime: string;
  content: string;
  author: string;
}
export interface AlgoliaPost {
  slug: string;
  image: string;
  type: string;
  title: string;
  description: string;
}
import reactPost from "./react";
import aiPost from "./ai";
import productivityPost from "./productivity";
import userExperiencePost from "./user-experience";
import uiPost from "./ui";

const posts: Post[] = [
  ...reactPost,
  ...aiPost,
  ...productivityPost,
  ...userExperiencePost,
  ...uiPost,
];
export default posts;
