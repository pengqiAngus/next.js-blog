import Link from "next/link";
import { ModeToggle } from "@/components/common/mode-toggle";
import { ToolDropMenu } from "@/components/common/toolsDropMenu";

export function SiteHeader() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b text-foreground dark:text-white">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between relative z-10">
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
                href="/categories/all"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Posts
              </Link>
              <ToolDropMenu />
              <ModeToggle />
              {/* <LanguageSelector /> */}
            </nav>
          </div>
      </header>
      <div className="h-16"></div>
    </>
  );
}
