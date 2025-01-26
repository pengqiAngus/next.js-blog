import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner"
import { HeroSection } from "@/components/home/HeroSection"
import { ContentSection } from "@/components/home/ContentSection"
import { CategoriesSection } from "@/components/home/CategoriesSection"
import { RecentPostsSection } from "@/components/home/RecentPostsSection"
import { SubscribeAndVideosSection } from "@/components/home/SubscribeAndVideosSection"
import { ToolsSection } from "@/components/home/ToolsSection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <main className="flex-1">
        <HeroSection />
        <ContentSection />
        <CategoriesSection />
        <RecentPostsSection />
        <SubscribeAndVideosSection />
        <ToolsSection />
      </main>
    </div>
  )
}

