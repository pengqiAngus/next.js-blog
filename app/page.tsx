export const runtime = "edge";
import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { ContentSection } from "@/components/home/ContentSection";
import { RecentPostsSection } from "@/components/home/RecentPostsSection";
import { ToolsSection } from "@/components/home/ToolsSection";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <main className="flex-1">
        <HeroSection />
        <ContentSection />
        <RecentPostsSection />
        <ToolsSection />
      </main>
    </div>
  );
}
