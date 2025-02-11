import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSelector } from "@/components/language-selector";

export function SiteHeader() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background dark:bg-[#0f0f10] text-foreground dark:text-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              A
            </div>
            <span className="font-semibold">Angus</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/categories/blog"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Posts
            </Link>
            <Link
              href="/categories/video"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Videos
            </Link>
            <Link
              href="/categories/tools"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Tools
            </Link>
            <ModeToggle />
            <LanguageSelector />
          </nav>
        </div>
      </header>
      <div className="h-16"></div>
    </>
  );
}
