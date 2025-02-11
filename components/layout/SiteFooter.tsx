import Link from "next/link"
import { Youtube, Twitter, Instagram, Linkedin, Rss } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-background dark:bg-zinc-950 text-foreground dark:text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 bg-zinc-800 rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
            </Link>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground dark:text-zinc-400">
                Anything you would like to share?
              </p>
              <p className="text-sm text-muted-foreground dark:text-zinc-400">
                Contact at,{" "}
                <a
                  href="mailto:codebucks27@gmail.com"
                  className="text-sm text-muted-foreground dark:text-zinc-400 hover:text-primary dark:hover:text-white transition-colors"
                >
                  anguske2027@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground dark:text-zinc-400">
            © 2025 Angus. All Rights Reserved.
          </div>

          {/* Navigation and Social */}
          <div className="space-y-6">
            <nav className="flex flex-col items-end gap-2">
              <Link
                href="/"
                className="text-sm text-foreground dark:text-white hover:text-primary dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/categories/blog"
                className="text-sm text-foreground dark:text-white hover:text-primary dark:hover:text-white transition-colors"
              >
                Post
              </Link>
              <Link
                href="/categories/videos"
                className="text-sm text-foreground dark:text-white hover:text-primary dark:hover:text-white transition-colors"
              >
                Videos
              </Link>
            </nav>
     
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-muted-foreground dark:text-zinc-400">
          Made with{" "}
          <span className="text-red-500" aria-label="love">
            ❤️
          </span>{" "}
          By Angus
        </div>
      </div>
    </footer>
  );
}

